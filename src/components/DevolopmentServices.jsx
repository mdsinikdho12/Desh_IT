import React from "react";
import Image from "next/image";

function DevolopmentServices() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition">
      {icon && (
        <div className="mx-auto mb-4 w-12 h-12 relative">
          <Image src={icon} alt={title} fill className="object-contain" />
        </div>
      )}
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

export default DevolopmentServices;
