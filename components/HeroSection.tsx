import React from "react";
import Navbar from "./Navbar";
import Image from "next/image";
import { LuCreditCard } from "react-icons/lu";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="md:w-full md:h-[1000px] w-[628px] h-[1810px] bg-gradient-to-b from-[#E6ECFA] via-[#F0F0F8] to-[#F2F2FA] flex items-center justify-center relative">
      <div className="flex flex-col items-center justify-center relative">
        <Navbar />
        <div className="md:w-[570px] md:h-[212px] w-[396px] h-[196px] md:absolute md:top-[-235px] md:left-[50%] transform -translate-x-1/2 gap-[20px] flex flex-col justify-center items-center">
          <p className="md:w-[570px] md:h-[144px] w-[396px] h-[104px] gap-0 md:text-[59px] text-[42px] font-medium leading-[72px] tracking-[-0.02em] md:text-center text-left text-[#0D2052]">
            Weapons to Grow Your Business
          </p>
          <p className="md:w-[510px] md:h-[48px] w-[396px] h-[72px] md:text-center text-left text-[#666666] text-[16px] font-normal">
            Turbocharge your business growth.
            <br />
            Our products help ignite sales and entrepreneurship.
          </p>
        </div>
        <div className="w-[397px] h-[98px] absolute top-[10px] left-[50%] transform -translate-x-1/2 gap-[20px] flex flex-col justify-center items-center">
          <button className="md:w-[226px] md:h-[44px] w-[396px] h-[62px] text-xl px-3 py-2 gap-2.5 bg-[#0084FF] text-white rounded-[8px]">
            Start for free
          </button>
          <div className="w-[397px] h-[16px] hidden md:flex">
            <div className="w-[193px] h-[16px] flex gap-1 items-center justify-center">
              <LuCreditCard className="text-[#666666] text-[14px] font-normal" />
              <p className="text-[#666666] text-[14px] font-normal leading-[21px] tracking-[0.02em] text-left decoration-skip-ink">
                No credit card required
              </p>
            </div>
            <p className="font-medium text-[14px] text-[#8A8A8A]">|</p>
            <div className="w-[193px] h-[16px] flex ml-2 gap-1 items-center">
              <div className="flex items-center">
                <FaStar className="text-yellow-400 text-[14px]" />
                <FaStar className="text-yellow-400 text-[14px]" />
                <FaStar className="text-yellow-400 text-[14px]" />
                <FaStar className="text-yellow-400 text-[14px]" />
                <FaStarHalfAlt className="text-yellow-400 text-[14px]" />
              </div>
              <p className="text-[#666666] text-[14px] font-normal leading-[21px] tracking-[0.02em] text-left decoration-skip-ink">
                4.8/5 G2 Rating
              </p>
            </div>
          </div>
        </div>
        <div className="w-[1180px] h-[300px] md:flex hidden">
          <Image
            src="/assets/tools.png"
            alt="tools"
            width={1180} // Set width to 1060px
            height={300} // Set height to 300px
            className="object-cover absolute top-8" // This ensures the image covers the container without distortion
          />
        </div>
        <div className="w-[700px] h-[82px] flex flex-col absolute top-[420px] gap-[28px]">
          <p className="text-center text-[#666666] text-[16px] font-normal leading-[20px] tracking-[0.02em] decoration-skip-ink">
            Modern companies are using{" "}
            <span className="text-center text-[#666666] font-semibold text-[16px]">
              BrandNav
            </span>
          </p>
          <div className="w-[700px] h-[34px] flex justify-between">
            <div className="flex justify-between">
              <Image
                src="/assets/Frame.png"
                alt="Frame"
                width={24} // Set width to 1060px
                height={24} // Set height to 300px
                className="object-cover" // This ensures the image covers the container without distortion
              />
              <Image
                src="/assets/logo 1.png"
                alt="logo 1"
                width={204} // Set width to 1060px
                height={24} // Set height to 300px
                className="object-cover" // This ensures the image covers the container without distortion
              />
            </div>

            <Image
              src="/assets/logo 2.png"
              alt="logo 2"
              width={150} // Set width to 1060px
              height={24} // Set height to 300px
              className="object-cover" // This ensures the image covers the container without distortion
            />
            <Image
              src="/assets/logo 3.png"
              alt="logo 3"
              width={83} // Set width to 1060px
              height={34} // Set height to 300px
              className="object-cover" // This ensures the image covers the container without distortion
            />
            <Image
              src="/assets/logo 4.png"
              alt="logo 4"
              width={46} // Set width to 1060px
              height={29} // Set height to 300px
              className="object-cover" // This ensures the image covers the container without distortion
            />
            <Image
              src="/assets/logo 5.png"
              alt="logo 5"
              width={61} // Set width to 1060px
              height={33} // Set height to 300px
              className="object-cover" // This ensures the image covers the container without distortion
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
