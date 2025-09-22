"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const PageHeader = ({ title }) => {
  return (
    <div className="relative bg-[#fff9f9] py-16 text-center">
      {/* Background elements  >>*/}
      <div className="absolute top-0 left-0 w-40 h-40 bg-red-100 rounded-full opacity-40 -z-10" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-red-100 rounded-full opacity-30 -z-10" />

      {/* Title >> */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900">{title}</h1>
      <p className="text-gray-600 mt-2">
        <Link href="/" className="hover:underline text-blue-600">
          Home
        </Link>
        <span className="mx-2">›</span>
        {title}
      </p>
    </div>
  );
};

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <PageHeader title={pageTitle} />
      <main className="px-6 md:px-12 lg:px-20 py-10">{children}</main>
    </>
  );
};

export default Layout;
