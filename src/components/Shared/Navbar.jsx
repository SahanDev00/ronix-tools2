import React, { useState } from "react";
import logo from "../../assets/logo.jpg";
import { FaSearch, FaWhatsapp } from "react-icons/fa";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";

const Navbar = () => {
  const [isNavbar, setIsNavbar] = useState(false);
  const [isSearchbar, setIsSearchbar] = useState(false);
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");
  const Navigate = useNavigate();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleNavBar = () => {
    setIsNavbar(!isNavbar);
  };

  const toggleSearchBar = () => {
    setIsSearchbar(!isSearchbar);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      Navigate(`/search/${searchQuery.trim()}`);
      setSearchQuery("");
    }
  };

  return (
    <div className="w-full fixed bg-white h-[80px] border z-50">
      <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[80%] xl:w-[70%] mx-auto h-full flex items-center justify-between">
        <div className="h-full w-full md:w-[75%] xl:w-full">
          <img src={logo} className="h-full py-4 lg:py-3" alt="" />
        </div>
        <div
          className={`hidden absolute lg:flex items-center w-full justify-center gap-6 text-sm font-karla duration-300 text-gray-900 ${
            isSearchbar
              ? "translate-y-5 transform opacity-0"
              : "translate-y-0 transform opacity-100"
          }`}
        >
          <Link to="/">
            <p
              className={`cursor-pointer hover:text-gray-500 duration-200 ${
                isActive("/") && "text-[#bf0000]"
              }`}
            >
              HOME
            </p>
          </Link>
          <Link to="/products">
            <p
              className={`cursor-pointer hover:text-gray-500 duration-200 ${
                isActive("/products") && "text-[#bf0000]"
              }`}
            >
              PRODUCTS
            </p>
          </Link>
          <Link to="/tool-accessories">
            <p
              className={`cursor-pointer hover:text-gray-500 duration-200 ${
                isActive("/tool-accessories") && "text-[#bf0000]"
              }`}
            >
              TOOL ACCESSORIES
            </p>
          </Link>
          <Link to="/contact">
            <p
              className={`cursor-pointer hover:text-gray-500 duration-200 ${
                isActive("/contact") && "text-[#bf0000]"
              }`}
            >
              CONTACT US
            </p>
          </Link>
          <FaSearch
            onClick={toggleSearchBar}
            className="cursor-pointer hover:text-gray-500 duration-200 size-4"
          />
        </div>
        <div
          className={`absolute flex items-center w-full ml-[10%] md:ml-0 justify-center gap-6 text-sm font-karla duration-300 ${
            !isSearchbar
              ? "-translate-y-5 transform opacity-0"
              : "translate-y-0 transform opacity-100"
          }`}
        >
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search..."
            className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[380px] h-[40px] pl-3"
          />
          <IoIosClose
            onClick={toggleSearchBar}
            className="cursor-pointer hover:text-gray-500 duration-200 size-8"
          />
        </div>
        <div
          className={`flex lg:hidden items-center w-full justify-end gap-6 font-karla text-gray-600 duration-300 ${
            isSearchbar
              ? "translate-y-5 transform opacity-0"
              : "translate-y-0 transform opacity-100"
          }`}
        >
          <FaSearch
            onClick={toggleSearchBar}
            className="cursor-pointer hover:text-gray-500 duration-200 size-5"
          />
          {!isNavbar ? (
            <IoIosMenu
              onClick={toggleNavBar}
              className="cursor-pointer hover:text-gray-500 duration-200 size-8"
            />
          ) : (
            <IoIosClose
              onClick={toggleNavBar}
              className="cursor-pointer hover:text-gray-500 duration-200 size-8"
            />
          )}
        </div>
        <div
          className={`absolute bg-white w-[90%] md:w-[70%] lg:hidden border top-[80px] duration-300 overflow-hidden ${
            !isNavbar
              ? "h-0 invisible"
              : "h-[250px] border-t-4 border-t-blue-500"
          }`}
        >
          <div className="w-[80%] mx-auto h-full flex flex-col justify-center gap-3 text-[14px] font-karla ">
            <Link onClick={toggleNavBar} to="/">
              <p
                className={`cursor-pointer duration-200 ${
                  isActive("/") && "text-[#bf0000]"
                }`}
              >
                HOME
              </p>
            </Link>
            <hr />
            <Link onClick={toggleNavBar} to="/products">
              <p
                className={`cursor-pointer duration-200 ${
                  isActive("/products") && "text-[#bf0000]"
                }`}
              >
                PRODUCTS
              </p>
            </Link>
            <hr />
            <Link onClick={toggleNavBar} to="/tool-accessories">
              <p
                className={`cursor-pointer duration-200 ${
                  isActive("/tool-accessories") && "text-[#bf0000]"
                }`}
              >
                TOOL ACCESSORIES
              </p>
            </Link>
            <hr />
            <Link onClick={toggleNavBar} to="/contact">
              <p
                className={`cursor-pointer duration-200 ${
                  isActive("/contact-us") && "text-[#bf0000]"
                }`}
              >
                CONTACT US
              </p>
            </Link>
            <hr />
          </div>
        </div>
      </div>
      <a
        href="https://web.whatsapp.com/send?phone=94777422833&text="
        target="_blank"
        rel="noreferrer"
        className="fixed bg-green-400 text-white bottom-5 right-5 rounded-full p-4 shadow-lg"
      >
        <FaWhatsapp className="size-7" />
      </a>
      <div className="fixed h-[200px] w-[50px] z-50 top-[40%] hidden lg:flex flex-col">
        <a
          href="http://www.facebook.com/sharer.php?u=https%3A%2F%2Fmerclanka.com%2Ftool-accessories%2F&t=Tool%20Accessories"
          target="_blank"
          rel="noreferrer"
          className="w-full h-[50px] bg-blue-600 flex items-center justify-center text-white text-lg hover:w-[85%] mx-auto duration-200 cursor-pointer"
        >
          <FaFacebookF />
        </a>
        <a
          href="http://twitter.com/share?text=Tool%20Accessories&url=https%3A%2F%2Fmerclanka.com%2Ftool-accessories%2F"
          target="_blank"
          rel="noreferrer"
          className="w-full h-[50px] bg-[#bf0000] flex items-center justify-center text-white text-lg hover:w-[85%] mx-auto duration-200 cursor-pointer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://merclanka.com/tool-accessories/#"
          target="_blank"
          rel="noreferrer"
          className="w-full h-[50px] bg-red-500 flex items-center justify-center text-white text-lg hover:w-[85%] mx-auto duration-200 cursor-pointer"
        >
          <FaPinterestP />
        </a>
        <a
          href="http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fmerclanka.com%2Ftool-accessories%2F&title=Tool%20Accessories"
          target="_blank"
          rel="noreferrer"
          className="w-full h-[50px] bg-blue-500 flex items-center justify-center text-white text-lg hover:w-[85%] mx-auto duration-200 cursor-pointer"
        >
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
