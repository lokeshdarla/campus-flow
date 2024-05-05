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
import { useState } from "react"

export function ActiveEvent() {
  const [decoded, setDecoded] = useState('')
  const [decodeError, setDecodeError] = useState('')
  const { user } = useAuth();
  return (
    <Card className="flex w-full  overflow-hidden items-center justify-center">

      <CardContent className="px-10">
        <CardHeader className="flex justify-between gap-4 px-10 items-center md:items-start flex-row pr-10">
          <div className="space-y-2">
            <CardTitle className="mt-3">Code Clash 3.O</CardTitle>
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
              <p className="text-sm">when: 18-09-2024 </p>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={15} />
              <p className="text-sm">where: Mini Auditorium </p>
            </div>
          </div>

          <div className="px-6">
            <p>Engage your intellect in our Case Study competition. Teams analyze real-world scenarios, presenting innovative solutions and strategies to industry challenges. Witness the power of critical thinking and creativity as participants showcase their problem-solving prowess. Join us for an enlightening exploration of practical knowledge and ingenuity!</p>
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
