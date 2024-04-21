import { EventCarousel } from '@/components/common/FameCarousel'
import { EventCard } from '@/components/student/events/EventCard'
import React from 'react'

const ExploreEvents = () => {
  return (
    <div className="flex items-start  p-2 gap-20">
      <div className="flex flex-col items-start justify-center explore_events p-2 gap-2 ">
        {/* Add padding top to provide space for the navbar */}
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </div>

      <div className="mt-14 hidden p-2 md:block">

        <EventCarousel />
      </div>
    </div>

  )
}

export default ExploreEvents
