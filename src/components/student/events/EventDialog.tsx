import { Calendar, CheckCircle, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { EventData } from "@/constants/constant";
import Image from "next/image";

export const EventDialog: React.FC<{ event: EventData }> = ({ event }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Know More</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] ">
        <DialogHeader className="flex justify-between items-start flex-row pr-2">
          <div className="space-y-2 flex flex-col text-left items-start">
            <DialogTitle>{event.eventInfo.name}</DialogTitle>
            <DialogDescription>
              By {event.clubInfo.name}, {event.eventInfo.location}
            </DialogDescription>
          </div>
          {
            event.clubInfo.profile_url ? <Image src={event.clubInfo.profile_url} alt="logo" width={75} height={75} /> : <h2 className="h-10 w-10 bg-[#535353] shadow-lg flex items-center justify-center text-white rounded-lg">{event.clubInfo.name[0]}</h2>
          }
        </DialogHeader>
        {/* <div className="items-center flex justify-center rounded-lg">
          <Image src={'/events/Case-Study.png'} alt="event-photo" width={800} height={400} />
        </div> */}
        <div>
          <p>{event.eventInfo.description}</p>
        </div>
        <div className="max-w-2xl flex flex-col md:flex-row justify-between">
          <div className="flex items-center gap-2">
            <Calendar size={15} />
            <p className="text-sm"> when: {event.eventInfo.date}</p>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={15} />
            <p className="text-sm">where: {event.eventInfo.location}</p>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle size={15} />
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
                });
              }}
              type="button" variant="outline" className="text-blue-700">
              Register
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
