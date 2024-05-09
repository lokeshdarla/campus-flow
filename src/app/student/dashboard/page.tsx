'use client'

import { InfoBlock } from '@/components/common/InfoBlock'
import { LoadingState } from '@/components/common/LoadingState'
import { PageSubHeader } from '@/components/Layout/PageSubheader'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import axios from 'axios'
import { useQuery } from 'react-query'
import { useAuth } from '@/hooks/useAuth'
import { RecruitmentCard } from '@/components/student/recruitments/RecruitmentCard'

export default function ClubInfoPage() {
  const { user, logout } = useAuth()
  return (
    <>
      <PageSubHeader pageTitle="Dashboard" />
      <div className="flex w-full gap-2 p-2 lg:flex-row flex-col">
        <div className="h-full w-full">
          <Card>
            <CardHeader>
              <CardTitle>Personal Info</CardTitle>
              <CardDescription>
                Please Contact ITKM for any changes in the information
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col space-y-1">
                <InfoBlock
                  label="Profile Picture"
                  value={
                    <div className="flex items-center space-x-3">
                      {!user?.photoURL ? <Avatar>
                        <AvatarImage
                          src={user?.photoURL}
                          alt={'Lokesh Naga Sai'}
                        />
                      </Avatar> : <><p className="rounded-full bg-[#378CE7] h-10 w-10 flex items-center justify-center text-white">
                        {user?.displayName[0]}
                      </p></>}

                    </div>
                  }
                />
                <InfoBlock label="Full Name" value={'Lokesh Naga Sai Darl'} />
                <InfoBlock
                  label="Admission No"
                  value={'AP22110011115'}
                />
                <InfoBlock
                  label="Email Address"
                  value={'lokeshnagasaidarla@gmail.com'}
                />
                <InfoBlock label="Gender" value={'MALE'} />
                <InfoBlock label="Batch" value={'2026'} />
                <InfoBlock label="Degree" value={'B-Tech'} />
                <InfoBlock label="Branch" value={'CSE'} />
                <InfoBlock
                  label="Transport"
                  value={'Day-Scholar'}
                  borderRequired={false}
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className='flex flex-col gap-2'>
          <RecruitmentCard />
          <RecruitmentCard />
        </div>
      </div>
    </>
  )
}

