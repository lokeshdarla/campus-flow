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
import { RecruitmentDialog } from "./RecruitmentDialog"

export function RecruitmentCard() {
  return (
    <Card className="max-w-3xl">
      <CardHeader className="flex justify-between items-center flex-row">
        <div>
          <CardTitle>Co-Convenor</CardTitle>
          <CardDescription>Coding Club,SRM Univeristy AP
          </CardDescription>
        </div>
        <Image src={'/srmap_logo.png'} alt="logo" width={75} height={75} />

      </CardHeader>
      <CardContent>
        <p className=" text-gray-600 dark:text-gray-300">Join our coding club to connect with a community of like-minded individuals who share a passion for coding and technology. </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div>
          <p className="text-sm text-blue-700 hover:underline hover:cursor-pointer">Apply by 27 April 2024 • Posted 14h ago</p>
        </div>
        <RecruitmentDialog />
      </CardFooter>
    </Card>
  )
}
