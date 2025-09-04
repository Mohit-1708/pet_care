import React from "react";

import Hero from "./Hero";
import Services from "./Services";
import Locations from "./Locations";
import ServicesSection from "./ServicesSection";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <div className="font-sans">
      <Hero />
      <Services />
      <Locations />
      <ServicesSection/>
      <Footer/>

    </div>
  );
}
