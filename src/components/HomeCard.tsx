
import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils';

interface HomeCardProps {
    img: string,
    title: string,
    description: string,
    className?: string,
    handleClink?: () => void;
}

const HomeCard = ({img, title, description, className, handleClink}: HomeCardProps) => {
  return (
    <div className={cn('bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer',className)} onClick={handleClink}>
   <div className='flex-center glassmorphism size-12 rounded-[10px]'>
   <Image
   src={img}
   width={24}
   height={24}
   alt="add meeting"
   />

   </div>
   <div className='flex flex-col gap-2'>
   <h2 className='text-2xl font-bold'>{title}</h2>
   <p className='text-lg font-normal'>{description}</p>

   </div>
     </div>
  )
}

export default HomeCard