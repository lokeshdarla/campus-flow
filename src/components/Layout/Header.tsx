import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { DrawerTrigger } from '@/components/ui/drawer'
import { IconMenu2 } from '@tabler/icons-react'
import { UserDropdown } from './UserDropdown'

export function Header() {
  return (
    <div className="fixed left-0 right-0 top-0 z-10 h-14 border-b border-gray-200 bg-white">
      <div className="flex h-full w-full items-center justify-between px-3 md:px-6">
        <DrawerTrigger
          asChild
          className="flex w-full items-center justify-start p-0  md:hidden"
        >
          <Button variant={'link'}>
            <IconMenu2 stroke={1.5} />
          </Button>
        </DrawerTrigger>
        <div className="flex w-full items-center justify-center md:justify-start">
          <Image
            height={36}
            width={90}
            src="/srmap_logo.png"
            alt="SRM AP Logo"
          />
        </div>
        <div className="flex w-full items-center justify-end">
          <UserDropdown />
        </div>
      </div>
    </div>
  )
}
