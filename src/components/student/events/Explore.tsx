import { EventCarousel } from '@/components/common/FameCarousel'
import { EventCard } from '@/components/student/events/EventCard'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ExploreEvents = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const accessToken = localStorage.getItem('accessToken');
        if (!accessToken) {
          console.error('Access token not found in localStorage');
          return;
        }
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/events/all-events`, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        console.log(response.data)
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex items-start  p-2 gap-20">
      <div className="flex flex-col items-start justify-center explore_events p-2 gap-2 ">
        {data.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}

      </div>

      <div className="mt-14 hidden p-2 lg:block">

        <EventCarousel />
      </div>
    </div>

  )
}

export default ExploreEvents
