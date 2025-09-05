import React from "react";
import { Stethoscope, TimerReset, BadgePercent } from "lucide-react";
import manish from "../assets/images/manish.png";
import teamPhoto from "../assets/images/teamPhoto.png";
import karthik from "../assets/images/vet-karthik.png";
import rekha from "../assets/images/Rekha.png";
import plus from "../assets/icons/ei_plus.png";

export default function VaccServicesSection() {
  return (
    <section className="px-8 py-16 max-w-6xl mx-auto text-center">
      {/* Heading */}
      <span className="bg-[#DD7542] text-orange-600 px-4 py-1 rounded-full text-sm font-semibold">
        Why Choose Dr Doodley
      </span>
      <h1 className="text-3xl font-bold mt-3">
        <span className="text-[#DD7542]">Hospital</span> Backed Services
      </h1>

      {/* Features */}
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <div className="flex flex-col items-center">
          <Stethoscope size={40} className="text-[#DD7542] mb-3" />
          <h3 className="font-semibold text-[#DD7542]">20+ Expert Vets</h3>
          <p className="text-gray-600 text-sm">
            Surgery, Gynecology, Dermatology & more
          </p>
        </div>

        <div className="flex flex-col items-center">
          <TimerReset size={40} className="text-[#DD7542] mb-3" />
          <h3 className="font-semibold text-[#DD7542]">Same Day Visit</h3>
          <p className="text-gray-600 text-sm">
            Our hospitals are equipped with x-ray, Surgery etc.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <BadgePercent size={40} className="text-[#DD7542] mb-3" />
          <h3 className="font-semibold text-[#DD7542]">
            Affordable Home Vaccination
          </h3>
          <p className="text-gray-600 text-sm">
            Guaranteed free consultation at our hospitals
          </p>
        </div>
      </div>

      {/* Happy Pets */}
      <div className="mt-20">
        <span className="bg-[#DD7542] text-white px-4 py-1 rounded-full text-sm font-semibold">
          Loved by Pet Parents
        </span>
        <h1 className="text-2xl font-bold mt-3 text-[#5C372D]">
          Meet Our <span className="text-[#DD7542]">Happy Pets</span>
        </h1>

        <div className="mt-8 overflow-x-auto scrollbar-hide">
          <div className="flex gap-6 snap-x snap-mandatory scroll-smooth px-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-[202px] h-[334px] flex flex-col rounded-lg shadow border bg-white snap-center"
              >
                {/* Top Image */}
                <img
                  src={manish}
                  alt="Happy pet"
                  className="w-full h-[210px] object-cover rounded-t-md"
                />

                {/* Bottom Content */}
                <div className="flex flex-col gap-2 px-3 py-3 bg-[#F9F9F9] rounded-b-md flex-grow">
                  {/* Name + Stars */}
                  <div className="flex justify-between items-center">
                    <p className="text-[12px] leading-[14px] font-medium text-[#80645D]">
                      Sakshi Singh
                    </p>
                    <div className="flex gap-[2px]">
                      {[...Array(5)].map((_, starIndex) => (
                        <span
                          key={starIndex}
                          className="w-[12px] h-[12px] text-[#F78F48] text-[12px]"
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Review */}
                  <p className="text-[12px] leading-[14px] text-[#5C372D] text-left">
                    I’m very happy with the veterinary services. The response
                    was quick, the doctor was friendly and approachable...
                  </p>

                  {/* Read More */}
                  <button className="text-[12px] font-medium text-[#DD7542] underline text-left">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Meet Our Vet */}
      <div className="mt-20">
        <span className="bg-[#DD7542] text-white px-4 py-1 rounded-full text-sm font-semibold">
          Meet Our Vet
        </span>
        <h1 className="text-2xl font-bold mt-3 text-[#DD7542]">
          Team of India’s Renowned{" "}
          <span className="text-gray-600">Veterinary Experts</span>{" "}
          <span className="text-[#DD7542]">Who Truly Care</span>
        </h1>

        <div className="mt-8">
          <img
            src={teamPhoto}
            alt="Doctor"
            className="w-full h-60 sm:h-80 md:h-[350px] object-cover rounded-none shadow-lg"
          />
        </div>

        {/* Team Section */}
        <div className="mt-20">


          <div className="mt-8 overflow-x-auto scrollbar-hide">
            <div className="flex gap-6 snap-x snap-mandatory scroll-smooth px-2">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-64 md:w-72 rounded-xl shadow-md bg-white overflow-hidden snap-center border"
                >
                  {/* Doctor Image */}
                  <img
                    src={karthik}
                    alt="Doctor"
                    className="w-full h-52 object-cover"
                  />

                  {/* Doctor Info */}
                  <div className="p-4 text-left">
                    <p className="text-[#DD7542] font-semibold">Dr. Karthik</p>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className="font-semibold text-gray-800">
                        Experience:
                      </span>{" "}
                      2.5+ Years
                    </p>
                    <p className="text-sm text-gray-600 mt-1 leading-snug">
                      <span className="font-semibold text-gray-800">
                        Expertise:
                      </span>{" "}
                      General Physician & Soft Tissue Surgeon
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vaccination Plans */}
      <div className="mt-20">
        <span className="bg-[#DD7542] text-white px-4 py-1 rounded-full text-sm font-semibold">
          Vaccination Plans
        </span>
        <h1 className="text-2xl md:text-3xl font-bold mt-3">
          Dog and Puppy{" "}
          <span className="text-white">Vaccination Plans</span>
        </h1>

        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="border rounded-xl shadow bg-white flex flex-col w-full md:w-auto"
            >
              <div className="relative bg-[#DD7542] text-white text-left px-4 py-3 rounded-t-xl flex items-center gap-3">
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
                All repeat vaccines (Boosters) are mandatory to bolster your
                pup’s immunity against infectious diseases. One vaccine is not
                enough to raise a puppy’s immunity.
              </p>

              <div className="flex items-center justify-between px-4 pb-4 gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-orange-600 font-bold">₹1599</span>
                  <span className="line-through text-gray-400 text-xs">
                    ₹1999
                  </span>
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
  <h1 className="text-2xl font-bold text-center text-orange-600">FAQ</h1>

  <div className="mt-8 max-w-3xl mx-auto divide-y divide-gray-300">
    {[
      "How do I book an appointment?",
      "What services do you offer at home?",
      "Do you have a membership too?",
      "Which pets do you treat?",
      "What are your home-visit hours?",
      "Are your vets qualified?",
    ].map((q, i) => (
      <div
        key={i}
        className="flex justify-between items-center py-4 cursor-pointer"
      >
        <p className="text-base text-[#333] font-medium">{q}</p>
        {/* Bigger white circle without border */}
        <span className="w-8 h-8 flex items-center justify-center rounded-full bg-white">
          <img src={plus} alt="Expand" className="w-5 h-5" />
        </span>
      </div>
    ))}
  </div>
</div>
    </section>
  );
}
