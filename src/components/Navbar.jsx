"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/projects", label: "Projects" },
    { href: "/company", label: "Company" },
    { href: "/contact", label: "Contact" },
    { href: "/training", label: "Training" },
  ];

  return (
    <nav className="flex justify-between items-center py-4 px-10 bg-white shadow">
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

      {/* Menu */}
      <ul className="flex gap-6  text-gray-700 font-medium">
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
    </nav>
  );
};

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

export default Navbar;
