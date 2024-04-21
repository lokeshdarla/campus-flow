
import { ActiveEvent } from '@/components/clubs/events/ActiveEvent'
import { EventDialog } from '@/components/clubs/events/EventDialog'
import NotFoundPage from '@/components/common/WorkingPage'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function TrackOutingPage() {
  return (
    <>

      <div className="flex h-12 items-center sticky justify-between border-b border-gray-200 bg-white px-3 md:px-6">
        <h4 className=" font-sans text-lg font-semibold tracking-normal text-blue-700">
          Events
        </h4>
      </div>
      <div className="p-2">
        <Tabs defaultValue="active-outpass" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="active-outpass">Active Event</TabsTrigger>
            <TabsTrigger value="all-outings">Event History</TabsTrigger>
          </TabsList>
          <TabsContent value="active-outpass">
            {/* <EventDialog /> */}
            <ActiveEvent />
          </TabsContent>
          <TabsContent value="all-outings">
            <NotFoundPage />
          </TabsContent>
        </Tabs>
      </div>
    </>
  )
}

