import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { MdOutlineDoubleArrow } from 'react-icons/md'

const FeaturedProducts = () => {

    const products = [
        {
            name: 'test item 1', 
            image: "https://m.media-amazon.com/images/I/51nLoUEDRWL.jpg"
        },
        {
            name: 'test item 1', 
            image: "https://m.media-amazon.com/images/I/51nLoUEDRWL.jpg"
        },
        {
            name: 'test item 1', 
            image: "https://m.media-amazon.com/images/I/51nLoUEDRWL.jpg"
        },
        {
            name: 'test item 1', 
            image: "https://m.media-amazon.com/images/I/51nLoUEDRWL.jpg"
        },
        {
            name: 'test item 1', 
            image: "https://m.media-amazon.com/images/I/51nLoUEDRWL.jpg"
        },
        {
            name: 'test item 1', 
            image: "https://m.media-amazon.com/images/I/51nLoUEDRWL.jpg"
        },
        {
            name: 'test item 1', 
            image: "https://m.media-amazon.com/images/I/51nLoUEDRWL.jpg"
        },
        {
            name: 'test item 1', 
            image: "https://m.media-amazon.com/images/I/51nLoUEDRWL.jpg"
        },
    ]

  return (
    <div className='w-full min-h-[350px] mt-10 md:mt-0 pb-10'>
        <h1 className='text-center font-bold text-3xl md:text-4xl font-poppins text-gray-700 uppercase'>Featured products</h1>
        <div className='flex items-center justify-center w-full h-full mt-5'>
            <input type="text" placeholder='Search' className='w-[80%] sm:w-[500px] h-[40px] pl-3 border outline-none' /> 
            <button className='w-[40px] h-[40px] flex items-center justify-center bg-gray-200 text-gray-700 font-karla'><FaSearch /></button>
        </div>
        <div className='w-[90%] sm:w-[70%] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mt-7'>
            {products.map((product) => (
                <div className='w-full h-[310px] border border-black cursor-pointer relative'>
                    <img src={product.image} className='w-full h-[280px] object-contain p-5' alt="" />
                    <p className='text-sm w-full flex items-center justify-center mx-auto text-center bg-[#800080] h-[30px] text-white'>{product.name}</p>
                    <div className='w-full h-[280px] bg-white absolute flex items-center justify-center inset-0 opacity-0 hover:opacity-90 duration-300'>
                        <MdOutlineDoubleArrow className='size-10 text-purple-600' />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts