"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Mobile App Development",
    description:
      "Outsource mobile development to our global team for user-friendly apps across iOS and Android. We ensure high-quality, secure, and performant applications that accelerate your time-to-market and control costs.",
    icon: "/images/MobileAppDevelopment.png",
  },
  {
    title: "Web Development",
    description:
      "Our offshore web development teams craft responsive, secure websites using PHP, Ruby on Rails, AngularJS, ReactJS, and NodeJS. Outsourcing ensures high-quality, cost-effective solutions tailored to your needs.",
    icon: "/images/Web Development.png",
  },
  {
    title: "UI/UX Design",
    description:
      "Our remote UI/UX designers create engaging, user-centric interfaces. Outsourcing design services ensures aesthetically pleasing and functional products, speeding up development and enhancing user satisfaction.",
    icon: "/images/uiuxdesing.png",
  },
  {
    title: "DevOps",
    description:
      "Outsource DevOps to our global team to streamline software delivery with automation and CI/CD. This approach enhances collaboration, reduces time-to-market, and improves software quality efficiently.",
    icon: "/images/DevOps.png",
  },
  {
    title: "Quality Assurance ",
    description:
      "Our global QA team provides thorough testing services, including manual and automated checks. Outsourcing QA ensures your software is flawless and reliable, reducing risks and meeting user expectations.",
    icon: "/images/Quality Assurance.png",
  },
  {
    title: "Cyber Security",
    description:
      "Protect your business with our offshore cyber security services, covering everything from vulnerability assessments to ongoing monitoring. Outsourcing provides expert security solutions to safeguard your data and infrastructure.",
    icon: "/images/Cyber Security.png",
  },
  {
    title: "Salesforce",
    description:
      "Outsource Salesforce implementation and customization to our skilled team to optimize this leading CRM. We handle setup, integration, and support, efficiently enhancing your sales processes and customer engagement.",
    icon: "/images/Salesforce.png",
  },
  {
    title: "Odoo",
    description:
      "Maximize Odoo’s potential with our offshore team’s implementation, customization, and support services. Outsourcing helps streamline operations and improve efficiency without the overhead of an in-house team.",
    icon: "/images/Odoo.png",
  },
  {
    title: "Magneto",
    description:
      "Our offshore experts customize and optimize Magento e-commerce platforms to drive sales and growth. Outsourcing ensures a secure, high-performance online store tailored to your business needs.",
    icon: "/images/Magneto.png",
  },
  {
    title: "Drupal",
    description:
      "Outsource your Drupal projects to our global team for secure, high-performing CMS solutions. We provide end-to-end services, ensuring your site is well-managed and aligned with your business goals.",
    icon: "/images/Drupal.png",
  },
  {
    title: "Ruby On Rails",
    description:
      "Utilize our offshore Ruby on Rails experts to build scalable, high-performance web applications quickly and efficiently. This approach accelerates development and reduces costs while ensuring robust and secure applications.",
    icon: "/images/Ruby On Rails.png",
  },
  {
    title: "NodeJS Development",
    description:
      "Our offshore NodeJS developers create fast, scalable applications with real-time capabilities. Outsourcing to our team provides efficient, high-performance backends and APIs while allowing you to focus on your core business.",
    icon: "/images/NodeJS Development.png",
  },
  {
    title: "PHP Development",
    description:
      "Outsource your PHP development to our skilled team, which specializes in frameworks like Laravel and Symfony. We deliver dynamic, feature-rich websites and secure, scalable, and budget-friendly applications.",
    icon: "/images/MobileAppDevelopment.png",
  },
  {
    title: "Angular JS And ReactJS",
    description:
      "Leverage our offshore team’s expertise in AngularJS and ReactJS for building fast, interactive web applications. Outsourcing ensures cutting-edge technology and a superior user experience while managing development costs.",
    icon: "/images/Angular JS And ReactJS.png",
  },
];

function DevolopmentServices() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="bg-white p-6 text-center cursor-pointer rounded "
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}>
          {service.icon && (
            <motion.div
              className="mx-auto mb-4 w-12 h-12 relative"
              whileHover={{
                rotate: [0, 10, -10, 6, -6, 0],
                y: [0, -4, 0],
                transition: { duration: 0.6 },
              }}>
              <Image
                src={service.icon}
                alt={service.title}
                fill
                className="object-contain"
              />
            </motion.div>
          )}
          <h3 className="text-lg text-black font-bold mb-2">{service.title}</h3>
          <p className="text-sm text-gray-600">{service.description}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default DevolopmentServices;
