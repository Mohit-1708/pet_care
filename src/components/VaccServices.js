import React from "react";
import vacc1 from "../assets/images/vacc1.png";
import vacc2 from "../assets/images/vacc2.png";
import vacc3 from "../assets/images/vacc3.png";
import consult from "../assets/images/consult.png";
import { Phone } from "lucide-react";

export default function VaccServices() {
  const services = [
    {
      img: vacc1,
      title: "Mandatory Vaccines for Dogs & Puppies",
      desc: "DHPPIL (7-in-1 / 9-in-1) + Anti-Rabies",
      details:
        "This core vaccination protects both puppies from 45 days of age and adult dogs against canine distemper, hepatitis, parvovirus, parainfluenza, and leptospirosis, along with mandatory anti-rabies protection.",
      price: "₹1599",
      oldPrice: "₹1999",
      offer: "20% OFF",
    },
    {
      img: vacc2,
      title: "Mandatory Vaccines for Cats & Kittens",
      desc: "CRP + Anti-Rabies",
      details:
        "This core feline vaccination provides active immunity against feline calicivirus, rhinotracheitis virus, and feline panleukopenia virus, including clinical symptoms and virus shedding. It also includes anti-rabies protection.",
      price: "₹1599",
      oldPrice: "₹1999",
      offer: "20% OFF",
    },
    {
      img: vacc3,
      title: "Mandatory Vaccines for Cats & Kittens",
      desc: "CRP + Anti-Rabies",
      details:
        "This core feline vaccination provides active immunity against feline calicivirus, rhinotracheitis virus, and feline panleukopenia virus, including clinical symptoms and virus shedding. It also includes anti-rabies protection.",
      price: "₹1599",
      oldPrice: "₹1999",
      offer: "20% OFF",
    },
    {
      img: vacc1,
      title: "Mandatory Vaccines for Cats & Kittens",
      desc: "CRP + Anti-Rabies",
      details:
        "This core feline vaccination provides active immunity against feline calicivirus, rhinotracheitis virus, and feline panleukopenia virus, including clinical symptoms and virus shedding. It also includes anti-rabies protection.",
      price: "₹1599",
      oldPrice: "₹1999",
      offer: "20% OFF",
    },
    {
      img: vacc2,
      title: "Mandatory Vaccines for Cats & Kittens",
      desc: "CRP + Anti-Rabies",
      details:
        "This core feline vaccination provides active immunity against feline calicivirus, rhinotracheitis virus, and feline panleukopenia virus, including clinical symptoms and virus shedding. It also includes anti-rabies protection.",
      price: "₹1599",
      oldPrice: "₹1999",
      offer: "20% OFF",
    },
    {
      img: vacc3,
      title: "Mandatory Vaccines for Cats & Kittens",
      desc: "CRP + Anti-Rabies",
      details:
        "This core feline vaccination provides active immunity against feline calicivirus, rhinotracheitis virus, and feline panleukopenia virus, including clinical symptoms and virus shedding. It also includes anti-rabies protection.",
      price: "₹1599",
      oldPrice: "₹1999",
      offer: "20% OFF",
    },
  ];

  return (
    <>
      <section className="px-8 py-16 max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center">
          <span className="bg-orange-100 text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
            Our Services
          </span>
          <h1 className="text-3xl font-bold mt-3 text-orange-600">
            Complete Pet Healthcare{" "}
            <span className="text-gray-600">Under One Roof</span>
          </h1>
        </div>

        {/* Services Grid */}
<div className="mt-10">
  {/* Mobile: horizontal scroll with 2 cols per row | Desktop: 3 cols grid */}
  <div className="md:grid md:grid-cols-3 md:gap-6 flex overflow-x-auto gap-4 no-scrollbar">
    {services.map((s, i) => (
      <div
        key={i}
        className="min-w-[45%] sm:min-w-[200px] md:min-w-0 border rounded-lg shadow bg-white flex-shrink-0"
      >
        <img
          src={s.img}
          alt={s.title}
          className="rounded-t-lg h-36 md:h-48 w-full object-cover"
        />
        <div className="p-3 md:p-4">
          {/* Title + Pricing in same row */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-orange-600 font-semibold text-xs md:text-sm">
                {s.title}
              </h3>
              <p className="text-gray-700 text-[10px] md:text-xs">{s.desc}</p>
            </div>

            {/* Pricing */}
            <div className="text-right">
              <span className="bg-orange-100 text-orange-600 text-[9px] md:text-[10px] font-bold px-1.5 py-0.5 rounded block mb-1">
                {s.offer}
              </span>
              <div className="flex items-center gap-1 justify-end">
                <span className="text-orange-600 font-bold text-xs md:text-sm">
                  {s.price}
                </span>
                <span className="line-through text-gray-400 text-[9px] md:text-xs">
                  {s.oldPrice}
                </span>
              </div>
            </div>
          </div>

          {/* Details below */}
          <p className="text-gray-600 text-[10px] md:text-xs mt-2 line-clamp-3">
            {s.details}
          </p>
          <button className="w-full mt-3 bg-orange-600 text-white py-1.5 md:py-2 rounded-md text-xs md:text-sm font-semibold">
             <Phone size={14} className="text-white" />BOOK NOW
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

      </section>

      {/* Orange Strip Section */}
<section className="relative bg-orange-600 mt-12">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center px-8 gap-0 md:gap-6">

    
    <div className="text-white">
      <h1 className="text-xl md:text-2xl font-bold">
        Get Complimentary Vet Consultation
      </h1>
      <h1 className="mt-1 text-sm">with Vaccination at Home</h1>
      <button className="mt-3 bg-white text-orange-600 px-5 py-2 rounded-md font-semibold shadow">
         Book Now
      </button>
    </div>


    <div className="flex justify-center md:justify-end relative">
      <img
        src={consult}
        alt="Vet Consultation"
        className="w-full max-w-sm object-contain relative -mt-16 md:-mt-20 drop-shadow-lg"
      />
    </div>
  </div>
</section>
    </>
  );
}
