"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/projects", label: "Projects" },
    { href: "/Company", label: "Company" },
    { href: "/Contact", label: "Contact" },
    { href: "/Training", label: "Training" },
  ];

  return (
    <nav className="bg-white shadow px-6 sm:px-10 py-4">
      <div className="flex justify-between items-center">
        {/* Logo  >>*/}
        <div className="font-bold text-xl text-blue-900">
          <Image
            src="/images/logo.png"
            alt="DeshIT Logo"
            width={120}
            height={40}
            priority
          />
        </div>

        {/* Hamburger Icon  >>*/}
        <button
          className="sm:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24">
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu  >>*/}
        <ul className="hidden sm:flex gap-6 text-gray-700 font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:text-orange-600 ${
                  pathname === link.href ? "hover:text-orange-600" : ""
                }`}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu >> */}
      {isOpen && (
        <ul className="sm:hidden mt-4 flex flex-col gap-4 text-gray-700 font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block hover:text-orange-600 ${
                  pathname === link.href ? "hover:text-orange-600" : ""
                }`}
                onClick={() => setIsOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
