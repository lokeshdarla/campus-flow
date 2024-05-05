'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { useAuth } from '@/hooks/useAuth'
import { LogOut } from 'lucide-react'
import Image from 'next/image'

export const UserDropdown = () => {
  const { user, logout } = useAuth()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex w-full items-center justify-center md:justify-start">
          {user?.photoURL ? (
            <Image
              height={36}
              width={36}
              src={user.photoURL}
              alt="User Photo"
              className="rounded-full"
            />
          ) : (
            <p className="rounded-full bg-[#378CE7] px-4 py-2 text-white">
              {user?.displayName[0]}
            </p>
          )}
          <div className="ml-2 hidden flex-col items-start md:flex">
            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
              {user?.displayName}
            </p>
            <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
              {user?.emailAddress}
            </p>
          </div>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={logout}>
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
