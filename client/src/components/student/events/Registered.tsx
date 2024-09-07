import { RegisteredEventCard } from './RegisteredCard'
import React, { useEffect, useState } from 'react'
import { RegistrationData } from '@/constants/constant';
import axios from "axios";
import { LoadingState } from '@/components/common/LoadingState';
import NoRegistration from '@/components/common/NoRegistrations';

const RegisteredEvents = () => {
  const [registrations, setRegistrations] = useState<RegistrationData[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchRegistrations = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/event-responses/my-registrations`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(response.data);
        setRegistrations(response.data);
      } catch (error) {
        console.error('Error fetching registrations:', error);
      }
      setLoading(false);
    };

    fetchRegistrations();
  }, []);

  return (
    <div>
      {loading ? (
        <LoadingState />
      ) : registrations.length !== 0 ? (
        <div className="flex items-start justify-center p-2 gap-20">
          <div className="flex flex-col items-center justify-center p-2 gap-2">
            {registrations.map((registration, index) => (
              <RegisteredEventCard key={index} registration={registration} />
            ))}
          </div>
        </div>
      ) : (
        <NoRegistration />
      )}
    </div>
  );
};

export default RegisteredEvents;
