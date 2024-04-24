'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from 'react-query'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../ui/select'
import { Close } from '@radix-ui/react-dialog'

interface EventHostingForm {
  name: string
  description: string
  image: File
  venue: string
  EventDate: string
}

export function EventHostForm() {
  // const queryClient = useQueryClient()

  const form = useForm<EventHostingForm>({
    defaultValues: {
      name: '',
      description: '',
      venue: '',
      EventDate: '',
    },
  })

  // const mutation = useMutation(
  //   (values: OutingRequestForm) => {
  //     const formattedValues = {
  //       destination: values.destination,
  //       outingType: values.outingType,
  //       description: values.description,
  //       requestedOutDate: new Date().toISOString(),
  //       requestedInDate: new Date(values.RequestedInDate).toISOString(),
  //     }

  //     // return axios.post(studentApiPaths.createOuting.apiPath, formattedValues)
  //   },
  //   {
  //     onSuccess: () => {
  //       form.reset()
  //       // queryClient.invalidateQueries(studentApiPaths.activeOuting.key)
  //       // queryClient.invalidateQueries(studentApiPaths.allOutings.key)
  //       close()
  //     },
  //   },
  // )

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) => {
          console.log(values);
          form.reset();
          Close

        })}
        className="space-y-4"
      >
        <FormField
          name="name"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Name <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Event Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Description of Event <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder=" Description of Event" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="image"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Poster <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="file" type='file' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />


        <FormField
          name="EventDate"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Event Date <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  required
                  type="datetime-local"
                  placeholder="Event Date"
                  {...field}
                  min={new Date(new Date().getTime() + 5.5 * 60 * 60 * 1000)
                    .toISOString()
                    .slice(0, 16)}

                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="venue"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Venue <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder=" Venue of Event" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Create Event</Button>
      </form>
    </Form>
  )
}
