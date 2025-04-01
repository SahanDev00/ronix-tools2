import React from 'react'
import { FaLocationDot, FaPhone } from 'react-icons/fa6'
import { MdEmail, MdPhoneIphone } from 'react-icons/md'

const ContactUs = () => {
  return (
    <div className='min-h-screen w-full pt-20'>
        <div className='w-full lg:h-[350px] relative'>
            <img src="https://t4.ftcdn.net/jpg/05/24/03/99/360_F_524039911_SJfffOLKTk1HZvTPyF9vv1FN6oCipyVi.jpg" className='w-full h-full object-cover' alt="" />
            <div className='absolute w-full h-full flex items-center justify-center inset-0 bg-black opacity-60' />
            <div className='absolute w-[80%] mx-auto h-full flex items-center inset-0'>
                <h1 className='text-4xl md:text-6xl text-white font-bold font-karla opacity-100 uppercase'>Contact Us</h1>
            </div>
        </div>

        <div className='w-[90%] sm:w-[80%] md:w-[90%] lg:w-[80%] xl:w-[70%] 2xl:w-[60%] mx-auto flex flex-col justify-center md:flex-row h-[800px] md:h-[500px] font-karla'>
            <div className='md:w-[750px] flex flex-col justify-center'>
                <div className='flex mb-5 gap-5 items-center'>
                    <FaLocationDot className='size-8 text-blue-600' />
                    <div>
                        <h1 className='text-lg uppercase font-bold'>Address</h1>
                        <p>No.38, Pannala Road, Kuliyapitiya,</p>
                        <p>Sri Lanka.</p>
                    </div>
                </div>
                <div className='flex mb-5 gap-5 items-center'>
                    <MdPhoneIphone className='size-8 text-blue-600' />
                    <div>
                        <h1 className='text-lg uppercase font-bold'>Mobile</h1>
                        <p>+94 777 422 833</p>
                    </div>
                </div>
                <div className='flex mb-5 gap-5 items-center'>
                    <FaPhone className='size-8 text-blue-600' />
                    <div>
                        <h1 className='text-lg uppercase font-bold'>Phone</h1>
                        <p>+94 372 280 280</p>
                    </div>
                </div>
                <div className='flex mb-5 gap-5 items-center'>
                    <MdEmail className='size-8 text-blue-600' />
                    <div>
                        <h1 className='text-lg uppercase font-bold'>Email</h1>
                        <p>sales@merclanka.com</p>
                    </div>
                </div>
            </div>

            <div className='w-full md:h-full flex flex-col justify-center'>
                <form>
                    <input type="text" placeholder='Name' className='w-full h-[50px] p-2 outline-none focus:outline-amber-500 mb-5 border border-black' />
                    <div className='lg:flex gap-5 mb-5'>
                        <input type="text" placeholder='Contact Number' className='w-full  h-[50px] p-2 outline-none focus:outline-amber-500 border border-black' />
                        <input type="email" placeholder='Email Address' className='w-full mt-5 lg:mt-0 h-[50px] p-2 outline-none focus:outline-amber-500 border border-black' />
                    </div>
                    <textarea name="" id="" placeholder='Message' className='w-full h-[150px] p-2 outline-none focus:outline-amber-500 border border-black' />
                </form>
                <button className="bg-gradient-to-r from-purple-700 to-blue-500 text-white py-2 px-4 rounded mt-4">Submit</button>
            </div>
        </div>
    </div>
  )
}

export default ContactUs