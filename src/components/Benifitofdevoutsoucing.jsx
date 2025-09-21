"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "Cost Efficiency",
    description:
      "Outsourcing software development allows you to significantly cut costs by leveraging talent from regions with lower labor costs. You save on expenses like salaries, benefits, and office space, enabling you to allocate resources more effectively.",
    icon: "/images/store.png",
  },
  {
    title: "Access to Expertise",
    description:
      "By outsourcing, you tap into a global pool of experts who bring specialized skills and experience to your project. Whether you need cutting-edge technology, niche expertise, or industry-specific knowledge, outsourcing provides access to talent that may not be readily available in-house.",
    icon: "/images/store.png",
  },
  {
    title: "Scalability",
    description:
      "Outsourcing offers the flexibility to scale your development team up or down based on the demands of your project. Whether you’re facing a tight deadline or adjusting to a changing market, you can easily adapt without the complexities of hiring or downsizing permanent staff.",
    icon: "/images/store.png",
  },
  {
    title: "Faster Time to Market",
    description:
      "With a dedicated outsourced team, you can accelerate your project timelines. Experienced developers can focus on your project full-time, ensuring faster completion and allowing you to bring your product to market quicker than if relying solely on in-house resources.",
    icon: "/images/store.png",
  },
  {
    title: "Focus on Core Business",
    description:
      "Outsourcing lets your internal team concentrate on core business activities, such as strategy, marketing, and customer relations. While the outsourced team handles the technical aspects, your in-house team can focus on what they do best, driving growth and innovation.",
    icon: "/images/store.png",
  },
  {
    title: "Risk Management",
    description:
      "Outsourcing can help mitigate risks associated with software development. Experienced outsourcing partners are familiar with common project challenges and can navigate them effectively, reducing the likelihood of costly mistakes and ensuring a smoother development process.",
    icon: "/images/store.png",
  },
];

function Benifitofdevoutsoucing() {
  return (
    <div className="bg-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Benefits of Outsourcing Software Development
      </h2>
      <p className="text-center text-gray-600">
        Outsourcing software development cuts costs, gives you access to expert
        skills, and offers flexibility. It accelerates project timelines,
        <br />
        minimizes risks, and introduces new global ideas to your work.
      </p>

      <div className="grid grid-cols-1 mt-10 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className="p-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}>
            <div className="flex items-start gap-4">
              {/* Icon */}
              <div className="w-12 h-12 relative shrink-0">
                <Image
                  src={benefit.icon}
                  alt={benefit.title}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Benifitofdevoutsoucing;
