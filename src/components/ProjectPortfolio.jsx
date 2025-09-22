"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

function ProjectPortfolio() {
  const images = ["Rectangle 1.png", "Rectangle 2.png", "Rectangle 3.png"];

  return (
    <section className="px-4 sm:px-10 py-10 bg-gray-50">
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-8 text-black">
        Our Projects & Portfolio
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="rounded overflow-hidden shadow hover:shadow-md transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: i * 0.2, duration: 0.6, ease: "easeOut" }}>
            <Image
              src={`/images/protfolio_image/${img}`}
              width={357}
              height={380}
              alt={`Project ${i + 1}`}
              className="w-full h-auto"
              priority={i === 0}
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <Link
          href="/Read more case studies"
          aria-label="Read more case studies"
          className="w-[200px] text-center font-light p-2 rounded text-white bg-orange-600 hover:bg-orange-700 transition">
          Read more case studies
        </Link>
      </div>
    </section>
  );
}

export default ProjectPortfolio;
