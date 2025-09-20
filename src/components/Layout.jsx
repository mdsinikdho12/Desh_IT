import Navbar from "@/components/Navbar";
import Link from "next/link";
const PageHeader = ({ title }) => {
  return (
    <div className="relative bg-[#fff9f9] py-16 text-center">
      {/* background elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-red-100 rounded-full opacity-40 -z-10" />
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-red-100 rounded-full opacity-30 -z-10" />

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900">{title}</h1>
      <p className="text-gray-600 mt-2">
        <Link href="/" className="hover:underline">
          Home
        </Link>{" "}
        › {title}
      </p>
    </div>
  );
};
