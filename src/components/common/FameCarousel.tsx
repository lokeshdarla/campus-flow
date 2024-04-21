import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function EventCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}

      orientation="vertical"
      className="items-center"
    >
      <CarouselContent className="-mt-1 h-[300px]  w-[300px] ">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="pt-1  " >
            <div className="p-1">
              <Card className="h-[400px]">
                <CardContent className="flex items-center justify-center p-6">
                  <span className="text-3xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
