import React from "react";
import UserCard from "./UserCard";

const BrandNavUser = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#E6ECFA] via-[#F0F0F8] to-[#F2F2FA] flex justify-center relative">
      <div className="w-full  flex flex-col items-center mt-16 gap-14 mb-16">
        <div className="w-[604px] h-[71px] gap-10 flex flex-col">
          <p className="w-[604px] h-[25px] gap-0 text-[38px] font-semibold leading-[72px] tracking-[-0.02em] text-center text-[#2F327D]">
            Who is using BrandNav?{" "}
          </p>
          <p className="text-center text-[#595B97] text-[16px] font-normal">
            BrandNav has become irreplaceable tool for businesses{" "}
          </p>
        </div>
        <div className="w-[956px] h-[272px] flex md:flex-row flex-col justify-between">
          <UserCard
            image="/assets/Icon.png"
            text1="Sales & Marketing Teams"
            text2="Sales and marketing teams are using BrandNav to efficiently locate and verify prospect contact information and identify key decision-makers."
          />
          <UserCard
            image="/assets/third.png"
            text1="Software & IT Companies"
            text2="IT companies are using BrandNav to build lists for outreach, identify target organizations, and verify email addresses of leads to improve email deliverability."
          />
          <UserCard
            image="/assets/third.png"
            text1="Service Providers"
            text2="Service providers are using BrandNav  to locate accurate email addresses  build a list of contacts, and improve the efficiency of their sales process."
          />
        </div>
        <div className="w-[956px] h-[272px] flex md:flex-row flex-col justify-between">
          <UserCard
            image="/assets/third.png"
            text1="Sales & Marketing Teams"
            text2="Sales and marketing teams are using BrandNav to efficiently locate and verify prospect contact information and identify key decision-makers."
          />
          <UserCard
            image="/assets/third.png"
            text1="Software & IT Companies"
            text2="IT companies are using BrandNav to build lists for outreach, identify target organizations, and verify email addresses of leads to improve email deliverability."
          />
          <UserCard
            image="/assets/Icon6.png"
            text1="Service Providers"
            text2="Service providers are using BrandNav  to locate accurate email addresses  build a list of contacts, and improve the efficiency of their sales process."
          />
        </div>
      </div>
    </section>
  );
};

export default BrandNavUser;
