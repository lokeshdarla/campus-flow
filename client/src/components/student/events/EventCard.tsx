'use client'
import * as React from "react"
import Image from "next/image"
import { EventData } from "@/constants/constant"
import { timeDifference } from "@/lib/utils"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { EventDialog } from "./EventDialog"

export const EventCard: React.FC<{ event: EventData }> = ({ event }) => {
  const { name, location, description, start_time } = event.eventInfo;
  const startDate = new Date(start_time);
  const oneDayBefore = new Date(startDate.getTime() - (24 * 60 * 60 * 1000));

  return (
    <Card className="max-w-3xl md:min-w-[720px]">
      <CardHeader className="flex justify-between items-center flex-row">
        <div>
          <CardTitle>{name}</CardTitle>
          <CardDescription>venue: {location}</CardDescription>
        </div>
        <Image src={'/srmap_logo.png'} alt="logo" width={75} height={75} />
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex justify-center gap-5">
          <p className="text-sm text-blue-700 hover:underline hover:cursor-pointer">Register by {oneDayBefore.toLocaleDateString()} </p>
          <p className="text-sm text-blue-700 hover:underline hover:cursor-pointer"> Posted {timeDifference(event.eventInfo.created_at)}</p>
        </div>
        <EventDialog event={event} />
      </CardFooter>
    </Card>
  );
};
