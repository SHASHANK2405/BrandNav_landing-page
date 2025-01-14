import React from "react";
import AttributeBox from "./AttributeBox";

const AttributeSection = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#E6ECFA] via-[#F0F0F8] to-[#F2F2FA] flex justify-center relative">
      <div className="w-full flex flex-col items-center mt-16 gap-28 mb-96">
        <div className="w-[649px] h-[79px] gap-10 flex flex-col mt-10">
          <p className="w-[649px] h-[79px] gap-0 text-[38px] font-semibold leading-[72px] tracking-[-0.02em] text-center text-[#2F327D]">
            Pinpoint your ideal customer with relevant data attributes
          </p>
        </div>
        <div className="w-[1026px] h-[405px] flex flex-col items-center gap-16">
          <p className="w-[244px] h-[17px] font-semibold text-[24px] text-center text-[#007DF2]">
            Screener Attributes
          </p>
          <div className="w-[1026px] h-[144px] flex justify-between gap-[110px]">
            <AttributeBox image="/assets/first.png" text="Financials" />
            <AttributeBox
              image="/assets/second.png"
              text="Company Name & Website"
            />
            <AttributeBox image="/assets/third.png" text="Company Location" />
            <AttributeBox image="/assets/forth.png" text="Country code" />
          </div>
          <div className="w-[742px] h-[114px] flex justify-between gap-[110px]">
            <AttributeBox image="/assets/fifth.png" text="Employee count" />
            <AttributeBox image="/assets/sixth.png" text="Industry" />
            <AttributeBox image="/assets/seventh.png" text="and 20+ more" />
          </div>
          <p className="w-[244px] h-[17px] font-semibold text-[24px] text-center text-[#007DF2]">
            Enricher Attributes
          </p>
          <div className="w-[1026px] h-[144px] flex justify-between gap-[110px]">
            <AttributeBox image="/assets/eighth.png" text="Phone" />
            <AttributeBox image="/assets/nineth.png" text="Email" />
            <AttributeBox image="/assets/tenth.png" text="Job title" />
            <AttributeBox image="/assets/elenventh.png" text="Linkedin" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttributeSection;
