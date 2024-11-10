import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/icons/logo.svg'
import MobileNav from './MobileNav'

const Navbar = () => {
  return (
    <nav className='flex-between fixed z-50 w-full bg-dark-1 px-6 py-4 lg:px-10'>
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
    <p className='text-[26px] font-extrabold text-white max-sm:hidden'>MeetOne</p>
      </Link>

      <div className='flex-between gap-5'>
      <MobileNav/>
      </div>

    </nav>
  )
}

export default Navbar