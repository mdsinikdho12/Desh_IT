"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Fuad Bin Omar, COO",
    title: "Founder, Volaride",
    location: "San Francisco Bay Area, USA",
    project: "Build iOS",
    image: "/images/Fuad Bin Omar, COO.png",
    quote:
      "Everything went extremely well. My project was fairly complex and required Nascenia to investigate new technologies/APIs. They succeeded with flying colors and I can't wait to get started on another project. I was very impressed with their communication and willingness to move directions slightly. The code produced was excellent. Fantastic team!",
  },
  {
    name: "Patrick Sockwell",
    title: "Founder, Volaride",
    location: "San Francisco Bay Area, USA",
    project: "Build iOS",
    image: "/images/C1.png",
    quote:
      " My project was fairly complex and required Nascenia to investigate new technologies/APIs. They succeeded with flying colors and I can't wait to get started on another project. I was very impressed with their communication and willingness to move directions slightly. The code produced was excellent. Fantastic team!",
  },
];

export default function ClientTestimonialSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="px-4 sm:px-10 py-12 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-black mb-2">
          Clients Testimonials
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-8">
          We Measure Success Through Client Satisfaction.{" "}
          <b>Words from Our Clients</b>
        </p>

        {/* Image  >>*/}
        <div className="flex justify-center mb-6">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={120}
            height={120}
            className="rounded-lg border-dotted border-gray-300"
          />
        </div>

        {/* Animated Testimonial >> */}
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className=" border border-dotted border-gray-700 rounded-lg p-6  text-left text-gray-700 text-sm sm:text-base mb-6">
            <p className="leading-relaxed">“{testimonial.quote}”</p>
          </motion.div>
        </AnimatePresence>

        {/* Attribution  >>*/}
        <p className="text-sm text-gray-600">
          <span className="font-semibold text-gray-800">
            {testimonial.name}
          </span>
          , {testimonial.title}.
          <br />
          {testimonial.location}. Project: {testimonial.project}
        </p>
      </div>
    </section>
  );
}
