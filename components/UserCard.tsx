import React from "react";
import Image from "next/image";

interface UserBoxProps {
  image: string;
  text1: string;
  text2: string;
}

const UserCard: React.FC<UserBoxProps> = ({ image, text1, text2 }) => {
  return (
    <div className="w-[280px] h-[270px] flex flex-col gap-6 items-center">
      <div className="w-[71px] h-[66px] relative">
        <Image
          src={image}
          alt={text1}
          width={71}
          height={66}
          className="object-contain" // Prevents distortion
          layout="fixed" // Ensures the image is exactly 71x66
        />
      </div>
      <p className="w-[265px] h-[14px] font-semibold text-[20px] text-center text-[#2F327D]">
        {text1}
      </p>
      <p className="w-[279px] h-[107px] font-normal text-[16px] text-center text-[#595B97]">
        {text2}
      </p>
    </div>
  );
};

export default UserCard;
