import React from "react";
import { FaMapLocation, FaPhone } from "react-icons/fa6";
import { IoIosPhonePortrait } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="w-full min-h-[350px] bg-black font-karla">
      <div className="w-[90%] md:w-[80%] xl:w-[70%] h-full mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 p-10 sm:p-16">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <img
            className="w-[190px] object-contain"
            src="https://merclanka.com/wp-content/uploads/2024/05/footer-logo.png"
            alt="Footer Logo"
          />
        </div>

        {/* Products */}
        <div className="text-center md:text-left">
          <h1 className="text-white font-bold text-xl">PRODUCTS</h1>
          <ul className="text-white mt-3 space-y-2 list-disc">
            <Link to='/'>
              <li className="text-lg">Home</li>
            </Link>
            <Link to='/products'>
              <li className="text-lg">Products</li>
            </Link>
            <Link to='/tool-accessories'>
              <li className="text-lg">Accessories</li>
            </Link>
          </ul>
        </div>

        {/* Address & Email */}
        <div className="space-y-7">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <FaMapLocation className="size-10 text-purple-600" />
            <div>
              <h1 className="text-white font-bold text-xl">ADDRESS</h1>
              <p className="text-gray-200 mt-2">No.38, Pannala Road,</p>
              <p className="text-gray-200">Kuliyapitiya,</p>
              <p className="text-gray-200">Sri Lanka</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <MdEmail className="size-10 text-purple-600" />
            <div>
              <h1 className="text-white font-bold text-xl">EMAIL</h1>
              <p className="text-gray-200 mt-2">sales@merclanka.com</p>
            </div>
          </div>
        </div>

        {/* Mobile & Phone */}
        <div className="space-y-7">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <IoIosPhonePortrait className="size-10 text-purple-600" />
            <div>
              <h1 className="text-white font-bold text-xl">MOBILE</h1>
              <p className="text-gray-200 mt-2">+94 777 422 833</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
            <FaPhone className="size-10 text-purple-600" />
            <div>
              <h1 className="text-white font-bold text-xl">PHONE</h1>
              <p className="text-gray-200 mt-2">+94 372 280 280</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-stone-900 w-full h-[70px] flex items-center justify-center text-center px-4">
        <p className="text-white text-sm sm:text-base">
          Copyright © Merc Lanka | Designed by{" "}
          <a href="https://www.exesmart.com" rel="noreferrer" target="_blank" className="text-blue-400">Exesmart Dynamics</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
