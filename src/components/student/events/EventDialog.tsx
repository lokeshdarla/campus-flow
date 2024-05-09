import { Calendar, CheckCircle, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { EventData } from "@/constants/constant";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { LoadingSpinner } from "@/components/common/LoadingState";
import { Close } from "@radix-ui/react-dialog";


export const EventDialog: React.FC<{ event: EventData }> = ({ event }) => {
  const start_date = new Date(event.eventInfo.start_time);

  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    setLoading(true)
    const accessToken = localStorage.getItem('accessToken');
    console.log(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/event-responses/${event.eventInfo.id}/register-event/`)
    if (!accessToken) {
      console.error('Access token not found in localStorage');
      return;
    }
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/event-responses/${event.eventInfo.id}/register-event/`,
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        }
      );
      toast({
        title: `Registered to ${event.eventInfo.name}`,
        description: "See you soon on the day of event",
      });
      console.log(response.data);
    } catch (error) {
      toast({
        title: `Already Registered`,
        description: "See you soon on the day of event",
      });
      console.log(error);
    }
    setLoading(false);
  };

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
              By {event.clubInfo.name}, SRM University Andhra Pradesh.
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
            <p className="text-sm"> when: {start_date.toLocaleDateString()}</p>
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
            {loading ? <LoadingSpinner /> : <Button
              onClick={handleSubmit}
              type="button" variant="outline" className="text-blue-700">
              Register
            </Button>}
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
