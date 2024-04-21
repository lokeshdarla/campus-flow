import * as React from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { RegisteredDialog } from "./RegisterCardDialog"
import { Calendar, MapPin, CheckCircleIcon, Clock } from "lucide-react"

export function RegisteredEventCard() {
  return (
    <section className="  text-gray-900 flex items-center justify-center ">
      <div className="flex rounded-3xl bg-white items-center justify-center   h-40 overflow-y-hidden">
        <div className="h-40 relative  flex items-center justify-center border p-4 rounded-l-3xl">
          <div className="absolute z-10">
            <RegisteredDialog />
          </div>
          <Image width={100} height={100} src={'/qrdemo.webp'} className="h-32 w-32 blur-[1px]" alt="" />
        </div>
        <div className="relative h-40 flex flex-col items-center border-dashed justify-between border-[0.5px] bg-zinc-900 ">
          <div className="absolute rounded-full border w-5 h-5 bg-gray-50 -top-3"></div>
          <div className="absolute rounded-full border w-5 h-6 bg-gray-50 -bottom-3"></div>
        </div>
        <div className="h-40  border gap-2 bg-white min-w-96  py-8 px-8  justify-between  items-start rounded-r-3xl flex flex-col">

          <div>
            <div className="flex justify-between items-center">
              <h1 className="text-xl">Case Study</h1>
              <Badge variant={'default'}>25 days left</Badge>
            </div>

            <p className="text-sm"> By ACTS SRM Univeristy AP, Vijayawada, Andhra Pradesh, India</p>
          </div>

          <div className="flex flex-col md:flex-row text-xs w-full gap-4  justify-between">
            <div className="flex items-center gap-1">
              <Calendar size={15} />
              <p className="text-xs"> Date: 18/09/2024 </p>
            </div>
            <div className="flex items-center gap-1">
              <Clock size={15} />
              <p className="text-xs">Time : 12:45 P.M</p>
            </div>
            <div className="flex items-center gap-1">
              <MapPin size={15} />
              <p className="text-xs">Venue: Mini Auditorium </p>
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}
