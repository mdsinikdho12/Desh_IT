"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const icons = [
  { top: 30, left: 30, src: "/images/i1.png" },
  { top: 30, left: 180, src: "/images/i2.png" },
  { top: 30, left: 300, src: "/images/i3.png" },
  { top: 30, left: 420, src: "/images/i4.png" },
  { top: 80, left: 480, src: "/images/i5.png" },
  { top: 120, left: 90, src: "/images/i6.png" },
  { top: 120, left: 180, src: "/images/i7.png" },
  { top: 120, left: 300, src: "/images/i8.png" },
  { top: 120, left: 420, src: "/images/i9.png" },
  { top: 220, left: 80, src: "/images/i10.png" },
  { top: 230, left: 200, src: "/images/i11.png" },
  { top: 230, left: 360, src: "/images/i12.png" },
  { top: 230, left: 500, src: "/images/i13.png" },
  { top: 230, left: 680, src: "/images/i14.png" },
];

export default function Workflow() {
  return (
    <div className="flex flex-col items-center p-6 sm:p-10">
      <h2 className="text-lg sm:text-xl font-bold mb-2 text-center">
        Outsourced Software Development Workflow
      </h2>
      <p className="text-sm sm:text-base text-center max-w-2xl mb-10 text-gray-600">
        Our Strategic Development Plan streamlines project execution, enhances
        collaboration, and ensures timely delivery with flexible scaling—all
        while maintaining high-quality standards.
      </p>

      {/*  scroll wrapper >> */}
      <div className="w-full flex justify-center overflow-x-auto sm:overflow-visible">
        <motion.div
          className="relative w-[720px] sm:w-full max-w-4xl h-[400px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}>
          {/* Path Draw Animation   >>*/}
          <motion.svg
            className="absolute top-0 left-0 w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="#e6e600"
            strokeWidth="2">
            <motion.path
              d="M 50 50 H 300 H 500 V 150 H 100 V 250 H 450 H 700"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={{
                hidden: { pathLength: 0 },
                visible: { pathLength: 1 },
              }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </motion.svg>

          {/* Animated Icons  >>*/}
          {icons.map((icon, i) => (
            <motion.div
              key={i}
              className="absolute flex items-center justify-center w-12 h-12 sm:w-10 sm:h-10 rounded-full"
              style={{ top: icon.top, left: icon.left }}
              variants={{
                hidden: { opacity: 0, scale: 0 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ delay: i * 0.2, duration: 0.5, type: "spring" }}>
              <Image
                src={icon.src}
                alt={`workflow${i}`}
                width={48}
                height={48}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
