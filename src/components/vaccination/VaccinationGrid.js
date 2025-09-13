import React from "react";
import dogImage from "../../assets/images/Rekha.png"; // Adjust the path as needed

// Vaccination Card Component
function VaccinationCard() {
  return (
    <div className="w-full sm:w-[320px] md:w-[280px] lg:w-[260px] border rounded-xl shadow-md bg-white flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-[#DD7542]">
        <img
          src={dogImage}
          alt="Dog"
          className="w-12 h-12 rounded-full object-cover"
        />
        <h2 className="text-white font-semibold text-sm leading-snug text-left">
          Puppy Vaccination Schedule
        </h2>
      </div>

      {/* Schedule Table */}
<div className="flex flex-col text-sm px-4 py-3">
  {Array.from({ length: 5 }).map((_, idx) => (
    <div
      key={idx}
      className="border-b py-2 flex justify-between items-start gap-3"
    >
      {/* Left side */}
      <span className="text-[#DD7542] font-medium text-xs w-20 leading-snug">
        1 yr since vaccination
      </span>

      {/* Right side */}
      <span className="text-[#5C372D] text-xs text-left flex-2 leading-snug">
        Kennel Cough and <br></br> Anti-rabies
      </span>
    </div>
  ))}
</div>

      {/* Description */}
      <p className="text-[10px] text-gray-500 px-4 pb-3 leading-snug">
        All repeat vaccines (Boosters) are mandatory to bolster your pup’s
        immunity against infectious diseases. One vaccine is not enough to
        raise a puppy’s immunity.
      </p>

      {/* Footer */}
      <div className="border-t px-4 py-3 flex items-center justify-between">
        {/* Price Section */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-2">
            <span className="text-[#DD7542] text-base">₹1599</span>
            <span className="bg-[#DD7542] text-white text-[10px] px-2 py-[1px] rounded font-semibold">
              20% OFF
            </span>
          </div>
          <div className="text-[11px] text-gray-400 line-through self-start">
            ₹1999
          </div>
        </div>

        {/* Button */}
        <button className="bg-white text-[#DD7542] text-xs font-semibold px-4 py-2 rounded-md border border-[#DD7542] hover:bg-[#DD7542] hover:text-white transition">
          BOOK NOW
        </button>
      </div>
    </div>
  );
}

// Vaccination Grid Component
export default function VaccinationGrid() {
  const cards = Array.from({ length: 6 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-y-3 gap-x-4 justify-items-center px-4 md:px-20 py-8">
      {/* On mobile → single column, show only 3 */}
      {cards.slice(0, 3).map((_, idx) => (
        <VaccinationCard key={idx} />
      ))}

      {/* On md+ → show all 6 */}
      {cards.slice(3).map((_, idx) => (
        <div key={idx} className="hidden md:block">
          <VaccinationCard />
        </div>
      ))}
    </div>
  );
}
