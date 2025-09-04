import React from "react";
import { Phone, MapPin } from "lucide-react";
import pets from "../assets/images/pets.png";
import dclocation from "../assets/images/dclocation.png";

export default function Locations() {
  return (
    <section className="py-16 px-8 bg-gradient-to-b from-gray-50 to-orange-400">
      <div className="max-w-6xl mx-auto text-center">
       
        <div className="flex justify-end mb-4">
          <img
            src={pets}
            alt="Pets"
            width={154}
            height={86}
            className="opacity-30"
          />
        </div>
        <h2 className="text-3xl font-bold font-mono text-gray-900 mb-10">
          Locations of <span className="text-orange-600">Dr Doodley</span> in Bengaluru
        </h2>

        <div className="px-4 sm:px-30 md:px-32">
  <div className="grid md:grid-cols-2 gap-6">
    {[1, 2].map((loc) => (
      <div
        key={loc}
        className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
      >
        <img
          src={dclocation}
          alt="Clinic"
          className="h-48 w-full object-cover"
        />
        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            Dr Doodley Pet Hospital - Yelahanka
          </h3>
          <button className="flex items-center justify-center gap-2 w-full bg-orange-600 text-white py-2 rounded-md mb-3">
            <Phone size={18} /> CALL NOW
          </button>
          <button className="flex items-center justify-center gap-2 w-full border border-orange-600 text-orange-600 py-2 rounded-md">
            <MapPin size={18} /> GET DIRECTION
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </section>
  );
}
