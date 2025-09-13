import React from "react";
import vacc1 from "../../assets/images/vacc1.png";
import vacc2 from "../../assets/images/vacc2.png";
import vacc3 from "../../assets/images/vacc3.png";
import VaccservicesMB from "../vaccination/vaccservicesMB"; // ✅ Make sure component name starts with uppercase
import ConsultationBanner from "./consultationBanner";

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
      title: "Complete Protection for Dogs",
      desc: "DHPPIL + Anti-Rabies + Kennel Cough",
      details:
        "This package includes essential vaccinations (DHPPIL + Anti-rabies) while also safeguarding against kennel cough, providing comprehensive immunity for your pet.",
      price: "₹2499",
      oldPrice: "₹2999",
      offer: "20% OFF",
    },
    {
      img: vacc3,
      title: "Mandatory Vaccines for Cats & Kittens",
      desc: "CRP + Anti-Rabies",
      details:
        "This core feline vaccination provides active immunity against feline calicivirus, rhinotracheitis virus, and feline panleukopenia virus, reducing clinical symptoms and virus shedding. It also includes anti-rabies protection.",
      price: "₹1599",
      oldPrice: "₹1999",
      offer: "20% OFF",
    },
    // duplicate to make 6
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
      title: "Complete Protection for Dogs",
      desc: "DHPPIL + Anti-Rabies + Kennel Cough",
      details:
        "This package includes essential vaccinations (DHPPIL + Anti-rabies) while also safeguarding against kennel cough, providing comprehensive immunity for your pet.",
      price: "₹2499",
      oldPrice: "₹2999",
      offer: "20% OFF",
    },
    {
      img: vacc3,
      title: "Mandatory Vaccines for Cats & Kittens",
      desc: "CRP + Anti-Rabies",
      details:
        "This core feline vaccination provides active immunity against feline calicivirus, rhinotracheitis virus, and feline panleukopenia virus, reducing clinical symptoms and virus shedding. It also includes anti-rabies protection.",
      price: "₹1599",
      oldPrice: "₹1999",
      offer: "20% OFF",
    },
  ];

  return (
    <>
      {/* Mobile view (vaccservicesMB) */}
      <div className="block md:hidden">
        <VaccservicesMB />
      </div>

      {/* Desktop/Tablet view */}
      <div className="hidden md:block">
        <section className="px-4 md:px-8 py-8 max-w-6xl mx-auto">
          {/* Section Heading */}
          <div className="text-center">
            <span className="bg-[#DD7542] text-white px-4 py-1 rounded-full text-sm font-semibold">
              Our Services
            </span>
            <h1 className="text-2xl font-bold mt-3 text-orange-600">
              Complete Pet Healthcare{" "}
              <span className="text-gray-600">Under One Roof</span>
            </h1>
          </div>

          {/* Services Grid */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {services.map((s, i) => (
              <div key={i} className="border rounded-lg shadow bg-white">
                <img
                  src={s.img}
                  alt={s.title}
                  className="rounded-t-lg h-40 md:h-48 w-full object-cover"
                />
                <div className="p-3 md:p-4">
                  {/* Title + Pricing */}
                  <div className="flex justify-between items-start">
                    <h3 className="text-[#DD7542] font-semibold text-sm md:text-base max-w-[65%]">
                      {s.title}
                    </h3>

                    {/* Pricing Section */}
                    <div className="text-right">
                      {/* Offer + Price same row */}
                      <div className="flex items-center gap-2 justify-end">
                        <span className="bg-[#DD7542] text-white text-[10px] md:text-xs font-bold px-2 py-0.5 rounded-md whitespace-nowrap">
                          {s.offer}
                        </span>
                        <span className="text-orange-600 font-bold text-sm md:text-base">
                          {s.price}
                        </span>
                      </div>
                      {/* Old Price below */}
                      <span className="line-through text-gray-400 text-xs md:text-sm block mt-0.5">
                        {s.oldPrice}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-xs md:text-sm mt-2">{s.desc}</p>

                  {/* Details */}
                  <p className="text-gray-600 text-[11px] md:text-xs mt-2 line-clamp-3">
                    {s.details}
                  </p>

                  {/* Book Button */}
                  <button
                    className="w-full mt-3 flex items-center justify-center gap-2 
                      bg-[#DD7542] text-white 
                      py-2 rounded-md 
                      text-xs md:text-sm font-semibold"
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Orange Strip Section */}
        <ConsultationBanner />
      </div>
    </>
  );
}
