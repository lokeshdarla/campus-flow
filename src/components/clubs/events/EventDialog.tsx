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
import { EventHostForm } from './EventForm'

export function EventDialog() {
  return (
    <Dialog>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Host an event</DialogTitle>
          <DialogDescription>
            Host an event by filling the form below.
          </DialogDescription>
        </DialogHeader>
        <EventHostForm />
      </DialogContent>
      <div className="mt-10 flex w-full items-center justify-center">
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>Request Outing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              You don&apos;t have any active event. Please create an event.
              Once you create an event, view details in the outing history
              tab.
            </p>
          </CardContent>
          <CardFooter>
            <DialogTrigger asChild>
              <Button variant={'outline'}>Request Outing</Button>
            </DialogTrigger>
          </CardFooter>
        </Card>
      </div>
    </Dialog>
  )
}
