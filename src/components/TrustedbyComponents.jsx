import React from "react";
import Image from "next/image";

function TrustedbyComponents() {
  return (
    <div className="py-12 bg-white">
      <h2 className="text-center text-lg md:text-xl font-bold mb-8">
        Trusted By 100+ Companies including
      </h2>

      {/* Logo Grid */}
      <div className="flex justify-center items-center gap-8 flex-wrap">
        <Image src="/images/undp.png" alt="UNDP" width={100} height={50} />
        <Image src="/images/itc.png" alt="ITC" width={100} height={50} />
        <Image
          src="/images/telenor.png"
          alt="Telenor"
          width={100}
          height={50}
        />
        <Image src="/images/Nokia.png" alt="Nokia" width={100} height={50} />
        <Image src="/images/vivo.png" alt="Vivo" width={100} height={50} />
      </div>
    </div>
  );
}

export default TrustedbyComponents;
