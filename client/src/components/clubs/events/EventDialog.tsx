'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { DialogDescription } from '@radix-ui/react-dialog'
import EventHostForm from './EventForm'

export function EventDialog() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant='outline'>Host an event</Button></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogDescription>
            Host an event by filling the form below.
          </DialogDescription>
        </DialogHeader>
        <EventHostForm />
      </DialogContent>
    </Dialog>
  )
}
