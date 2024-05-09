'use client'
import { MainLayout } from "@/components/Layout/MainLayout";
import { Toaster } from "@/components/ui/toaster";
import {
  IconCalendarMonth,
  IconHome,
  IconListCheck,
  IconListDetails,
  IconUser,
} from '@tabler/icons-react'


const links = [
  {
    label: 'Dashboard',
    icon: <IconHome size={'1.2rem'} stroke={1.75} />,
    href: '/clubs/dashboard',
    activeLink: '/clubs/dashboard',
  },
  {
    label: 'Events',
    icon: <IconListDetails size={'1.2rem'} stroke={1.75} />,
    href: '/clubs/events',
    activeLink: '/clubs/events',
  },
  {
    label: 'Recruitments',
    icon: <IconCalendarMonth size={'1.2rem'} stroke={1.75} />,
    href: '/clubs/recruitments',
    activeLink: '/clubs/recruitments',
  },
  {
    label: 'Feedback Form',
    icon: <IconListCheck size={'1.2rem'} stroke={1.75} />,
    href: '/clubs/feedback',
    activeLink: '/clubs/feedback',
  },
]


export default function Home({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MainLayout navigationLinks={links} requiredRole="club">
      <Toaster />
      {children}
    </MainLayout>
  );
}
