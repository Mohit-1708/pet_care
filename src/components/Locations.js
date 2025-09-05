import React from "react";
import { MapPin, Star } from "lucide-react";
import pets from "../assets/images/pets.png";
import dclocation from "../assets/images/dclocation.png";
import icon from "../assets/icons/callingIcon.png";

export default function Locations() {
  return (
    <section className="py-10 px-4 sm:px-8 bg-gradient-to-b from-gray-50 to-[#DC7441]">
      <div className="max-w-6xl mx-auto text-center">
        {/* Pets Image */}
        <div className="flex justify-end mb-4">
          <img
            src={pets}
            alt="Pets"
            width={154}
            height={86}
            className="opacity-50"
          />
        </div>

        {/* Heading */}
        <h2 className="text-3xl font-bold font-mono text-[#5C372D] mb-10">
          Locations of{" "}
          <span className="text-[#DD7542]">Dr Doodley</span> in Bengaluru
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2].map((loc) => (
            <div
              key={loc}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Image wrapper */}
              <div className="relative">
                <img
                  src={dclocation}
                  alt="Clinic"
                  className="h-48 w-full object-cover"
                />

                {/* Open 24/7 badge */}
                <div className="absolute top-2 right-2 bg-[#C0FCE0B2] text-[#047857] px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                  <span className="w-2 h-2 bg-[#047857] rounded-full mr-2"></span>
                  Open 24/7
                </div>

                {/* Rating */}
                <div className="absolute bottom-2 right-2 bg-white px-2 py-1 rounded-full shadow flex items-center text-sm font-semibold">
                  <Star size={14} className="text-yellow-500 mr-1 fill-yellow-500" />
                  4.9
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-[#5C372D] mb-4 text-left">
                  Dr Doodley Pet Hospital - Yelahanka
                </h3>

                {/* Buttons row */}
                <div className="flex flex-row lg:flex-col gap-3">
 <button className="flex items-center justify-center gap-2 bg-[#DD7542] text-white px-4 py-2 rounded-md font-semibold">
  <img src={icon} alt="Calling Icon" className="w-5 h-5" />
  CALL NOW
</button>

  <button className="flex items-center justify-center gap-2 flex-1 border border-[#DD7542] text-[#DD7542] py-2 rounded-md">
    <MapPin size={18} /> GET DIRECTION
  </button>
</div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
