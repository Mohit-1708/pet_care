import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Vector from "../assets/icons/vector.svg";
import icon from "../assets/icons/callingIcon.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="shadow-md">
      {/* Top bar */}
      <div className="hidden md:flex items-center justify-center bg-gray-100 py-2 px-4 relative">
        <div className="flex gap-1 absolute left-4">
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
          <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
        </div>
        <div className="bg-gray-200 text-gray-700 px-6 py-1 rounded-md text-sm font-medium">
          Dr Doodley
        </div>
      </div>
{/* Main Navbar */}
<div className="flex items-center px-4 sm:px-6 md:px-8 py-4 bg-white">
  {/* Left: Hamburger + Logo */}
  <div className="flex items-center gap-3">
    <button
      onClick={() => setOpen(!open)}
      className="md:hidden text-gray-700"
    >
      {open ? <X size={24} /> : <Menu size={24} />}
    </button>
    <img
      src={Vector}
      alt="Dr Doodley Logo"
      className="w-28 sm:w-32 md:w-36 h-auto"
    />
  </div>

  {/* Emergency Button */}
  <button className="flex items-center gap-1 sm:gap-2 bg-[#DD7542] text-white px-2 sm:px-3 md:px-4 py-2 rounded-md font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap ml-auto">
    <img src={icon} alt="Calling Icon" className="w-4 h-4 sm:w-5 sm:h-5" />
    Emergency Vet
  </button>
</div>


      {/* Mobile Dropdown Menu with animation */}
      <div
        className={`md:hidden bg-gray-50 px-6 flex flex-col gap-4 text-gray-700 font-medium overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <Link to="/" onClick={() => setOpen(false)}>
          Vet Home Visit
        </Link>
        <Link to="/home-vaccination" onClick={() => setOpen(false)}>
          Home Vaccination
        </Link>
        <Link to="#" onClick={() => setOpen(false)}>
          Online Vet Consultation
        </Link>
      </div>
    </header>
  );
}
