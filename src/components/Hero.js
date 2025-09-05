import React from "react";
import Icon from "@mdi/react";
import { mdiPaw } from "@mdi/js";
import icon from "../assets/icons/Location.png";
import { FcGoogle } from "react-icons/fc";
import icon2 from "../assets/icons/frame.png";

export default function Hero() {
  return (
   <section className="grid md:grid-cols-2 items-center gap-8 px-4 sm:px-6 py-6 max-w-[90rem] mx-auto bg-gray-50">
  
  {/* Image */}
  <div className="flex justify-center md:justify-end order-1 md:order-2">
    <img
      src="/images/doctor.png"
      alt="Vet with pets"
      className="w-full h-60 sm:h-72 md:w-[500px] md:h-96 object-cover rounded-xl shadow-lg md:mr-6 mt-2 md:mt-0"
    />
  </div>



      {/* Content */}
      <div className="order-2 md:order-1 flex flex-col items-center">
        {/* Open 24/7 Badge */}
        <div className="flex justify-center">
          <span className="bg-[#C0FCE0B2] text-[#047857] px-3 py-1 rounded-[99px] text-sm font-roboto font-semibold">
            <span className="w-[8px] h-[8px] bg-[#047857] rounded-full inline-block mr-2"></span>
            Open 24/7
          </span>
        </div>

        {/* Heading */}
        <h1
          className="text-3xl text-[#DD7542] mt-3 leading-snug text-center"
          style={{ fontFamily: "WidolteBold", fontWeight: 700, fontSize: 32 }}
        >
          Professional Pet Care <br />
          <span
            className="text-[#5C372D] font-serif text-2xl"
            style={{ fontFamily: "WidolteBold", fontWeight: 700, fontSize: 22 }}
          >
            with FREE Consultation Always
          </span>
        </h1>

        {/* Info Row */}
        <div className="text-[#5C372D] font-roboto mt-3 flex flex-wrap items-center justify-center gap-6">
          {/* Location */}
          <span className="flex items-center gap-1">
            <img src={icon} alt="Location" className="w-6 h-6 object-contain" />
            In Jayanagar & Yelahanka
          </span>

          {/* Experienced Vets */}
          <span className="flex items-center gap-1">
            <img src={icon2} alt="Hospital" className="w-8 h-8 object-contain" />
            Experienced Vets
          </span>
        </div>

        {/* Form */}
        <div className="mt-4 space-y-3 w-full max-w-md">
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
          <button className="w-full bg-[#DD7542] text-white py-2 rounded-md font-semibold flex items-center justify-center gap-2">
            <Icon path={mdiPaw} size={1} /> BOOK NOW
          </button>
        </div>

        {/* Ratings */}
        <p className="mt-3 text-sm text-[#5C372D] text-center flex items-center justify-center gap-1">
  4.9 ⭐ in <FcGoogle size={14} /> Ratings | 70,000+ Happy Pet Parents
</p>

      </div>
    </section>
  );
}
