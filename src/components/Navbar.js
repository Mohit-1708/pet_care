import React from "react";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="text-2xl font-bold text-orange-600">Dr.Doodley</div>

      {/* Menu */}
      <nav className="space-x-6 text-gray-700 font-medium hidden md:flex">
        <Link to="/">Vet Home Visit</Link>
        <Link to="/home-vaccination">Home Vaccination</Link>
        <Link to="#">Online Vet Consultation</Link>
      </nav>

      {/* Emergency Button */}
      <button className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-md font-semibold">
        <Phone size={18} /> Emergency Vet
      </button>
    </header>
  );
}
