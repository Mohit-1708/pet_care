import React from "react";
import { Stethoscope, TimerReset, BadgePercent } from "lucide-react";
import manish from "../assets/images/manish.png";
import teamPhoto from "../assets/images/teamPhoto.png";
import karthik from "../assets/images/vet-karthik.png";
import rekha from "../assets/images/Rekha.png"

export default function VaccServicesSection() {
  return (
    <section className="px-8 py-16 max-w-6xl mx-auto text-center">
    
      <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
        Why Choose Dr Doodley
      </span>
      <h1 className="text-3xl font-bold mt-3">
        <span className="text-orange-600">Hospital</span> Backed Services
      </h1>

   
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <div className="flex flex-col items-center ">
          <Stethoscope size={40} className="text-orange-600 mb-3" />
          <h3 className="font-semibold text-orange-600">20+ Expert Vets</h3>
          <p className="text-gray-600 text-sm">
            Surgery, Gynecology, Dermatology & more
          </p>
        </div>

        <div className="flex flex-col items-center">
          <TimerReset size={40} className="text-orange-600 mb-3" />
          <h3 className="font-semibold text-orange-600">Same Day Visit</h3>
          <p className="text-gray-600 text-sm">
            Our hospitals are equipped with x-ray, Surgery etc.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <BadgePercent size={40} className="text-orange-600 mb-3" />
          <h3 className="font-semibold text-orange-600">Affordable Home Vaccinaton</h3>
          <p className="text-gray-600 text-sm">
            Guaranteed free consultation at our hospitals
          </p>
        </div>
      </div>

    
      <div className="mt-20">
        <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
          Loved by Pet Parents
        </span>
        <h1 className="text-2xl font-bold mt-3">
          Meet Our <span className="text-orange-600">Happy Pets</span>
        </h1>

        <div className="mt-8 overflow-x-auto">
  <div className="flex gap-6 snap-x snap-mandatory scroll-smooth px-4">
    {[...Array(4)].map((_, i) => (
      <div
        key={i}
        className="flex-shrink-0 w-72 md:w-80 border rounded-lg shadow p-4 snap-center bg-white"
      >
        <img
          src={manish}
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

      
      <div className="mt-20">
        <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
          Meet Our Vet
        </span>
        <h1 className="text-2xl font-bold mt-3 text-orange-600">
          Team of India’s Renowned{" "}
          <span className="text-gray-600">Veterinary Experts</span> <span className="text-orange-600">Who Truly Care</span> 
          
        </h1>

       <div className="mt-8 flex justify-center">
  <img
    src={teamPhoto} 
    alt="Doctor"
    className="rounded-xl shadow-lg object-cover w-[500px] h-[350px]"
  />
</div>


        <div className="mt-8 overflow-x-auto">
  <div className="flex gap-6 snap-x snap-mandatory scroll-smooth px-4">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="flex-shrink-0 w-64 md:w-72 border rounded-lg shadow p-4 snap-center bg-white"
      >
        <img
          src={karthik}
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

<div className="mt-20">
  <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
    Vaccination Plans
  </span>
  <h1 className="text-2xl md:text-3xl font-bold mt-3">
    Dog and Puppy <span className="text-orange-600">Vaccination Plans</span>
  </h1>


  <div className="grid md:grid-cols-3 gap-6 mt-10">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="border rounded-xl shadow bg-white flex flex-col w-full md:w-auto"
      >
        <div className="relative bg-orange-600 text-white text-left px-4 py-3 rounded-t-xl flex items-center gap-3">
          <img
            src={rekha}
            alt="Puppy Vaccination"
            className="w-14 h-14 object-cover rounded-full border-2 border-white shadow -ml-2"
          />
          <span className="font-semibold text-base">
            Puppy Vaccination Schedule
          </span>
        </div>

        
        <div className="divide-y">
          {[...Array(6)].map((_, j) => (
            <div
              key={j}
              className="flex justify-between px-4 py-3 text-sm"
            >
              <span className="font-semibold text-orange-600">
                1 yr since vaccination
              </span>
              <span className="text-gray-600">
                Kennel Cough and Anti-rabies
              </span>
            </div>
          ))}
        </div>

      
        <p className="text-gray-600 text-xs px-4 py-3">
          All repeat vaccines (Boosters) are mandatory to bolster your pup’s
          immunity against infectious diseases. One vaccine is not enough to
          raise a puppy’s immunity.
        </p>

       
        <div className="flex items-center justify-between px-4 pb-4 gap-3">
          <div className="flex items-center gap-2">
            <span className="text-orange-600 font-bold">₹1599</span>
            <span className="line-through text-gray-400 text-xs">₹1999</span>
            <span className="bg-orange-100 text-orange-600 text-xs font-bold px-2 py-1 rounded">
              20% OFF
            </span>
          </div>
          <button className="border border-orange-600 text-orange-600 px-4 py-2 rounded-md font-semibold hover:bg-orange-600 hover:text-white transition text-sm">
            BOOK NOW
          </button>
        </div>
      </div>
    ))}
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
