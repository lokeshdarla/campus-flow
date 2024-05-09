import axios from 'axios';
import { RegisteredEventCard } from './RegisteredCard'
import React, { useEffect, useState } from 'react'
import { RegistrationData } from '@/constants/constant';

const RegisteredEvents = () => {
  const [registrations, setRegistrations] = useState<RegistrationData[]>([]);
  useEffect(() => {
    const fetchRegistrations = async () => {
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
    };
    fetchRegistrations();
  }, []);

  return (
    <div className="flex items-start justify-center  p-2 gap-20">
      <div className="flex flex-col items-center justify-center p-2 gap-2 ">
        {registrations.map((registration, index) => {
          return <RegisteredEventCard key={index} registration={registration} />;
        })}
      </div>

    </div>

  )
}

export default RegisteredEvents
