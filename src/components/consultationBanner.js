import { Phone } from "lucide-react";
import consult from "../assets/images/consult.png";

export default function ConsultationBanner() {
  return (
    <section className="relative bg-[#DD7542] mt-12">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-8 md:py-12">
        
        {/* Left content */}
        <div className="text-white max-w-sm">
          <h1 className="text-xl md:text-2xl font-bold leading-snug">
            Get Complimentary <br /> Vet Consultation
          </h1>
          <p className="mt-2 text-sm">with Vaccination at Home</p>

          <button className="mt-5 flex items-center gap-2 bg-white text-[#DD7542] px-4 py-2 rounded-lg font-semibold shadow text-sm">
            <Phone size={18} className="text-[#DD7542]" />
            Book Now
          </button>
        </div>

        {/* Right image */}
        <div className="flex-shrink-0">
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
