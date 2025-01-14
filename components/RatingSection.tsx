import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import RatingCard from "./RatingCard";

const RatingSection = () => {
  return (
    <div className="w-full h-[660px] flex flex-col bg-[#E1F1FE]">
      <div className="w-full  flex flex-col items-center mt-16 gap-14 mb-16">
        <div className="w-[604px] h-[71px] gap-16 flex flex-col">
          <p className="w-[604px] h-[25px] gap-0 text-[38px] font-semibold leading-[72px] tracking-[-0.02em] text-center text-[#2F327D]">
            Don’t just take our word for it
          </p>
          <div className="w-[390px] h-[20px] flex ml-40 gap-1 items-center">
            <p className="text-center text-[#595B97] text-[20px] font-normal">
              Excellent
            </p>
            <div className="flex ">
              <FaStar className="text-yellow-400 text-[14px]" />
              <FaStar className="text-yellow-400 text-[14px]" />
              <FaStar className="text-yellow-400 text-[14px]" />
              <FaStar className="text-yellow-400 text-[14px]" />
              <FaStarHalfAlt className="text-yellow-400 text-[14px]" />
            </div>
            <p className="text-center text-[#595B97] text-[16px] font-normal">
              4.8/5 G2 Rating
            </p>
          </div>
          <div className="flex gap-16 justify-center">
            <RatingCard
              name="Sai"
              position="CEO, Sentry Ecom"
              image="assets/person1.png"
              header="“Super helpful tool for lead generation!”"
              review="“BrandNav has been extremely useful in helping us find high quality leads for our agency. It’s the best tool I’ve used so far for scrapping leads. Would definitely recommend BrandNav to businesses looking for a lead gen tool.”"
            />
            <RatingCard
              name="Sairaj Matkar"
              position="Founder, AceXmedia"
              image="assets/person2.png"
              header="“Highly recommended if you’re looking to get leads!”"
              review="“Best tool I've used so far for scrapping leads. Helps me scrape my target audience data with ease. Low effort, amazing response rates. Saves a lot of time and manual work”"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingSection;
