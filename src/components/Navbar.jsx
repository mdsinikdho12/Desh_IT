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
    { href: "/company", label: "Company" },
    { href: "/contact", label: "Contact" },
    { href: "/training", label: "Training" },
  ];

  return (
    <nav className="bg-white shadow px-6 sm:px-10 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="font-bold text-xl text-blue-900">
          <Image
            src="/images/logo.png"
            alt="DeshIT Logo"
            width={120}
            height={40}
            priority
          />
        </div>

        {/* Hamburger Icon */}
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

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-6 text-gray-700 font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:text-red-500 ${
                  pathname === link.href ? "text-red-500" : ""
                }`}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="sm:hidden mt-4 flex flex-col gap-4 text-gray-700 font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block hover:text-red-500 ${
                  pathname === link.href ? "text-red-500" : ""
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

// const PageHeader = ({ title }) => {
//   return (
//     <div className="relative bg-[#fff9f9] py-16 text-center">
//       {/* background elements */}
//       <div className="absolute top-0 left-0 w-40 h-40 bg-red-100 rounded-full opacity-40 -z-10" />
//       <div className="absolute bottom-0 right-0 w-56 h-56 bg-red-100 rounded-full opacity-30 -z-10" />

//       {/* Title */}
//       <h1 className="text-3xl md:text-4xl font-bold text-blue-900">{title}</h1>
//       <p className="text-gray-600 mt-2">
//         <Link href="/" className="hover:underline">
//           Home
//         </Link>{" "}
//         › {title}
//       </p>
//     </div>
//   );
// };

// const Layout = ({ children, pageTitle }) => {
//   return (
//     <>
//       <Navbar />
//       <PageHeader title={pageTitle} />
//       <main className="px-6 md:px-12 lg:px-20 py-10">{children}</main>
//     </>
//   );
// };
