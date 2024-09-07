'use client'

import { InfoBlock } from '@/components/common/InfoBlock'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import axios from 'axios'
import { useAuth } from '@/hooks/useAuth'
import { useEffect, useState } from 'react'

interface UserData {
  ClubStatus: null | string
  batch: number
  gender: string
  id: string
  reg_id: string
  residence: string
  section: string
  studentName: string
}

export default function StudentInfoPage() {
  const [userdata, setUserData] = useState<UserData | null>(null)
  const { user, logout } = useAuth()
  useEffect(() => {
    async function fetchData() {
      try {
        const accessToken = localStorage.getItem('accessToken')

        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/getStudentInfo/`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })

        setUserData(response.data)
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching data:', error)
        return null
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <div className="flex w-full flex-col gap-2 p-2 lg:flex-row">
        <div className="h-full w-full">
          <Card>
            <CardHeader>
              <CardTitle>Basic Info</CardTitle>
              <CardDescription>Please Contact ITKM for any changes in the information</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-1">
                <InfoBlock
                  label="Profile Picture"
                  value={
                    <div className="flex items-center space-x-3">
                      {user?.photoURL ? (
                        <Avatar>
                          <AvatarImage src={user?.photoURL} />
                        </Avatar>
                      ) : (
                        <p className="rounded-full bg-[#378CE7] px-4 py-2 text-white">{user?.displayName[0]}</p>
                      )}
                    </div>
                  }
                />
                <InfoBlock label="Full Name" value={userdata?.studentName} />
                <InfoBlock label="Admission No" value={userdata?.reg_id} />
                <InfoBlock label="Email Address" value={user?.emailAddress} />
                <InfoBlock label="Gender" value={userdata?.gender} />
                <InfoBlock label="Batch" value={userdata?.batch} />
                <InfoBlock label="Degree" value={'B-Tech'} />
                <InfoBlock label="Branch" value={'CSE'} />
                <InfoBlock label="Transport" value={userdata?.residence} borderRequired={false} />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
