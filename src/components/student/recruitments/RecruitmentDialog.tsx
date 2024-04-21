import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CheckCircleIcon } from "lucide-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"
import { toast } from "@/components/ui/use-toast"

export function RecruitmentDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Apply Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] ">
        <DialogHeader className="flex justify-between items-center flex-row pr-10">
          <div className="space-y-2">
            <DialogTitle>Case Study</DialogTitle>
            <DialogDescription>
              By ACTS SRM Univeristy AP, Vijayawada, Andhra Pradesh, India
            </DialogDescription>
          </div>
          <Image src={'/srmap_logo.png'} alt="logo" width={75} height={75} />
        </DialogHeader>
        <div className="items-center flex justify-center rounded-lg">
          <Image src={'/events/Case-Study.png'} alt="event-photo" width={800} height={400} />
        </div>
        <div>
          <p>Engage your intellect in our Case Study competition. Teams analyze real-world scenarios, presenting innovative solutions and strategies to industry challenges. Witness the power of critical thinking and creativity as participants showcase their problem-solving prowess. Join us for an enlightening exploration of practical knowledge and ingenuity!</p>
        </div>
        <div className="max-w-2xl flex justify-between">
          <div className="flex items-center gap-2">
            <Calendar size={15} />
            <p className="text-sm"> when: 18-09-2024 </p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={15} />
            <p className="text-sm">where: Mini Auditorium </p>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircleIcon size={15} />
            <p className="text-sm">who can apply : All students</p>
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button
              onClick={() => {
                toast({
                  title: "Scheduled: Catch up",
                  description: "Friday, February 10, 2023 at 5:57 PM",
                })
              }}
              type="button" variant="outline" className="text-blue-700">
              Register
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
