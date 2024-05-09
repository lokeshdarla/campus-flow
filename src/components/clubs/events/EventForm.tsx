'use client'
import React, { useRef, useState } from 'react';
import { EventCreate } from '@/constants/constant';
import axios from 'axios';

const EventForm = () => {
  const [formData, setFormData] = useState<EventCreate>({
    name: '',
    description: '',
    start_time: '',
    end_time: '',
    location: '',
  });
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    if (id == 'start_time' || id == 'end_time') {
      const new_val = value.replace('T', ' ');
      setFormData({ ...formData, [id]: new_val });
    }
    else
      setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const start_time = formData.start_time.replace('T', ' ');
    const end_time = formData.end_time.replace('T', ' ');
    setFormData(prevData => ({
      ...prevData,
      start_time: start_time,
      end_time: end_time
    }));

    const accessToken = localStorage.getItem('accessToken');

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/events/create-event`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
          },
        }
      );
      console.log('Event created successfully:', response.data);
    } catch (error) {
      console.error('Error creating event:', error);
    }
    console.log(formData);

    // if (formRef.current) {
    //   formRef.current.reset();
    // }
  };




  return (
    <form ref={formRef
    } className="" onSubmit={handleSubmit}>
      <div className="mb-5">
        <label htmlFor="event_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event Name</label>
        <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Sample Event" required onChange={handleChange} />
      </div>
      <div className="mb-5">
        <label htmlFor="event_description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Event Description</label>
        <input type="text" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required onChange={handleChange} />
      </div>
      <div className="mb-5">
        <label htmlFor="start_time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Time</label>
        <input
          type="datetime-local"
          id="start_time"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          required

          onChange={handleChange}
        />
      </div>

      <div className="mb-5">
        <label htmlFor="end_time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Time</label>
        <input type="datetime-local" id="end_time" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required onChange={handleChange} />
      </div>
      <div className="mb-5">
        <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
        <input type="text" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required onChange={handleChange} />
      </div>
      <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Create</button>
    </form>
  );
};

export default EventForm;
