
import React from "react";
import Icon from '@mdi/react';
import { mdiPaw } from '@mdi/js';
import { FcGoogle } from "react-icons/fc";
import VaccServices from "./VaccServices";
import VaccServicesSection from "./vaccServiceSection";
import vaccination from "../assets/images/vaccination.jpg";
import Footer from "./Footer";

export default function Home() {
  return (
    <>



    <section className="grid md:grid-cols-2 items-center gap-8 px-8 py-16 max-w-6xl mx-auto">
      
      <div className="flex justify-center md:justify-end order-1 md:order-2">
    <img
      src={vaccination}
      alt="Vet with pets"
      className="w-full h-60 sm:h-72 md:w-[500px] md:h-96 object-cover rounded-xl shadow-lg md:mr-6 mt-2 md:mt-0"
    />
  </div>

    
      <div className="order-2 md:order-1">
        
        <div className="flex justify-center md:justify-center">
          <span className="bg-[#DD7542] text-white px-3 py-1 rounded-[99px]  text-sm font-roboto font-semibold">
           
            Complimentary General Checkup 
          </span>
        </div>

      {/* Heading */}
<h1
  className="text-3xl mt-4 leading-snug text-center md:text-left"
  style={{ fontFamily: "WidolteBold", fontWeight: 700, fontSize: 32 }}
>
  <span className="text-[#DD7542]">Vaccinate</span>{" "}
  <span
    className="text-[#5C372D]"
    style={{ fontFamily: "WidolteBold", fontWeight: 700, fontSize: 22 }}
  >
    for a
  </span>
  <br />
  <span className="text-[#DD7542]">
    Healthier Tomorrow
  </span>
</h1>


       
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
          <button className="w-full bg-[#DD7542] text-white py-2 rounded-md font-semibold flex items-center justify-center gap-2">
           <Icon path={mdiPaw} size={1} />BOOK NOW
          </button>
        </div>

        {/* Ratings */}
       <p className="mt-3 text-sm text-[#5C372D] text-center md:text-left flex items-center justify-center md:justify-start gap-2">
   4.9 ⭐ in <FcGoogle size={16} />  Ratings | 70,000+ Happy Pet Parents
</p>
      </div>
    </section>
      <VaccServices/>
      <VaccServicesSection/>
      <Footer/>
    </>
  );
}
