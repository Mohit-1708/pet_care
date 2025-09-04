import React from "react";
import Vector from "../assets/icons/vector.svg";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20">
      {/* Main footer content */}
      <div className="py-10 px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left side */}
        <div>
          <img src={Vector} width={140} height={22} alt="Doodley Logo" />
          <p className="mt-2 text-lg font-semibold">
            <span className="text-orange-600">Contact</span>{" "}
            <span className="text-gray-600">Us</span>
          </p>

          <div className="mt-4 space-y-1 text-gray-600">
            <p>📧 care@doodley.in</p>
            <p>📞 +91 99023 56133</p>
          </div>
        </div>

        {/* Right side */}
        <div>
          <h3 className="font-semibold text-orange-600">
            Useful <span className="text-gray-600">Links</span>
          </h3>
          <ul className="mt-2 text-gray-600 space-y-1 text-sm">
            <li>Terms and Conditions</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Support</li>
          </ul>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="bg-orange-900 text-white text-center py-3 text-sm">
        © {new Date().getFullYear()} Doodley (doodley.in)
      </div>
    </footer>
  );
}
