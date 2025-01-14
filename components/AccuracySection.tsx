import React from "react";
import Image from "next/image";

const AccuracySection = () => {
  return (
    <section className="w-full h-[665px] bg-gradient-to-b from-[#E6ECFA] via-[#F0F0F8] to-[#F2F2FA] flex flex-col items-center gap-16">
      {/* Title */}
      <div className="w-[622px] h-[79px] gap-10 flex flex-col mt-10">
        <p className="w-[622px] h-[79px] gap-0 text-[38px] font-semibold leading-[72px] tracking-[-0.02em] text-center text-[#2F327D]">
          Fix data accuracy problems with BrandNav
        </p>
      </div>

      {/* Image Container - Centering Images */}
      <div className="w-full flex justify-center">
        <div className="w-[880px] flex md:flex-row flex-col justify-center items-center gap-10">
          <div className="w-[440px] h-[426px] flex-shrink-0 animate-floating">
            <Image
              src="/assets/before svg.png"
              alt="before"
              width={440}
              height={426}
              className="object-cover"
            />
          </div>
          <div className="w-[440px] h-[300px] flex-shrink-0 animate-floating delay-200">
            <Image
              src="/assets/after svg.png"
              alt="after"
              width={440}
              height={300}
              // className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccuracySection;
