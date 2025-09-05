import React from "react";
import manish from "../assets/images/manish.png";
import teamPhoto from "../assets/images/teamPhoto.png";
import karthik from "../assets/images/vet-karthik.png";
import icon1 from "../assets/icons/free.png";
import icon2 from "../assets/icons/hospital.png";
import icon3 from "../assets/icons/doctorst.png";
import plus from "../assets/icons/ei_plus.png";

export default function ServicesSection() {
  return (
    <section className="px-4 sm:px-6 py-16 max-w-6xl mx-auto text-center">
      {/* Why Choose */}
      <span className="bg-[#DD7542] text-white px-4 rounded-full text-sm font-semibold">
        Why Choose Dr Doodley
      </span>
      <h1 className="text-2xl sm:text-3xl font-bold mt-3 text-[#5C372D]">
        <span className="text-[#DD7542]">Hospital</span> Backed Services
      </h1>

      {/* Services grid */}
      <div className="grid md:grid-cols-3 gap-8 mt-10">
        <div className="flex flex-col items-center text-center">
          <div className="bg-[#DC7441] rounded-full p-4 mb-3">
            <img src={icon3} alt="20+ Expert Vets" className="w-10 h-10" />
          </div>
          <h3 className="font-semibold text-[#DD7542]">20+ Expert Vets</h3>
          <p className="text-[#5C372D] text-sm">
            Surgery, Gynecology, Dermatology & more
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="bg-[#DC7441] rounded-full p-4 mb-3">
            <img src={icon2} alt="Advance Facilities" className="w-10 h-10" />
          </div>
          <h3 className="font-semibold text-[#DD7542]">Advance Facilities</h3>
          <p className="text-[#5C372D] text-sm">
            Equipped with X-Ray, Surgery, ICU, etc.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="bg-[#DC7441] rounded-full p-4 mb-3">
            <img src={icon1} alt="Free Consultation" className="w-10 h-10" />
          </div>
          <h3 className="font-semibold text-[#DD7542]">Free Consultation</h3>
          <p className="text-[#5C372D] text-sm">
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

      {/* Experts */}
      <div className="mt-20">
        <span className="bg-[#DC7441] text-white px-4 py-1 rounded-full text-sm font-semibold">
          Meet Our Vet
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 leading-snug text-center">
          <span className="text-[#DD7542]">Team of India’s</span>
          <br />
          <span className="text-[#DD7542]">Renowned </span>
          <span className="text-[#5C372D]">Veterinary</span>
          <br />
          <span className="text-[#5C372D]">Experts</span>{" "}
          <span className="text-[#DD7542]">Who Truly Care</span>
        </h1>

        <div className="mt-8">
          <img
            src={teamPhoto}
            alt="Doctor"
            className="w-full h-60 sm:h-80 md:h-[350px] object-cover rounded-lg"
          />
        </div>

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
