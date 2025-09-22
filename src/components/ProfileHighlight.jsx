"use client";

export default function ProfileHighlight() {
  return (
    <div className="bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left >> Profile Section */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-4">
          {/* Profile Image  >>*/}
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-300">
            <img
              src="/images/Fuad Bin Omar, COO.png"
              alt="Fuad Bin Omar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content >>*/}
          <div className="flex flex-col justify-center">
            <p className="text-lg font-semibold text-white">
              Do not suffer novices; hire a skilled team!
            </p>
            <p className="mt-2 text-white">Fuad Bin Omar, COO</p>

            <a
              href="#"
              className="mt-4 inline-flex items-center gap-2 text-orange-500 hover:text-orange-600 transition">
              <img
                src="/images/BookCalender.png"
                alt="Book Calendar Icon"
                className="w-5 h-5"
              />
              Book My Calendar
            </a>
          </div>
        </div>

        {/* Right: Stats Section >>*/}
        <div className="flex justify-around md:justify-between text-center">
          <div>
            <h2 className="text-4xl font-semibold text-orange-500">16</h2>
            <p className="text-sm text-white mt-1">Years of Experience</p>
          </div>
          <div>
            <h2 className="text-4xl font-semibold text-orange-500">365</h2>
            <p className="text-sm text-white mt-1">Deliver Projects</p>
          </div>
          <div>
            <h2 className="text-4xl font-semibold text-orange-500">25</h2>
            <p className="text-sm text-white mt-1">Countries Served</p>
          </div>
        </div>
      </div>
    </div>
  );
}
