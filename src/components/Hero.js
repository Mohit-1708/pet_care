import React from "react";
import Icon from '@mdi/react';
import { mdiPaw } from '@mdi/js';
import { MapPin, Hospital, Bold } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 items-center gap-8 px-8 py-16 max-w-6xl mx-auto">
      
      <div className="flex justify-center md:justify-end order-1 md:order-2">
        <img
          src= "/images/doctor.png"
          alt="Vet with pets"
          className="w-120 h-96 object-cover rounded-xl shadow-lg md:mr-6 mt-4 md:mt-0"
        />
      </div>

    
      <div className="order-2 md:order-1">
        
        <div className="flex justify-center md:justify-center">
          <span className="bg-[#C0FCE0B2] text-[#047857] px-3 py-1 rounded-[99px]  text-sm font-roboto font-semibold">
            <span className=" w-[8px] h-[8px] bg-[#047857] rounded-full inline-block mr-2"></span>
            Open 24/7
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl  text-orange-600 mt-4 leading-snug text-center md:text-left" style={{fontFamily: "WidolteBold", fontWeight: 700, fontSize: 32}}>
          Professional Pet Care <br />
          <span className="text-gray-900 font-serif text-2xl"  style={{fontFamily: "WidolteBold", fontWeight: 700, fontSize: 22}}>
            with FREE Consultation Always
          </span>
        </h1>

        {/* Info row */}
        <p className="text-gray-600 font-roboto mt-2 flex flex-col md:flex-row items-center justify-center md:justify-start gap-16">
          <span className="flex items-center gap-1">
            <MapPin size={16} className="text-orange-600" /> In Jayanagar & Yelahanka
          </span>
          <span className="flex items-center gap-1">
            <Hospital size={16} className="text-orange-600" /> Experienced Vets
          </span>
        </p>

        {/* Form */}
        <div className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full border rounded-md px-4 py-2"
          />
          <input
            type="text"
            placeholder="Enter Your Number"
            className="w-full border rounded-md px-4 py-2"
          />
          <button className="w-full bg-orange-600 text-white py-2 rounded-md font-semibold flex items-center justify-center gap-2">
           <Icon path={mdiPaw} size={1} />BOOK NOW
          </button>
        </div>

        {/* Ratings */}
       <p className="mt-3 text-sm text-gray-600 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
   4.9 ⭐ in <FcGoogle size={16} />  Ratings | 70,000+ Happy Pet Parents
</p>
      </div>
    </section>
  );
}
