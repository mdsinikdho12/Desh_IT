import React from "react";

function servicecard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
      <div className=" ">
        <div className="p-6 text-center">
          <h3 className="text-lg font-bold mb-2">Dedicated Team</h3>
          <p className="text-gray-600 text-sm">
            Our dedicated team service offers you a full-time, specialized team
            committed to your project. This model ensures focused expertise,
            quicker turnaround times, and seamless integration with your
            existing processes.
          </p>
        </div>
      </div>

      <div className=" border-l h-[175px] border-[#F50000]">
        <div className="p-6 text-center">
          <h3 className="text-lg font-bold mb-2">Staff Augmentation</h3>
          <p className="text-gray-600 text-sm">
            With our staff augmentation services, you can temporarily extend
            your team with experienced professionals. This approach allows you
            to scale resources flexibly, reduce hiring overhead, and address
            skill gaps efficiently.
          </p>
        </div>
      </div>

      <div className=" border-l h-[175px] border-[#F50000]">
        <div className="p-6 text-center">
          <h3 className="text-lg font-bold mb-2">End-to-End Project</h3>
          <p className="text-gray-600 text-sm">
            We manage your entire project from concept to completion with our
            end-to-end services. This comprehensive approach ensures
            consistency, reduces risks, and delivers a cohesive final product
            aligned with your business objectives.
          </p>
        </div>
      </div>
    </div>
  );
}

export default servicecard;
