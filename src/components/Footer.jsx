import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Footer = () => {
  return (
    <footer className={`${poppins.className} bg-pink-50 text-black py-10`}>
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Links Section >> */}
        <div>
          <h3 className="font-semibold mb-4">Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-orange-600">
                Company
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-600">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-600">
                Projects
              </a>
            </li>
          </ul>
        </div>

        {/* Training Section  >>*/}
        <div>
          <h3 className="font-semibold mb-4">Training</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-orange-600">
                Flutter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-600">
                Mern Stack
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-600">
                Laravel
              </a>
            </li>
          </ul>
        </div>

        {/* Address Section  >>*/}
        <div>
          <h3 className="font-semibold mb-4">Our Address</h3>
          <p>D/36, Block-E Lalmatia, Dhaka 1207, Bangladesh</p>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="text-gray-600 hover:text-orange-600">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-600 hover:text-orange-600">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Newsletter Section >> */}
        <div>
          <h3 className="font-semibold mb-4">Get In Touch</h3>
          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full p-2 mb-2 border border-gray-500 outline-0 focus:border-0 rounded"
          />
          <button className="w-full bg-linear-to-r from-[#FA7470] to-[#FA9370] text-white py-2 rounded hover:bg-[#FA9370]">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Bottom  >>*/}
      <div className="text-center text-gray-500 text-sm mt-6">
        © 2023 All Rights Reserved Design by{" "}
        <a href="#" className="hover:text-orange-600 hover:underline">
          DeshIT-BD
        </a>
      </div>
    </footer>
  );
};

export default Footer;
