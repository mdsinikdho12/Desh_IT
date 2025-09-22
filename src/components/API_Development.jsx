"use client";

import { motion } from "framer-motion";

function API_Development() {
  return (
    <div className="relative flex items-center justify-center my-12 w-80 h-80">
      {/* Rotating Circle with Icons  >>*/}
      <motion.div
        className="w-full h-full border-2 border-gray-200 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}>
        {/* Icons Around Circle  >>*/}
        <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
          <img
            src="/images/Rotating_Circle_img_1 .png"
            alt="icon1"
            className="w-10 h-10"
          />
        </div>
        <div className="absolute top-1/3 -left-6 transform -translate-y-1/2">
          <img
            src="/images/Rotating_Circle_img_2.png"
            alt="icon2"
            className="w-10 h-10"
          />
        </div>
        <div className="absolute top-2/3 -left-6 transform -translate-y-1/2">
          <img
            src="/images/Rotating_Circle_img_3.png"
            alt="icon3"
            className="w-10 h-10"
          />
        </div>
        <div className="absolute bottom-1/3 -right-6 transform translate-y-1/2">
          <img
            src="/images/Rotating_Circle_img_4.png"
            alt="icon4"
            className="w-10 h-10"
          />
        </div>
        <div className="absolute top-1/3 -right-6 transform -translate-y-1/2">
          <img
            src="/images/Rotating_Circle_img_5.png"
            alt="icon5"
            className="w-10 h-10"
          />
        </div>
        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
          <img
            src="/images/Rotating_Circle_img_6.png"
            alt="icon6"
            className="w-10 h-10"
          />
        </div>
      </motion.div>

      {/* Static Center Text layered above >> */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
        <h2 className="text-xl font-semibold">API Development</h2>
        <p className="text-gray-500 text-sm mt-2">
          APIs that Power Your Digital Ecosystem
        </p>
      </div>
    </div>
  );
}

export default API_Development;
