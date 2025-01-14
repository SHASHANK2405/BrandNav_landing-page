"use client";

import React from "react";
import Image from "next/image";
import { LuCreditCard } from "react-icons/lu";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const FooterBanner = () => {
  return (
    <div className="relative flex justify-center items-center w-full mt-10">
      {/* Background Image */}
      <div className="relative w-[1080px] h-[396px]">
        <Image
          src="/assets/footerBanner.png"
          alt="Footer Banner"
          width={1080}
          height={396}
          className="object-cover rounded-lg"
        />

        {/* Overlay Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-center">
          {/* Heading */}
          <p className="w-[668px] h-[56px] text-[40px] font-semibold leading-[72px] tracking-[-0.02em] text-[#FFFFFF]">
            Want to see BrandNav in action?{" "}
          </p>

          {/* Subtext */}
          <p className="w-[287px] h-[32px] text-[20px] font-medium text-[#F2F2F2] mt-2">
            Try BrandNav for free today!
          </p>

          {/* Button & Ratings */}
          <div className="mt-5 flex flex-col items-center">
            <button className="w-[226px] h-[44px] text-xl px-3 py-2 bg-[#0084FF] text-white rounded-[8px]">
              Grab free leads
            </button>

            {/* Credit Card & Ratings */}
            <div className="mt-2 flex items-center gap-3 text-[14px] text-[#FFFFFF]">
              <div className="flex items-center gap-1">
                <LuCreditCard className="text-[#FFFFFF]" />
                <p>No credit card required</p>
              </div>
              <span className="font-medium text-[#FFFFFF]">|</span>
              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStar className="text-yellow-400" />
                <FaStarHalfAlt className="text-yellow-400" />
                <p>4.8/5 G2 Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
