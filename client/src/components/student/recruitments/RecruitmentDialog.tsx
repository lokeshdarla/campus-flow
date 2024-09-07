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
            <DialogTitle>Co-Convener</DialogTitle>
            <DialogDescription>
              By ACTS SRM Univeristy AP, Vijayawada, Andhra Pradesh, India
            </DialogDescription>
          </div>
          <Image src={'/srmap_logo.png'} alt="logo" width={75} height={75} />
        </DialogHeader>
        <div className="">
          <ul className="list-disc text-sm">
            Handles all the responsibilities of the chair in their absence.
            Serves as the junior Executive Officer of the club.
            Chairs the Program or Membership Committee.
            Monitors the progress of club activities.
            Is given priority to be the chair for the next year.
          </ul>
        </div>
        <div className="max-w-2xl flex justify-between">
          <div className="flex items-center gap-2">
            <Calendar size={15} />
            <p className="text-sm"> Deadline: 18-09-2024 </p>
          </div>
        </div>
        <div>

          <form className="max-w-full ">
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
              <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
            </div>
            <div className="mb-5">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
              <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>
          </form>

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
    </Dialog >
  )
}
