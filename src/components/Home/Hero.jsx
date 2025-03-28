import React from 'react'
import pic from '../../assets/hero.jpg'
import { FaFacebookF, FaLinkedinIn, FaPinterestP, FaTwitter } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='w-full md:h-screen pt-20 relative'>
        <img src={pic} className='w-full md:h-[90%] object-cover' alt="" />
        <div className='w-full md:h-[82.5%] absolute inset-0 mt-20 bg-black opacity-50' />
        <div className='fixed h-[200px] w-[50px] z-50 top-[40%] hidden md:flex flex-col'>
          <div className='w-full h-[50px] bg-blue-600 flex items-center justify-center text-white text-lg hover:w-[85%] mx-auto duration-200 cursor-pointer'>
            <FaFacebookF />
          </div>
          <div className='w-full h-[50px] bg-blue-400 flex items-center justify-center text-white text-lg hover:w-[85%] mx-auto duration-200 cursor-pointer'>
            <FaTwitter />
          </div>
          <div className='w-full h-[50px] bg-red-500 flex items-center justify-center text-white text-lg hover:w-[85%] mx-auto duration-200 cursor-pointer'>
            <FaPinterestP />
          </div>
          <div className='w-full h-[50px] bg-blue-500 flex items-center justify-center text-white text-lg hover:w-[85%] mx-auto duration-200 cursor-pointer'>
            <FaLinkedinIn />
          </div>
        </div>

        <div className='w-full md:h-[82.5%] mt-20 flex flex-col items-center justify-center text-center absolute inset-0 font-karla'>
            <h1 className='w-[90%] mx-auto md:w-full text-4xl md:text-6xl lg:text-8xl text-white font-bold uppercase'>Ronix Power Tools</h1>
            <p className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-purple-300 mt-2 font-light'>Sole agent in Sri Lanka</p>
        </div>
    </div>
  )
}

export default Hero