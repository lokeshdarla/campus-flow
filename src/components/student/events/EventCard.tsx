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
  const { name, location, description } = event.eventInfo;

  return (
    <Card className="max-w-3xl md:min-w-[720px]">
      <CardHeader className="flex justify-between items-center flex-row">
        <div>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{location}</CardDescription>
        </div>
        <Image src={'/srmap_logo.png'} alt="logo" width={75} height={75} />
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div>
          <p className="text-sm text-blue-700 hover:underline hover:cursor-pointer">Register by {event.eventInfo.date} • Posted {timeDifference(event.eventInfo.created_at)}</p>
        </div>
        <EventDialog event={event} />
      </CardFooter>
    </Card>
  );
};
