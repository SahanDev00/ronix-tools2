import React from 'react'

const Cards = () => {
  return (
    <div className='w-full bg-gray-200 min-h-[300px] sm:p-10 md:p-16 pb-10'>
        <div className='w-[75%] mx-auto grid md:grid-cols-3 items-center justify-between'>
            <img className='w-full md:w-[90%] mx-auto' src="https://merclanka.com/wp-content/uploads/2024/06/2024-06-18-2.jpeg" alt="" />
            <img className='w-full md:w-[90%] mx-auto mt-5 md:mt-0' src="https://merclanka.com/wp-content/uploads/2024/06/2024-06-18-1.jpeg" alt="" />
            <img className='w-full md:w-[90%] mx-auto mt-5 md:mt-0' src="https://merclanka.com/wp-content/uploads/2024/06/2024-06-18-3.jpeg" alt="" />
        </div>
    </div>
  )
}

export default Cards