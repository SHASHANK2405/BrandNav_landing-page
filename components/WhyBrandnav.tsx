import React from "react";
import Image from "next/image";

const WhyBrandnav = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#E6ECFA] via-[#F0F0F8] to-[#F2F2FA] flex justify-center relative">
      <div className="w-full  flex flex-col items-center mt-16 gap-14 mb-16">
        <div className="w-[604px] h-[71px] gap-10 flex flex-col">
          <p className="w-[604px] h-[25px] gap-0 text-[38px] font-semibold leading-[72px] tracking-[-0.02em] text-center text-[#2F327D]">
            Why should you use BrandNav?
          </p>
          <p className="text-center text-[#595B97] text-[16px] font-normal">
            Optimize your eorkflow for faster results and higher revenue
          </p>
        </div>
        <div className="w-[998px] h-[407px] flex md:flex-row flex-col justify-between">
          <div className="w-[473px] h-[407px]">
            <Image
              src="/assets/image.png"
              alt="image"
              width={473}
              height={407}
              className="object-cover"
            />
          </div>
          <div className="h-[407px] flex flex-col justify-center gap-10">
            <Image
              src="/assets/csv.png"
              alt="csv"
              width={50}
              height={50}
              className="object-cover"
            />
            <div className="w-[466px] h-[155px] flex flex-col gap-10">
              <p className="w-[206px] h-[18px] font-semibold text-[26px] text-[#2F327D]">
                Enrich any CSV
              </p>
              <p className="w-[466px] h-[107px] text-left text-[#595B97] text-[16px] font-normal">
                BrandNav transforms your CSV files by adding valuable contact,
                firmographics, and technographics data. With just a few clicks,
                you can enhance your data with enriched information and unlock
                new insights and opportunities. 
              </p>
            </div>
          </div>
        </div>
        <div className="w-[998px] h-[407px] flex md:flex-row flex-col justify-between">
          <div className="h-[407px] flex flex-col justify-center gap-10">
            <Image
              src="/assets/sync 1.png"
              alt="sync1"
              width={50}
              height={50}
              className="object-cover"
            />
            <div className="w-[466px] h-[155px] flex flex-col gap-10">
              <p className="w-[402px] h-[18px] font-semibold text-[26px] text-[#2F327D]">
                Fresh data updates everyday
              </p>
              <p className="w-[466px] h-[107px] text-left text-[#595B97] text-[16px] font-normal">
                BrandNav updates its data every day, providing the most recent
                and accurate information to its users. With a constant stream of
                new information, BrandNav ensures that users have access to the
                latest contact, firmographics, and technographics data for
                better decision-making.
              </p>
            </div>
          </div>
          <div className="w-[473px] h-[407px]">
            <Image
              src="/assets/Layer_1.png"
              alt="Layer_1"
              width={473}
              height={407}
              className="object-cover "
            />
          </div>
        </div>
        <div className="w-[998px] h-[407px] flex md:flex-row flex-col justify-between">
          <div className="w-[473px] h-[407px]">
            <Image
              src="/assets/image2.png"
              alt="image2"
              width={473}
              height={407}
              className="object-cover"
            />
          </div>
          <div className="h-[407px] flex flex-col justify-center gap-10">
            <Image
              src="/assets/filter.png"
              alt="filter"
              width={50}
              height={50}
              className="object-cover"
            />
            <div className="w-[466px] h-[155px] flex flex-col gap-20">
              <p className="w-[490px] h-[18px] font-semibold text-[26px] text-[#2F327D]">
                Advanced search with 25+ unique filters
              </p>
              <p className="w-[466px] h-[107px] text-left text-[#595B97] text-[16px] font-normal">
                BrandNav offers over 25+ filters to help users build highly
                segmented lists for better prospecting. With BrandNav, you can
                create highly targeted lists that are tailored to your specific
                needs, streamlining your workflow and maximizing your
                productivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBrandnav;
