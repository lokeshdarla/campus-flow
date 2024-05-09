import { PageSubHeader } from '@/components/Layout/PageSubheader'
import NotFound from '@/components/common/WorkingPage'
import React from 'react'

const page = () => {
  return (
    <div>
      <PageSubHeader pageTitle='Recruitments' />
      <NotFound />
    </div>
  )
}

export default page
