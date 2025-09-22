"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TechCard = ({ imgSrc, title }) => {
  return (
    <motion.div
      className="overflow-hidden flex flex-col items-center justify-center p-4"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}>
      {/* Image >> */}
      <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 flex items-center justify-center">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-contain transition-transform duration-300 ease-in-out"
          sizes="(max-width: 640px) 100vw, 
                 (max-width: 768px) 50vw, 
                 (max-width: 1024px) 33vw, 
                 25vw"
        />

        {/* Title box >> */}
        <motion.div
          className="bg-white absolute shadow-md bottom-[-10px] text-gray-600 font-bold 
                     w-3/4 sm:w-2/3 md:w-1/2 
                     text-center py-2 rounded-md text-sm sm:text-base md:text-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, ease: "easeIn" }}>
          {title}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TechCard;
