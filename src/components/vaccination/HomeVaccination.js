import React from "react";
import VaccNavbar from "../vaccination/VaccNavbar";
import HeroVaccination from "../vaccination/HeroVaccination";
import VaccServices from "./VaccServices";
import VaccServicesSection from "./vaccServiceSection";
import Footer from "../Footer";

export default function Home() {
  return (
    <>
      <VaccNavbar />
      <HeroVaccination />
      <VaccServices />
      <VaccServicesSection />
      <Footer />
    </>
  );
}
