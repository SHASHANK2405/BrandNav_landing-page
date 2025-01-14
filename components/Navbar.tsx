"use client"; // Add this at the very top

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri"; // Importing the dropdown icon

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change color when scrolled 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`md:w-[1180px] md:h-[57px] p-2 fixed top-[20px] left-1/2 transform -translate-x-1/2 flex justify-between px-6 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md z-10 rounded-[8px]" // White background on scroll
          : "bg-transparent"
      } w-[396px] h-[46px]`}
    >
      {/* Logo & Navigation Links Container */}
      <div className="flex items-center gap-12 w-full max-w-[1000px] mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Image src="/assets/logo.png" alt="Logo" width={140} height={40} />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-2 text-lg">
          <li className="cursor-pointer flex items-center text-[#0D2052] hover:text-[#0084FF] w-[130px] h-[39px] px-3 py-2 gap-1 rounded-tl-[8px] active:text-[#0D2052]">
            Products
            <RiArrowDropDownLine className="ml-1 text-[#0D2052] text-2xl" />
          </li>
          <li className="cursor-pointer text-[#0D2052] hover:text-[#0084FF] w-[114px] h-[39px] px-3 py-2 gap-1 rounded-tl-[8px] active:text-[#0D2052]">
            Pricing
          </li>
          <li className="cursor-pointer text-[#0D2052] hover:text-[#0084FF] w-[114px] h-[39px] px-3 py-2 gap-1 rounded-tl-[8px] active:text-[#0D2052]">
            Blogs
          </li>
          <li className="cursor-pointer flex items-center text-[#0D2052] hover:text-[#0084FF] w-[140px] h-[39px] px-3 py-2 gap-1 rounded-tl-[8px] active:text-[#0D2052]">
            Resources
            <RiArrowDropDownLine className="ml-1 text-[#0D2052] text-2xl" />
          </li>
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex space-x-4 w-[234px] h-[43px] gap-3">
        <button className="w-[86px] h-[38px] px-6 gap-2.5 bg-transparent border-[1px] border-solid border-[#287DFF] rounded-[8px] text-[#0D2052]">
          Login
        </button>
        <button className="w-[136px] h-[38px] px-3 gap-2.5 bg-[#0084FF] text-white rounded-[8px]">
          Start for free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
