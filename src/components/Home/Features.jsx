import React from 'react'

const Features = () => {
  return (
    <div className='w-full bg-gray-200 min-h-[300px] p-8 sm:p-10 md:p-16'>
        <div className='w-[95%] sm:w-[85%] md:w-[75%] lg:w-[80%] xl:w-[70%] mx-auto relative'>
            <img className='w-full h-[250px] sm:h-full md:h-[450px] object-cover' src="https://png.pngtree.com/background/20250107/original/pngtree-hardware-tools-a-textured-background-for-creative-projects-picture-image_15289602.jpg" alt="" />
            <div className='absolute w-full h-full flex items-center justify-center inset-0 bg-black opacity-60'>
                <h1 className='text-center text-4xl md:text-6xl text-white font-bold font-karla opacity-100 uppercase'>No 1 Power Tools In Sri Lanka</h1>
            </div>
        </div>
    </div>
  )
}

export default Features