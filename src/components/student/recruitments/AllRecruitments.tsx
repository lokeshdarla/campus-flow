import { RecruitmentCard } from '@/components/student/recruitments/RecruitmentCard'
import React from 'react'

const AllRecruitments = () => {
  return (
    <div className="flex items-center justify-between p-2 gap-20">
      <div className="flex flex-col items-center justify-center explore_events p-2 gap-2 ">
        <RecruitmentCard />
        <RecruitmentCard />
        <RecruitmentCard />
        <RecruitmentCard />
        <RecruitmentCard />
        <RecruitmentCard />
      </div>
    </div>

  )
}

export default AllRecruitments
