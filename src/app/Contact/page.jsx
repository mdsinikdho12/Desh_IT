"use client";
import { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Message Sent!");
  };

  return (
    <section className={`${poppins.className} bg-white py-10`}>
      {/* Header Section >>*/}
      <div className="bg-[#FFF5F5] py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left Side Text >> */}
          <div>
            <h2 className="text-4xl font-bold text-[#020F40] mb-4">
              Get in touch with Us
            </h2>
            <p className="text-gray-500 leading-relaxed">
              Why I say old chap that is spiffing, young delinquent in my flat
              bloke buggered what a plonker.
            </p>
          </div>

          {/* Right Side Image >> */}
          <div className="flex justify-center md:justify-end">
            <img
              src="images/Contact.png"
              alt="Contact"
              className="w-80 md:w-[400px]"
            />
          </div>
        </div>
      </div>

      {/* Contact Info + Form  >>*/}
      <div className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Side */}
        <div>
          <div className="mb-6">
            <h4 className="font-semibold text-gray-700">Our Location</h4>
            <p className="text-gray-500 text-sm">
              D/36, Block-E Lalmatia, Dhaka <br />
              Dhaka 1207, Bangladesh
            </p>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold text-gray-700">Say Hello</h4>
            <p className="flex items-center text-gray-700 hover:text-orange-600 gap-2">
              <FaPhoneAlt /> +880 181 332 0587
            </p>
            <p className="flex items-center text-gray-500 hover:text-orange-600 gap-2 mt-2">
              <FaEnvelope /> info@dshit-bd.com
            </p>
          </div>
        </div>

        {/* Right Side - Form  >>*/}
        <form
          onSubmit={handleSubmit}
          className={`${poppins.className} p-6 space-y-4  rounded-xl bg-white`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#FDF8F8] rounded-lg focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#FDF8F8] rounded-lg focus:outline-none"
            />
          </div>

          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#FDF8F8] rounded-lg focus:outline-none"
          />

          <textarea
            name="comment"
            placeholder="Your Comment"
            rows="4"
            value={formData.comment}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#FDF8F8] rounded-lg focus:outline-none"></textarea>

          <button
            type="submit"
            className="bg-gradient-to-r from-[#FA7470] to-[#FA9370] shadow-md text-white px-6 py-2 rounded-lg transition duration-300">
            Send Your Message
          </button>
        </form>
      </div>
    </section>
  );
}
