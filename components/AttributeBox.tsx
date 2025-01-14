import React from "react";
import Image from "next/image";

interface AttributeBoxProps {
  image: string;
  text: string;
}

const AttributeBox: React.FC<AttributeBoxProps> = ({ image, text }) => {
  return (
    <div className="w-[174px] h-[114px] flex flex-col justify-between items-center">
      <Image
        src={image}
        alt={text}
        width={70}
        height={70}
        className="object-cover"
      />
      <p className="w-[174px] h-[44px] font-semibold text-[20px] text-center text-[#2F327D]">
        {text}
      </p>
    </div>
  );
};

export default AttributeBox;
