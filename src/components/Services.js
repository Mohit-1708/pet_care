import React from "react";
import { Activity, Heart, Stethoscope, Microscope, Clock, Scissors } from "lucide-react";

export default function Services() {
  const services = [
    { title: "General Checkup", icon: <Stethoscope size={28} className="text-orange-600" /> },
    { title: "Diagnostics", icon: <Microscope size={28} className="text-orange-600" /> },
    { title: "24/7 Serviceable", icon: <Clock size={28} className="text-orange-600" /> },
    { title: "Surgery & Operations", icon: <Scissors size={28} className="text-orange-600" /> },
    { title: "Emergency Care", icon: <Activity size={28} className="text-orange-600" /> },
    { title: "In-Patient Treatment", icon: <Heart size={28} className="text-orange-600" /> },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="bg-orange-600 text-white px-4 py-2 rounded-full inline-block font-semibold mb-4">
          Our Services
        </h2>
        <h3 className="text-3xl font-bold font-mono text-orange-600 mb-10">
          Complete Pet Healthcare <span className="text-gray-900">Under One Roof</span>
        </h3>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 text-left max-w-4xl mx-auto px-4">
  {services.map((service, i) => (
    <div
      key={i}
      className="p-4 sm:p-6 bg-white rounded-xl shadow hover:shadow-lg transition"
    >
      <div className="mb-3">{service.icon}</div>
      <h4 className="text-sm sm:text-lg font-semibold text-orange-600 mb-2">
        {service.title}
      </h4>
      <p className="text-gray-600 text-xs sm:text-sm">
        Comprehensive health examinations and routine care.
      </p>
    </div>
  ))}
</div>

      </div>
    </section>
  );
}
