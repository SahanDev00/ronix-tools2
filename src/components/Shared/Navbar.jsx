import React, { useState } from 'react'
import logo from '../../assets/logo.jpg'
import { FaSearch, FaWhatsapp } from 'react-icons/fa'
import { IoIosClose, IoIosMenu } from 'react-icons/io'

const Navbar = () => {

  const [isNavbar, setIsNavbar] = useState(false);
  const [isSearchbar, setIsSearchbar] = useState(false);

  const toggleNavBar = () => {
    setIsNavbar(!isNavbar);
  }

  const toggleSearchBar = () => {
    setIsSearchbar(!isSearchbar);
  }
    
  return (
    <div className='w-full fixed bg-white h-[80px] border z-50'>
      <div className='w-[90%] sm:w-[80%] md:w-[70%] lg:w-[80%] xl:w-[70%] mx-auto h-full flex items-center justify-between'>
        <div className='h-full w-full md:w-[75%] xl:w-full'>
          <img src={logo} className='h-full py-4 lg:py-3' alt="" />
        </div>
        <div className={`hidden absolute lg:flex items-center w-full justify-center gap-6 text-sm font-karla duration-300 text-gray-900 ${isSearchbar ? 'translate-y-5 transform opacity-0' : 'translate-y-0 transform opacity-100'}`}>
          <p className='cursor-pointer hover:text-gray-500 duration-200'>HOME</p>
          <p className='cursor-pointer hover:text-gray-500 duration-200'>PRODUCTS</p>
          <p className='cursor-pointer hover:text-gray-500 duration-200'>TOOL ACCESSORIES</p>
          <p className='cursor-pointer hover:text-gray-500 duration-200'>CONTACT US</p>
          <FaSearch onClick={toggleSearchBar} className='cursor-pointer hover:text-gray-500 duration-200 size-4' />
        </div>
        <div className={`absolute flex items-center w-full ml-[10%] md:ml-0 justify-center gap-6 text-sm font-karla duration-300 ${!isSearchbar ? '-translate-y-5 transform opacity-0' : 'translate-y-0 transform opacity-100'}`}>
          <input type="text" placeholder='Search...' className='w-[150px] sm:w-[200px] md:w-[250px] lg:w-[380px] h-[40px] pl-3' />
          <IoIosClose onClick={toggleSearchBar} className='cursor-pointer hover:text-gray-500 duration-200 size-8' />
        </div>
        <div className={`flex lg:hidden items-center w-full justify-end gap-6 font-karla text-gray-600 duration-300 ${isSearchbar ? 'translate-y-5 transform opacity-0' : 'translate-y-0 transform opacity-100'}`}>
          <FaSearch onClick={toggleSearchBar} className='cursor-pointer hover:text-gray-500 duration-200 size-5' />
          {!isNavbar ? 
            <IoIosMenu onClick={toggleNavBar} className='cursor-pointer hover:text-gray-500 duration-200 size-8' />
             : 
            <IoIosClose onClick={toggleNavBar} className='cursor-pointer hover:text-gray-500 duration-200 size-8' />
           }
        </div>
        <div className={`absolute w-[80%] md:w-[70%] lg:hidden border top-[80px] duration-300 overflow-hidden ${!isNavbar ? 'h-0 invisible' : 'h-[250px] border-t-4 border-t-blue-500'}`}>
           <div className='w-[80%] mx-auto h-full flex flex-col justify-center gap-3 text-[14px] font-karla '>
                <p>HOME</p>
                <hr />
                <p>PRODUCTS</p>
                <hr />
                <p>TOOL ACCESSORIES</p>
                <hr />
                <p>CONTACT US</p>
                <hr />
           </div>
        </div>
      </div>
      <a href='https://web.whatsapp.com/send?phone=94777422833&text=' target='_blank' rel="noreferrer" className='fixed bg-green-400 text-white bottom-5 right-5 rounded-full p-4 shadow-lg'>
           <FaWhatsapp className='size-7'/>
      </a>
    </div>
  )
}

export default Navbar