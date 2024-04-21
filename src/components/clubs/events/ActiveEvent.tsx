import { Copy } from "lucide-react"
import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CheckCircleIcon } from "lucide-react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { toast } from "@/components/ui/use-toast"
import { BsQrCodeScan } from "react-icons/bs";
import { EventResponses } from "@/components/student/events/EventResponses"
import { FiEdit } from "react-icons/fi";

export function ActiveEvent() {
  return (
    <Card className="flex items-center justify-center ">
      <CardContent className="px-10">
        <CardHeader className="flex justify-between items-start flex-row pr-10">
          <div className="space-y-2">
            <CardTitle>Case Study</CardTitle>
            <CardDescription>
              By ACTS SRM Univeristy AP, Vijayawada, Andhra Pradesh, India
            </CardDescription>
          </div>
          <div className="flex gap-2">
            <Button variant={'outline'}><FiEdit className="mr-2" /> Edit</Button>
            <Button variant={'outline'}><BsQrCodeScan className="mr-2" />Scan QR</Button>
          </div>

        </CardHeader>
        <div className="px-6 space-y-3">
          <div className="max-w-2xl pb-3 flex gap-5">
            <div className="flex items-center gap-2">
              <Calendar size={15} />
              <p className="text-sm">when: 18-09-2024 </p>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={15} />
              <p className="text-sm">where: Mini Auditorium </p>
            </div>
          </div>

          <div>
            <p>Engage your intellect in our Case Study competition. Teams analyze real-world scenarios, presenting innovative solutions and strategies to industry challenges. Witness the power of critical thinking and creativity as participants showcase their problem-solving prowess. Join us for an enlightening exploration of practical knowledge and ingenuity!</p>
          </div>

        </div>

        <CardFooter className="justify-start flex flex-col items-start pt-5">
          <h4 className=" font-sans text-lg font-semibold tracking-normal ">
            Responses
          </h4>
          <EventResponses />
        </CardFooter>
      </CardContent>
    </Card>
  )
}
