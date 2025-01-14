import React from "react";

// Star Icon Component
const StarIcon: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-500"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
};

// Props Interface
interface RatingCardProps {
  name: string;
  position: string;
  image: string;
  header: string;
  review: string;
}

const RatingCard: React.FC<RatingCardProps> = ({
  name,
  position,
  image,
  header,
  review,
}) => {
  return (
    <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-10">
      {/* Header */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <div className="flex justify-stretch w-full">
            <h3 className="text-[14px] font-medium text-[#696984]">{name}</h3>
            <div className="flex items-center gap-1">
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </div>
          </div>
          <p className="text-[13px] text-[#696984] font-normal">{position}</p>
        </div>
      </div>

      {/* Body */}
      <div className="mt-4">
        <p className="w-[344px] h-26px font-semibold text-[17px] text-[#2F327D]">
          {header}
        </p>
        <p className="text-gray-700">{review}</p>
      </div>
    </div>
  );
};

export default RatingCard;
