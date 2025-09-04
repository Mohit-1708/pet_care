import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-20 py-10 px-8">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left side */}
        <div>
          <h2 className="text-orange-600 font-bold text-xl">Dr.Doodley</h2>
          <p className="text-gray-600 mt-2">Vet at Home</p>
          <div className="mt-4">
            <p className="text-gray-600">📧 care@doodley.in</p>
            <p className="text-gray-600">📞 +91 99023 56133</p>
          </div>
        </div>

        {/* Right side */}
        <div>
          <h3 className="font-semibold text-orange-600">Useful Links</h3>
          <ul className="mt-2 text-gray-600 space-y-1 text-sm">
            <li>Terms and Conditions</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Shipping Policy</li>
            <li>Support</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
