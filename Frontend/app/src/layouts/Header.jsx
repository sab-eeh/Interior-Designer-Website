import React, { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FiAlignJustify } from "react-icons/fi";

const DropdownMenu = () => {
  // State for dropdown menu
  const [showDropdown, setShowDropdown] = useState(false);
  // State for mobile menu
  const [mobileMenu, setMobileMenu] = useState(false);

  // Toggles dropdown menu on hover
  const handleMouseEnter = () => setShowDropdown(true);
  const handleMouseLeave = () => setShowDropdown(false);

  // Toggles mobile menu on click
  const toggleMobileMenu = () => setMobileMenu((prev) => !prev);

  return (
    <div className="relative">
      <header className="absolute top-2 flex justify-between items-center text-white px-6 lg:px-10 mt-6 w-full rounded-3xl z-10">
        {/* Logo */}
        <h1 className="text-xl sm:text-xl md:text-xl lg:text-2xl font-bold">
          Wajeeh.
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex items-center font-semibold lg:text-lg md:text-sm sm:text-sm lg:gap-7 md:gap-5 sm:gap-3">
          <a href="#">HOME</a>
          <a href="#">ABOUT</a>

          {/* Dropdown Menu */}
          <div className="relative">
            <button
              className="flex items-center gap-1"
              onMouseEnter={handleMouseEnter}
            >
              SERVICES <RiArrowDownSFill size={24} className="cursor-pointer" />
            </button>

            {showDropdown && (
              <div
                className="absolute w-max mt-3 flex flex-col bg-white text-black shadow-lg font-semibold rounded-md"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <a
                  href="#"
                  className="block py-2 px-4 text-sm hover:bg-gray-300"
                >
                  ARCHITECTURE
                </a>
                <hr className="text-gray-300" />
                <a
                  href="#"
                  className="block py-2 px-4 text-sm hover:bg-gray-300"
                >
                  INTERIOR DESIGN
                </a>
                <hr className="text-gray-300" />
                <a
                  href="#"
                  className="block py-2 px-4 text-sm hover:bg-gray-300"
                >
                  PROJECT MANAGEMENT
                </a>
              </div>
            )}
          </div>

          <a href="#">PORTFOLIO</a>
          <a href="#">CONTACT</a>
        </nav>

        {/* Social Icons (Hidden in Mobile View) */}
        <div className=" hidden sm:flex items-center gap-4  ">
          <FaFacebook size={20} className="cursor-pointer" />
          <FaInstagram size={23} className="cursor-pointer" />
          <IoMdMail size={24} className="cursor-pointer" />
        </div>

        {/* Mobile Menu Button */}
        <div className="max-[640px]:flex max-[640px]:items-center max-[640px]:gap-3 hidden">
        <div className="max-[640px]:flex max-[640px]:items-center gap-3 lg:hidden ">
            <FaFacebook size={20} className="cursor-pointer hover:text-gray-400 " />
            <FaInstagram size={23} className="cursor-pointer hover:text-gray-400" />
            <IoMdMail size={24} className="cursor-pointer hover:text-gray-400" />
          </div> 
          <button className="sm:hidden" onClick={toggleMobileMenu}>
            <FiAlignJustify size={28} className="cursor-pointer hover:text-gray-400" />
          </button>
          
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="absolute bg-white w-full left-0 top-16  shadow-lg z-20 sm:hidden">
          <nav className="flex flex-col space-y-1 font-semibold text-black">
            <a className="block  hover:bg-gray-300 px-3 py-2 " href="#">
              HOME
            </a>
            <hr className="text-gray-400" />
            <a className="block px-3 py-2 hover:bg-gray-300" href="#">
              ABOUT
            </a>
            <hr className="text-gray-400" />

            {/* Mobile Dropdown */}
            <div className="relative">
              <button
                className="flex items-center gap-1 w-full text-left px-3 py-2 hover:bg-gray-300"
                onClick={() => setShowDropdown((prev) => !prev)}
              >
                SERVICES{" "}
                <RiArrowDownSFill size={24} className="cursor-pointer" />
              </button>
              <hr className="text-gray-400" />
              {showDropdown && (
                <div className="mt-2 flex flex-col bg-white text-black shadow-lg font-semibold rounded-md">
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm hover:bg-gray-300"
                  >
                    ARCHITECTURE
                  </a>
                  <hr className="text-gray-300" />
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm hover:bg-gray-300"
                  >
                    INTERIOR DESIGN
                  </a>
                  <hr className="text-gray-300" />
                  <a
                    href="#"
                    className="block py-2 px-4 text-sm hover:bg-gray-300"
                  >
                    PROJECT MANAGEMENT
                  </a>
                </div>
              )}
            </div>

            <a className="block px-3 py-2 hover:bg-gray-300" href="#">
              PORTFOLIO
            </a>
            <hr className="text-gray-400" />
            <a className="block px-3 py-2 hover:bg-gray-300" href="#">
              CONTACT
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
