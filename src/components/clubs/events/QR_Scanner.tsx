'use client'
import React, { useState, useRef } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose
} from "@/components/ui/dialog"
import { BsQrCodeScan } from "react-icons/bs";
import { toast } from "@/components/ui/use-toast"

export function QRScanner() {
  const [qrCodeData, setQRCodeData] = useState<string>();
  const handleAttendace = () => {
    toast({
      title: `Marked Attendance for  ${qrCodeData}`,
      description: "Attendance marked for the event",
    })
    setQRCodeData('');
  }
    ;
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline"><BsQrCodeScan className="mr-2" /> Scand Qr</Button>
      </DialogTrigger>
      <DialogContent className="w-[425px] flex flex-col items-center">
        <DialogHeader>
          <DialogTitle>Scan to Mark Attendance</DialogTitle>
          <DialogDescription className=''>
            Once QR scanned below admission number will be displayed verify it and mark Attendance.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full max-w-md overflow-hidden rounded-md">
          <Scanner
            onResult={(text, result) => {
              setQRCodeData(text);
              console.log(text, result);
            }}
            onError={(error) => console.log(error?.message)}
          />
        </div>
        <DialogFooter className=''>
          <div className='flex flex-col items-center gap-2 justify-center'>
            <div>
              {qrCodeData?.length != 0 && <p>Reg Number: {qrCodeData}</p>}
            </div>
            <div>
              {qrCodeData?.length != 0 ?
                <DialogClose asChild><Button variant="outline" onClick={handleAttendace}>Mark Attendance</Button></DialogClose>
                : <p>Scan the QR Properly</p>}
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog >
  )
}
