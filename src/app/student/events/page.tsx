'use client'
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ExploreEvents from '@/components/student/events/Explore';
import RegisteredEvents from '@/components/student/events/Registered';
import { EventDialog } from '@/components/clubs/events/EventDialog';

const EventsPage = () => {
  return (
    <div className='h-screen'>
      <div className="fixed w-full z-20">
        <div className="flex h-12 items-center sticky justify-between border-b border-gray-200 bg-white px-3 md:px-6">
          <h4 className="font-sans text-lg font-semibold tracking-normal text-blue-700">
            Events
          </h4>

        </div>
      </div>
      <div className='relative'>
        <Tabs defaultValue="explore" className="w-full pt-14">
          <TabsList className="grid w-full grid-cols-2 px-4">
            <TabsTrigger className='' value="explore">Explore </TabsTrigger>
            <TabsTrigger value="registered">Registered</TabsTrigger>
          </TabsList>
          <TabsContent value="explore">
            <ExploreEvents />
          </TabsContent>
          <TabsContent value="registered">
            <RegisteredEvents />
          </TabsContent>
        </Tabs>
      </div>

    </div>
  );
};

export default EventsPage;
