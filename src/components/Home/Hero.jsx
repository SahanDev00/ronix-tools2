import React from 'react'
import pic from '../../assets/hero.jpg'


const Hero = () => {
  return (
    <div className='w-full md:h-screen pt-20 relative'>
        <img src={pic} className='w-full md:h-[90%] object-cover' alt="" />
        <div className='w-full md:h-[82.5%] absolute inset-0 mt-20 bg-black opacity-50' />
        <div className='w-full md:h-[82.5%] mt-20 flex flex-col items-center justify-center text-center absolute inset-0 font-karla'>
            <h1 className='w-[90%] mx-auto md:w-full text-4xl md:text-6xl lg:text-8xl text-white font-bold uppercase'>Ronix Power Tools</h1>
            <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-purple-300 mt-2 font-light'>Sole agent in Sri Lanka</p>
        </div>
    </div>
  )
}

export default Hero