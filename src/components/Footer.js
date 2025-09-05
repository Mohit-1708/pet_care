import React from "react";
import Vector from "../assets/icons/vector.svg";
import mail from "../assets/icons/mail-01.png";
import call from "../assets/icons/phone.png";
import bg from "../assets/images/bg.png";

export default function Footer() {
  return (
    <footer className="border-t mt-0 bg-white relative">
      {/* Background for mobile only */}
      <div
  className="absolute inset-0 bg-cover bg-no-repeat bg-center opacity-20 md:hidden"
  style={{ backgroundImage: `url(${bg})` }}
></div>


      {/* Main footer content */}
      <div className="relative py-10 px-8 max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left side */}
        <div>
          <img src={Vector} width={140} height={22} alt="Doodley Logo" />
          <p className="mt-2 text-lg font-semibold">
            <span className="text-orange-600 font-roboto">Contact</span>{" "}
            <span className="text-gray-600">Us</span>
          </p>

          <div className="mt-4 space-y-2 text-gray-600">
            <div className="flex items-center gap-2">
              <img src={mail} alt="Mail" className="w-5 h-5" />
              <p>care@doodley.in</p>
            </div>

            <div className="flex items-center gap-2">
              <img src={call} alt="Phone" className="w-5 h-5" />
              <p>+91 99023 56133</p>
            </div>
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
      <div className="bg-orange-900 text-white text-center py-3 text-sm relative">
        © {new Date().getFullYear()} Doodley (doodley.in)
      </div>
    </footer>
  );
}
