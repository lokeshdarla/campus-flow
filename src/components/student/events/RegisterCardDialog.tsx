import { Copy } from "lucide-react"
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

export function RegisteredDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Show QR</Button>
      </DialogTrigger>
      <DialogContent className=" ">
        <DialogHeader className="flex justify-between items-center flex-row pr-10">
          <div className="space-y-2 flex flex-col items-start">
            <DialogTitle>Case Study</DialogTitle>
            <DialogDescription>
              By ACTS SRM Univeristy AP
            </DialogDescription>
          </div>
          <Image src={'/srmap_logo.png'} alt="logo" width={75} height={75} />
        </DialogHeader>
        <div className="items-center flex justify-center rounded-lg">
          <Image src={'/qrdemo.webp'} alt="event-photo" width={400} height={400} />
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button variant={'outline'}
            >
              close

            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
