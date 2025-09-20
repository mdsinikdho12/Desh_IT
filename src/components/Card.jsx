"use client";
import React from "react";
import Image from "next/image";

const TechCard = ({ imgSrc, title }) => {
  return (
    <div className="overflow-hidden flex flex-col items-center justify-center p-4">
      {/* Image wrapper div */}
      <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 flex items-center justify-center">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-contain"
          sizes="(max-width: 640px) 100vw, 
                 (max-width: 768px) 50vw, 
                 (max-width: 1024px) 33vw, 
                 25vw"
        />

        {/* Title box */}
        <div
          className="bg-white absolute shadow-md bottom-[-10px] text-gray-600 font-bold 
                        w-3/4 sm:w-2/3 md:w-1/2 
                        text-center py-2 rounded-md text-sm sm:text-base md:text-lg">
          {title}
        </div>
      </div>
    </div>
  );
};

export default TechCard;
