import React from 'react'
// import bImage from '../../../public/images/hero-background.png'

const Home = () => {
  return (
    <section className='flex size-full flex-col gap-10 text-white'>
        <div className="h-[300px] w-full rounded-[20px] bg-[url('https://i.ibb.co.com/JCCqmVM/laptop-with-glowing-screen-table-dark-top-view-copy-space.jpg')] bg-cover">
     <div className='flex h-full flex-col justify-between max-md:px-5 max-md:pt-8 lg:p-11 '>
    <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'>Upcoming Meeting at: 12:30 PM</h2>
     </div>
        </div>

    </section>
  )
}

export default Home