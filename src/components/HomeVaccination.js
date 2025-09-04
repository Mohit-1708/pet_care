
import React from "react";
import Navbar from "./Navbar"; // adjust the path if Navbar is in another folder
import { MapPin, Hospital, PawPrint } from "lucide-react";

export default function HomeVaccination() {
  return (
    <div className="font-sans">
        <section className="grid md:grid-cols-2 items-center gap-8 px-8 py-16 max-w-6xl mx-auto">
      
      <div className="flex justify-center md:justify-end order-1 md:order-2">
        <img
          src="https://www.shutterstock.com/image-photo/happy-male-vet-doctor-uniform-600nw-2485692303.jpg"
          alt="Vet with pets"
          className="w-80 h-96 object-cover rounded-xl shadow-lg md:mr-6 mt-4 md:mt-0"
        />
      </div>

    
      <div className="order-2 md:order-1">
        
        <div className="flex justify-center md:justify-center">
          <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
            Open 24/7
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-bold font-mono text-orange-600 mt-4 leading-snug text-center md:text-left">
          Vacination for a  <br />
          <span className="text-gray-900 font-serif text-2xl">
            Healthier Tommorow
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
          <button className="w-full bg-orange-600 text-white py-2 rounded-md font-semibold flex items-center justify-center gap-2">
            <PawPrint size={18} /> BOOK NOW
          </button>
        </div>

        {/* Ratings */}
        <p className="mt-3 text-sm text-gray-600 text-center md:text-left">
          ⭐ 4.9 in Ratings | 70,000+ Happy Pet Parents
        </p>
      </div>
    </section>
    </div>
    
  );
}
