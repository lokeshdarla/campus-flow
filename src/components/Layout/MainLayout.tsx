'use client'

import { useEffect } from 'react'

import { Drawer, DrawerContent } from '@/components/ui/drawer'
// import { useAuth } from '@/hooks/useAuth'
import { Header } from './Header'
import { NavbarLinks } from './NavbarLinks'

export function MainLayout({
  navigationLinks,
  requiredRole,
  children,
}: {
  navigationLinks: {
    label: string
    icon: JSX.Element
    href: string
    activeLink: string
  }[]
  requiredRole: string
  children: React.ReactNode
}) {
  // const { user, logout } = useAuth()

  // useEffect(() => {
  //   if (!user) return
  //   if (user.role !== requiredRole) {
  //     logout()
  //   }
  // }, [requiredRole, user, logout])

  return (
    <>
      <Drawer>
        <Header />
        {/* Mobile Navbar */}
        <DrawerContent>
          <div className="h-full w-full py-4">
            <NavbarLinks navigationLinks={navigationLinks} />
          </div>
        </DrawerContent>
        {/* Desktop Navbar */}
        <div className="fixed bottom-0 left-0 top-14 z-10 hidden w-64 border-r border-gray-200 bg-white p-2 md:block">
          <NavbarLinks navigationLinks={navigationLinks} />
        </div>
        {/* Main Content */}
        <div className="z-0 m-0 mt-14 h-screen overflow-scroll bg-gray-50 pb-10 md:ml-64">
          {children}
        </div>
      </Drawer>
    </>
  )
}
