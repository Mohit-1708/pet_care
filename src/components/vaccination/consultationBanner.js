import { Phone } from "lucide-react";
import consult from "../../assets/images/consult.png";

export default function ConsultationBanner() {
  return (
    <section className="relative bg-[#DD7542] mt-12 overflow-visible">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-6 relative">

        {/* Left content */}
        <div className="text-white max-w-lg z-10">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight whitespace-normal md:whitespace-nowrap">
            Get Complimentary Vet Consultation
          </h1>
          <p className="mt-2 text-sm md:text-base">
            with Vaccination at Home
          </p>

          <button className="mt-5 flex items-center gap-2 bg-white text-[#DD7542] px-4 py-2 rounded-lg font-semibold shadow text-sm md:text-base">
            <Phone size={18} className="text-[#DD7542]" />
            Book Now
          </button>
        </div>

        {/* Right image - responsive pop-out and alignment */}
        <div className="absolute -bottom-0 right-0 md:right-8">
          <img
            src={consult}
            alt="Vet Consultation"
            className="w-40 sm:w-56 md:w-72 object-contain"
          />
        </div>
      </div>
    </section>
  );
}
