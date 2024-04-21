import { RegisteredEventCard } from './RegisteredCard'
import React from 'react'

const RegisteredEvents = () => {
  return (
    <div className="flex items-start justify-center  p-2 gap-20">
      <div className="flex flex-col items-center justify-center p-2 gap-2 ">
        <RegisteredEventCard />
        <RegisteredEventCard />
        <RegisteredEventCard />
        <RegisteredEventCard />
        <RegisteredEventCard />
        <RegisteredEventCard />
      </div>

    </div>

  )
}

export default RegisteredEvents
