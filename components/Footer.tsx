"use client";

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#E3E2E5] text-white py-10 px-5 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section - Company Info */}
        <div className="flex flex-col gap-4 max-w-sm">
          <h2 className="text-2xl font-semibold text-[#2F327D]">BrandNav.io</h2>
          <p className="text-[#212529] text-[15px] font-normal ">
            BrandNav is an Ecom Leads Database with tons of amazing filters. Now
            you can get access to stores with just a simple click.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-[#121127] hover:text-white text-xl">
              <FaFacebookF />
            </a>
            <a href="#" className="text-[#121127] hover:text-white text-xl">
              <FaTwitter />
            </a>
            <a href="#" className="text-[#121127] hover:text-white text-xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-[#121127] hover:text-white text-xl">
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Right Section - Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-gray-300">
          {/* Blogs */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-black">Blogs</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-[#008EFF] hover:text-white">
                  All Blogs
                </a>
              </li>
              <li>
                <a href="#" className="text-[#008EFF]hover:text-white">
                  Cold Emailing
                </a>
              </li>
            </ul>
          </div>

          {/* Documentations */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-black">
              Documentations
            </h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-[#008EFF] hover:text-white">
                  Getting Started
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-black">Resources</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-[#008EFF] hover:text-white">
                  Latest Updates
                </a>
              </li>
              <li>
                <a href="#" className="text-[#008EFF] hover:text-white">
                  Roadmaps
                </a>
              </li>
              <li>
                <a href="#" className="text-[#008EFF] hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-[#008EFF] hover:text-white">
                  Join Us
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-black">Legal</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-[#008EFF] hover:text-white">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="text-[#008EFF] hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#008EFF] hover:text-white">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#008EFF] hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom - Copyright */}
      <div className="mt-10 text-center text-gray-400">
        © 2022 BrandNav. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
