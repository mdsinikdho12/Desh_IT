"use client";
import { motion } from "framer-motion";
import React from "react";
import TechCard from "@/components/Card";
import Layout from "@/components/PageHeader";

//  our projects Data here >>

const projects = [
  {
    imgSrc:
      "/images/Projects_image/3f311e497b5e8b315f3787ac9ca2d28788d37d5d.png",
    title: "Swoop News",
  },
  {
    imgSrc:
      "/images/Projects_image/264ecb1ddb135d9a1fe54e72ed8847ca121cd2b1.png",
    title: "Telefood",
  },
  {
    imgSrc:
      "/images/Projects_image/6ce5469c02ffd88d0a91fe1776d63e53019fff25.png",
    title: "সহজ কুরআন শিক্ষা",
  },
  {
    imgSrc:
      "/images/Projects_image/5c54759f58bc2ad2a39b27ad4dd76efddaf88ad2.png",
    title: "Sleeptot-Baby White Noise",
  },
  {
    imgSrc:
      "/images/Projects_image/42efd8d941fb811760c4b0319865be9eb6e22fad.png",
    title: "SBI General Secure",
  },
  {
    imgSrc:
      "/images/Projects_image/1b29037a454645223c04c10e703a6c1dcb2cf8ae.png",
    title: "Cinebaz",
  },
  {
    imgSrc:
      "/images/Projects_image/ccab7b6796c659888f720467759cd99698e96ee8.png",
    title: "My Tamimi App",
  },
  {
    imgSrc:
      "/images/Projects_image/8bcdf9b301c9db5bad1751239d9704ad9f58272a.png",
    title: "Cinebaz",
  },
  {
    imgSrc:
      "/images/Projects_image/94f678645048ef35a59a18398403b82ad137a984.png",
    title: "Sole Retriever",
  },
  {
    imgSrc:
      "/images/Projects_image/0719cb7a2ce9522bc295b2a5f49b59c3dc8c13a2.png",
    title: "Walliflex",
  },
  {
    imgSrc:
      "/images/Projects_image/49e0cd46905a30ef728fb57db61a126767d8c1a9.png",
    title: "Quiz Battle",
  },
  {
    imgSrc:
      "/images/Projects_image/86b8c1513fbfa79eac238b2c91182f74b211af46.png",
    title: "German Language App",
  },
];

function page() {
  return (
    <Layout pageTitle="Our Projects  ">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}>
            <TechCard
              imgSrc={project.imgSrc}
              title={project.title}
              bgColor="#2196f3"
            />
          </motion.div>
        ))}
      </section>
    </Layout>
  );
}

export default page;
