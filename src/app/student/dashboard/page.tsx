'use client'
import { PageSubHeader } from '@/components/Layout/PageSubheader'
import { useAuth } from '@/hooks/useAuth'
import StudentInfoPage from '@/components/student/dashboard/PersonalInfo'

export default function Page() {
  const { user, logout } = useAuth()
  return (
    <>
      <PageSubHeader pageTitle="Personal Info" />
      <div className="flex w-full gap-2 p-2 lg:flex-row flex-col">
        <StudentInfoPage />
      </div>
    </>
  )
}

