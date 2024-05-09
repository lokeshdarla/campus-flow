import { PageSubHeader } from '@/components/Layout/PageSubheader'
import NotFound from '@/components/common/WorkingPage'
import React from 'react'

const page = () => {
  return (
    <div>
      <PageSubHeader pageTitle='feedback form' />
      <NotFound />
    </div>
  )
}

export default page
