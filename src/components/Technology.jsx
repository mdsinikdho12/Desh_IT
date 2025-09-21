"use client";
import { motion } from "framer-motion";

const technologies = [
  {
    title: "Machine Learning",
    description:
      "We integrate machine learning into client projects to automate processes, predict outcomes, and personalize experiences. This technology boosts efficiency and innovation, providing scalable solutions that grow with your business.",
  },
  {
    title: "Blockchain",
    description:
      "Integrate blockchain to create secure, transparent systems that eliminate intermediaries and prevent fraud. Projects benefit from enhanced transaction security and operational efficiency by utilizing decentralized ledgers and smart contracts.",
  },
  {
    title: "Big Data",
    description:
      "Utilize Big Data to analyze large volumes of information and gain actionable insights. Real-time analytics and predictive modeling drive better decision-making and optimize operations, keeping your projects competitive and agile.",
  },
  {
    title: "Internet of Things (IoT)",
    description:
      "Leverage IoT to connect and manage devices, enabling real-time monitoring and automation. This technology enhances operational efficiency and data-driven decision-making, ensuring your projects are smart and future-ready.",
  },
  {
    title: "Natural Language Processing",
    description:
      "Our experts use Natural Language Processing to create intuitive, language-driven applications. By automating tasks like customer support and data processing, we enhance user interactions and improve efficiency in client projects.",
  },
  {
    title: "Facial Recognition",
    description:
      "We implement facial recognition technology to enhance security and personalize user experiences in client projects. This technology offers accurate identification and streamlined authentication, making your applications secure and user-friendly.",
  },
];

export default function AdvancedTech() {
  return (
    <section className="px-4 sm:px-10 py-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-bold text-black mb-4">
          Our Advanced Development Technology
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-10">
          Our advanced development technologies, including AI, machine learning,
          blockchain, and microservices, enable us to deliver innovative,
          future-proof solutions with exceptional efficiency and scalability.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {technologies.map((tech, i) => (
          <motion.div
            key={tech.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className="bg-white p-6  transition">
            <h3 className="text-lg font-bold text-black mb-2">{tech.title}</h3>
            <p className="text-gray-600 mt-7 text-sm">{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
