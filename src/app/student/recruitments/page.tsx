'use client';
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegisteredEvents from '@/components/student/events/Registered';
import AllRecruitments from '@/components/student/recruitments/AllRecruitments';

const EventsPage = () => {
  const [selectedImage, setSelectedImage] = useState<string>('');

  const handleFileChange = (event: any) => {
    try {
      const file = event.target.files[0]; // Get the first selected file
      if (file) {
        // Create a URL for the selected image file
        const imageUrl = URL.createObjectURL(file);
        setSelectedImage(imageUrl);
      } else {
        console.error('No file selected.');
      }
    } catch (error) {
      console.error('Error handling file input:', error);
    }
  };

  return (
    <div className='h-screen'>
      <div className="fixed w-full z-20">
        <div className="flex h-12 items-center sticky justify-between border-b border-gray-200 bg-white px-3 md:px-6">
          <h4 className="font-sans text-lg font-semibold tracking-normal text-blue-700">
            Recruitments
          </h4>
          <div>
            <input
              type="file"
              accept="image/*"
              capture="environment"
              onChange={handleFileChange}
              style={{ display: 'block', marginBottom: '10px' }}
            />
          </div>
        </div>
      </div>
      <div className='relative'>
        <Tabs defaultValue="recruitments" className="w-full pt-14">
          <TabsList className="grid w-full grid-cols-2 px-4">
            <TabsTrigger className='' value="recruitments">Recruitments</TabsTrigger>
            <TabsTrigger value="applied">Applied</TabsTrigger>
          </TabsList>
          <TabsContent value="recruitments">
            <AllRecruitments />
          </TabsContent>
          <TabsContent value="applied">
            <RegisteredEvents />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EventsPage;
