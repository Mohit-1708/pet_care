import React from "react";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import Vector from "../assets/icons/vector.svg";
import icon from "../assets/icons/callingIcon.png"

export default function Navbar() {
  return (
    <header className="shadow-md">
     
      <div className="hidden md:flex items-center justify-center bg-gray-100 py-2 px-4 relative">
       
        <div className="flex gap-1 absolute left-4">
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        </div>

        {/* Address text center */}
        <div className="bg-gray-200 text-gray-700 px-6 py-1 rounded-md text-sm font-medium">
          Dr Doodley
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-8 py-4 bg-white">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-4">
          <Menu size={26} className="cursor-pointer text-gray-700 md:hidden" />
          <img src={Vector} width={140} height={22} alt="Dr Doodley Logo" />
        </div>

        {/* Menu (hidden on mobile) */}
        <nav className="space-x-6 text-gray-700 font-medium hidden md:flex">
          <Link to="/">Vet Home Visit</Link>
          <Link to="/home-vaccination">Home Vaccination</Link>
          <Link to="#">Online Vet Consultation</Link>
        </nav>

       
        {/* Emergency Button */}
<button className="flex items-center gap-2 bg-[#DD7542] text-white px-4 py-2 rounded-md font-semibold">
  <img src={icon} alt="Calling Icon" className="w-5 h-5" />
  Emergency Vet
</button>

      </div>
    </header>
  );
}
