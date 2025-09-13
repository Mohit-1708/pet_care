import React from "react";
import vacc1 from "../../assets/images/vacc1.png";
import vacc2 from "../../assets/images/vacc2.png";
import vacc3 from "../../assets/images/vacc3.png";
import ConsultationBanner from "./consultationBanner";

export default function VaccServices() {
  const services = [
    {
      img: vacc1,
      title: "Mandatory Vaccines for Dogs & Puppies",
      desc: [
        "DHPPiL (7-in-1 / 9-in-1) + Anti-Rabies",
        "Anti-Rabies",
        "DHPPiL",
      ],
      price: "₹1599",
      oldPrice: "₹1999",
      offer: "20% OFF",
    },
    {
      img: vacc2,
      title: "Complete Protection for Dogs",
      desc: [
        "DHPPiL + Anti-Rabies + Kennel Cough",
        "Anti-Rabies",
        "Kennel Cough",
      ],
      price: "₹2499",
      oldPrice: "₹2999",
      offer: "20% OFF",
    },
    {
      img: vacc3,
      title: "Mandatory Vaccines for Cats & Kittens",
      desc: ["CRP + Anti-Rabies", "CRP", "Anti-Rabies"],
      price: "₹1599",
      oldPrice: "₹1999",
      offer: "20% OFF",
    },
    {
      img: vacc1,
      title: "Mandatory Vaccines for Dogs & Puppies",
      desc: [
        "DHPPiL (7-in-1 / 9-in-1) + Anti-Rabies",
        "Anti-Rabies",
        "DHPPiL",
      ],
      price: "₹1599",
      oldPrice: "₹1999",
      offer: "20% OFF",
    },
  ];

  return (
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

      {/* Services Grid - fixed 2 columns */}
      <div className="mt-10 grid grid-cols-2 gap-4">
        {services.map((s, i) => (
          <div
            key={i}
            className="border rounded-xl shadow bg-white flex flex-col overflow-hidden"
          >
            {/* Full width image */}
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-40 md:h-48 object-cover"
            />

            {/* Card body */}
            <div className="flex flex-col justify-between flex-1 p-4">
              {/* Title */}
              <h3 className="text-[#DD7542] font-semibold text-sm md:text-base mb-2">
                {s.title}
              </h3>

              {/* Desc list */}
              <ul className="list-disc pl-4 text-gray-700 text-xs md:text-sm space-y-1 mb-3">
                {s.desc.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              {/* Bottom pricing + button */}
              <div className="mt-auto">
                {/* Price Row */}
                <div className="flex items-center justify-start gap-2 mb-2">
                  <span className="line-through text-gray-400 text-xs md:text-sm">
                    {s.oldPrice}
                  </span>
                  <span className="text-orange-600 font-bold text-sm md:text-base">
                    {s.price}
                  </span>
                  <span className="bg-[#DD7542] text-white text-[10px] md:text-xs font-bold px-2 py-0.5 rounded-md whitespace-nowrap">
                    {s.offer}
                  </span>
                </div>

                {/* Book Now Button */}
                <button className="w-full flex items-center justify-center gap-2 border border-[#DD7542] text-[#DD7542] py-2 rounded-md text-xs md:text-sm font-semibold hover:bg-[#DD7542] hover:text-white transition">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
       <ConsultationBanner/>
    </section>
   
  );
}
