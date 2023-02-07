import React from 'react'

const Overview = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-2 text-center text-bgcolor'>
        <h2 className='text-xl font-bold lg:text-[36px]'>Trusted by developers from over 80 planets</h2>
        <p className='pt-4 mb-10 text-sm md:text-[16px]'>There are many variations of passages of Lorem Ipsum available, but the majority.</p>
        {/* main */}
        <div className='flex flex-col items-center justify-between gap-8 md:flex-row md:gap-32'>
            {/* child */}
            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-extrabold md:text-4xl'>100%</p>
                <p className='text-base'>Satisfaction</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-extrabold'>125k</p>
                <p className='text-base'>Happy Users</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='text-3xl font-extrabold '>125k+</p>
                <p className='text-base '>Downloads</p>
            </div>
        </div>
    </div>
  )
}

export default Overview