"use client";
import React from "react";
import { motion } from "framer-motion";
import TechCard from "@/components/Card";
import Layout from "@/components/PageHeader";

// products all data here >>
const products = [
  {
    imgSrc: "/images/Products_image/Group 1000002605.jpg",
    title: "Gym Management System",
  },
  {
    imgSrc: "/images/Products_image/Group 1000002604.png",
    title: "Tracker",
  },
  {
    imgSrc: "/images/Products_image/Group 1000002600.jpg",
    title: "Parcel Delivery App",
  },
  {
    imgSrc: "/images/Products_image/Group 1000002603.jpg",
    title: "School Management System",
  },
  {
    imgSrc: "/images/Products_image/Group 1000002602.jpg",
    title: "Inventory Management System",
  },
  {
    imgSrc: "/images/Products_image/Logistics Management System.png",
    title: "Logistics Management System",
  },
];

const page = () => {
  return (
    <Layout pageTitle="Our Product  ">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 py-8">
        {products.map((product, index) => (
          <motion.div
            key={product.title}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}>
            <TechCard
              imgSrc={product.imgSrc}
              title={product.title}
              bgColor="#2196f3"
            />
          </motion.div>
        ))}
      </section>
    </Layout>
  );
};

export default page;
