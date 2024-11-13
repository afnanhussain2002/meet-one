import Image from 'next/image'
import React from 'react'
import LoadImage from '@/public/icons/loading-circle.svg'

const Loader = () => {
  return (
    <div className='flex-center h-screen w-full'>
        <Image
        src={LoadImage}
        alt='loading'
        width={50}
        height={50}
        />
    </div>
  )
}

export default Loader