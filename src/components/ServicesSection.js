import React from "react";
import { Stethoscope, ShieldCheck, ClipboardList } from "lucide-react";

export default function ServicesSection() {
  return (
    <section className="px-8 py-16 max-w-6xl mx-auto text-center">
      {/* Why Choose */}
      <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
        Why Choose Dr Doodley
      </span>
      <h2 className="text-3xl font-bold mt-3">
        <span className="text-orange-600">Hospital</span> Backed Services
      </h2>

      {/* Services grid */}
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <div className="flex flex-col items-center">
          <Stethoscope size={40} className="text-orange-600 mb-3" />
          <h3 className="font-semibold text-orange-600">20+ Expert Vets</h3>
          <p className="text-gray-600 text-sm">
            Surgery, Gynecology, Dermatology & more
          </p>
        </div>

        <div className="flex flex-col items-center">
          <ShieldCheck size={40} className="text-orange-600 mb-3" />
          <h3 className="font-semibold text-orange-600">Advance Facilities</h3>
          <p className="text-gray-600 text-sm">
            Equipped with X-Ray, Surgery, ICU, etc.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <ClipboardList size={40} className="text-orange-600 mb-3" />
          <h3 className="font-semibold text-orange-600">Free Consultation</h3>
          <p className="text-gray-600 text-sm">
            Guaranteed free consultation at our hospitals
          </p>
        </div>
      </div>

    
      <div className="mt-20">
        <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
          Loved by Pet Parents
        </span>
        <h2 className="text-2xl font-bold mt-3">
          Meet Our <span className="text-orange-600">Happy Pets</span>
        </h2>

        <div className="mt-8 overflow-x-auto">
  <div className="flex gap-6 snap-x snap-mandatory scroll-smooth px-4">
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="flex-shrink-0 w-72 md:w-80 border rounded-lg shadow p-4 snap-center bg-white"
      >
        <img
          src="https://images.pexels.com/photos/5731860/pexels-photo-5731860.jpeg"
          alt="Happy pet"
          className="rounded-md mb-3 w-full h-48 object-cover"
        />
        <p className="font-semibold">Sakshi Singh</p>
        <p className="text-sm text-gray-600">
          I’m very happy with the veterinary service. The treatment was quick,
          the doctor was friendly and approachable.
        </p>
        <button className="text-orange-600 text-sm mt-2">Read More</button>
      </div>
    ))}
  </div>
</div>

      </div>

      {/* Experts */}
      <div className="mt-20">
        <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
          Meet Our Vet
        </span>
        <h2 className="text-2xl font-bold mt-3">
          Team of India’s Renowned{" "}
          <span className="text-orange-600">Veterinary Experts</span> Who Truly
          Care
        </h2>

       <div className="mt-8 flex justify-center">
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsyi150qbcOwN-w8UuFVXDFx25skVxyTFFg&s" 
    alt="Doctor"
    className="rounded-xl shadow-lg object-cover w-[500px] h-[350px]"
  />
</div>


        <div className="mt-8 overflow-x-auto">
  <div className="flex gap-6 snap-x snap-mandatory scroll-smooth px-4">
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="flex-shrink-0 w-64 md:w-72 border rounded-lg shadow p-4 snap-center bg-white"
      >
        <img
          src="https://content.jdmagicbox.com/comp/def_content/veterinary_doctors/default-veterinary-doctors-4.jpg"
          alt="Doctor"
          className="rounded-md mb-3 w-full h-44 object-cover"
        />
        <p className="font-semibold">Dr. Karthik</p>
        <p className="text-sm text-gray-600">
          Experience: 2.5+ Years <br /> Expertise: General
        </p>
      </div>
    ))}
  </div>
</div>

      </div>

      {/* FAQ */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-orange-600">FAQ</h2>
        <div className="mt-6 text-left max-w-3xl mx-auto">
          {[
            "How do I book an appointment?",
            "What services do you offer at home?",
            "Do you have a membership too?",
            "Which pets do you treat?",
            "What are your home-visit hours?",
            "Are your vets qualified?",
          ].map((q, i) => (
            <details
              key={i}
              className="border-b py-3 cursor-pointer hover:bg-gray-50"
            >
              <summary className="font-medium">{q}</summary>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
