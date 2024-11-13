
import React from 'react'
import AddMeeting from '@/public/icons/add-meeting.svg'
import Image from 'next/image'

const HomeCard = () => {
  return (
    <div className='bg-orange-1 px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer' onClick={() => {}}>
   <div className='flex-center glassmorphism size-12 rounded-[10px]'>
   <Image
   src={AddMeeting}
   width={24}
   height={24}
   alt="add meeting"
   />

   </div>
   <div className='flex flex-col gap-2'>
   <h2 className='text-2xl font-bold'>New Meeting</h2>
   <p className='text-lg font-normal'>Start an instant meeting</p>

   </div>
     </div>
  )
}

export default HomeCard