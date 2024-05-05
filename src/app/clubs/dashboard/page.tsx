'use client'
import React from 'react'
import { useAuth } from '@/hooks/useAuth'

const Page = () => {
  const { user, logout } = useAuth();
  return (
    <div>page</div>
  )
}

export default Page
