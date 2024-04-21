'use client'
import * as React from "react"
import Image from "next/image"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { EventDialog } from "./EventDialog"

export function EventCard() {
  return (
    <Card className="max-w-3xl">
      <CardHeader className="flex justify-between items-center flex-row">
        <div>
          <CardTitle>Case Study</CardTitle>
          <CardDescription>SRM Univeristy AP, Vijayawada, Andhra Pradesh, India
          </CardDescription>
        </div>
        <Image src={'/srmap_logo.png'} alt="logo" width={75} height={75} />

      </CardHeader>
      <CardContent>
        <p className=" text-gray-600 dark:text-gray-300">Engage your intellect in our Case Study competition. Teams analyze real-world scenarios, presenting innovative solutions and strategies to industry challenges. </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div>
          <p className="text-sm text-blue-700 hover:underline hover:cursor-pointer">Register by 27 April 2024 • Posted 14h ago</p>
        </div>
        <EventDialog />
      </CardFooter>
    </Card>
  )
}
