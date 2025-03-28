import React from 'react'

const AllProducts = () => {
  return (
    <div className='w-full pt-20 font-karla'>
        <div className='w-full h-[350px] relative'>
            <img src="https://as2.ftcdn.net/jpg/05/08/66/17/1000_F_508661747_I6zg5AF12XBCU1jLbFHo0X3wfAHaM0GA.jpg" className='w-full h-full object-cover' alt="" />
            <div className='absolute w-full h-full flex items-center justify-center inset-0 bg-black opacity-60' />
            <div className='absolute w-[80%] mx-auto h-full flex items-center inset-0'>
                <h1 className='text-4xl md:text-6xl text-white font-bold font-karla opacity-100 uppercase'>All Products</h1>
            </div>
        </div>

        {/* products */}
        <div className='w-[80%] mx-auto min-h-[500px] flex mt-10'>
            <div className='w-[400px]'>
                <h1 className='text-gray-700 font-semibold text-lg mb-2'>Categories</h1>
                <hr />
            </div>
        </div>
    </div>
  )
}

export default AllProducts