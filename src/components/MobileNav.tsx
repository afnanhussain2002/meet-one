import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
  import BurgerMenu from '@/public/icons/hamburger.svg'
  import logo from '@/public/icons/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

const MobileNav = () => {
  return (
   <section className='w-full max-w-[264px]'>
<Sheet>
  <SheetTrigger asChild>
    <Image
    src={BurgerMenu}
    width={36}
    height={36}
    alt='hamburger menu'
    className='cursor-pointer sm:hidden'
    />
  </SheetTrigger>
  <SheetContent side="left" className='border-none bg-dark-1'>
   
    <Link
      href={'/'}
      className='flex items-center gap-1'
      >
    <Image
    src={logo}
    width={32}
    height={32}
    alt='MeetOne Logo'
    className='max-sm:size-10'
    />
    <p className='text-[26px] font-extrabold text-white'>MeetOne</p>
      </Link>

      <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto '>

      </div>
  </SheetContent>
</Sheet>

   </section>
  )
}

export default MobileNav