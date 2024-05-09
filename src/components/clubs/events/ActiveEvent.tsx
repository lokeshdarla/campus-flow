'use client'
import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { EventResponses } from "@/components/student/events/EventResponses"
import { FiEdit } from "react-icons/fi";
import { QRScanner } from "./QR_Scanner"

import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react"
import axios from "axios"
import { EventData } from "@/constants/constant"

export function ActiveEvent() {
  const { user } = useAuth();
  const [event, setEvent] = useState<EventData>();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/events/club-events/active`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
          }
        );
        console.log(response.data);
        setEvent(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const formattedDate = event?.eventInfo.start_time ? new Date(event.eventInfo.start_time).toDateString() : '';



  return (
    <Card className="flex w-full  overflow-hidden items-center justify-center">

      <CardContent className="px-10">
        <CardHeader className="flex justify-between gap-4 px-10 items-center md:items-start flex-row pr-10">
          <div className="space-y-2">
            <CardTitle className="px-3">{event?.eventInfo.name}</CardTitle>
            <CardDescription className="hidden md:block">
              By {user?.displayName} SRM Univeristy AP, Vijayawada, Andhra Pradesh, India
            </CardDescription>
          </div>
          <div className="flex gap-2   z-10">
            <Button variant={'outline'}><FiEdit className="mr-2" /> Edit</Button>
            <QRScanner />
          </div>
        </CardHeader>
        <div className="px-6 space-y-3 ">
          <div className="md:max-w-2xl pb-3 px-4 flex gap-5">
            <div className="flex items-center gap-2">
              <Calendar size={15} />
              <p className="text-sm">when: {formattedDate} </p>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={15} />
              <p className="text-sm">where: {event?.eventInfo.location}</p>
            </div>
          </div>

          <div className="px-6">
            <p>{event?.eventInfo.description}</p>
          </div>

        </div>

        <CardFooter className="justify-start flex flex-col items-start pt-5">
          <h4 className="pl-5 font-sans text-lg font-semibold tracking-normal ">
            Responses
          </h4>
          <EventResponses />
        </CardFooter>
      </CardContent>
    </Card>
  )
}
