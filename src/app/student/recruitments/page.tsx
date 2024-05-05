'use client';
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RegisteredEvents from '@/components/student/events/Registered';
import AllRecruitments from '@/components/student/recruitments/AllRecruitments';

const EventsPage = () => {

  return (
    <div className='h-screen'>
      <div className="fixed w-full z-20">
        <div className="flex h-12 items-center sticky justify-between border-b border-gray-200 bg-white px-3 md:px-6">
          <h4 className="font-sans text-lg font-semibold tracking-normal text-blue-700">
            Recruitments
          </h4>
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
