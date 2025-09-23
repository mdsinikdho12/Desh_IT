"use client";
import React from "react";
import Layout from "@/components/PageHeader";
import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const DeshiITBDIntro = () => {
  return (
    <Layout pageTitle="Company">
      {/* Company Intro part  >>*/}
      <section className="text-gray-800 px-6 overflow-x-hidden py-12 md:px-20">
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}>
            <h1 className="text-4xl font-bold text-[#020F40]">DeshiITBD</h1>
            <p className="mt-4 text-xl tracking-[4px] font-medium text-orange-600">
              SIMPLIFYING COMPLEXITY THROUGH TECHNOLOGY
            </p>
            <p className={`${poppins.className} mt-6 text-gray-600`}>
              We, DeshITbd is a mobile application development startup in
              Bangladesh. We can develop apps from sketch to workable apps and
              bring them to the marketplace like Google Play. We have a
              full-stack mobile application development team consisting of
              system analysts, programmers, testers, deployment specialists, and
              database engineers. We have already launched several apps
              successfully. We also have some software products and our clients
              are using them using satisfaction. You will find our product here
              and project here.
            </p>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <img
              src="/images/8c777f8410b8cb4e74fff973b75154398321f969.png"
              alt="DeshiITBD"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>

        {/* Mission part >> */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}>
            <h2 className="text-4xl font-bold text-[#020F40] mb-4">Mission</h2>
            <p className={`${poppins.className} mt-6 text-gray-600`}>
              Our mission is to transform ideas into digital products and enable
              organizations to leverage technology for betterment. Our priority
              is to deliver impactful digital solutions with superior user
              experience. We build such a solution that can accelerate the
              growth of your business.
            </p>
          </motion.div>

          <motion.div
            className="flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>
            <img
              src="/images/eca76405cb9f26ca6c0ec58033d141620f23b856.png"
              alt="Mission"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* How We Work part >> */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full py-16 bg-gradient-to-r from-[#FA7470] to-[#FA9370]">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            How We Work
          </h2>
          <p
            className={`${poppins.className} text-white text-left mb-6 text-base md:text-lg leading-relaxed`}>
            We believe in agile development. We manage our projects by following
            Scrum, the most popular widely practiced agile approach. Delivering
            working applications on budget, and on time is always our concern
            and Scrum enables us to manage our projects in such a way. Scope of
            flexibility and collaboration enable us to manage the resources
            effectively and deliver the quality product.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#FA7470] font-light px-6 py-2 rounded-full hover:bg-gray-100 transition">
            Free Consultation
          </motion.button>
        </div>
      </motion.section>
    </Layout>
  );
};

export default DeshiITBDIntro;
