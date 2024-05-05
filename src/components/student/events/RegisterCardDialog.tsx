import { Button } from "@/components/ui/button"
import { QRCodeSVG } from 'qrcode.react'
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
export function RegisteredDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="text-sm">Show QR</Button>
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
          <QRCodeSVG
            value={"AP22110011115"}
            size={300}
            bgColor="#ffffff"
            fgColor="#000000"
            level="L"
            includeMargin={false}
          />
          {/* <Image src={'/qrdemo.webp'} alt="event-photo" width={400} height={400} /> */}
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
