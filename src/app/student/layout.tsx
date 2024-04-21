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
    href: '/student/dashboard',
    activeLink: '/student/dashboard',
  },
  {
    label: 'Recruitments',
    icon: <IconListDetails size={'1.2rem'} stroke={1.75} />,
    href: '/student/recruitments',
    activeLink: '/student/recruitments',
  },
  {
    label: 'Events',
    icon: <IconCalendarMonth size={'1.2rem'} stroke={1.75} />,
    href: '/student/events',
    activeLink: '/student/events',
  },
  {
    label: 'Feedback Form',
    icon: <IconListCheck size={'1.2rem'} stroke={1.75} />,
    href: '/student/feedback',
    activeLink: '/student/feedback',
  },
  {
    label: 'Personal Info',
    icon: <IconUser size={'1.2rem'} stroke={1.75} />,
    href: '/student/personal-info',
    activeLink: '/student/personal-info',
  },
]


export default function Home({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MainLayout navigationLinks={links} requiredRole="student">
      <Toaster />
      {children}
    </MainLayout>
  );
}
