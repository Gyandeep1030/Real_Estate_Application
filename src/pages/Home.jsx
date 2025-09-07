import React from "react";
import HeroSection from "../components/home/HeroSection";
import WhatWeDo from "../components/home/WhatWeDo";
import FeaturedProperties from "../components/home/FeaturedProperties";
import Newsletter from "../components/home/Newsletter";
import Footer from "../components/layout/Footer";
import BestProperties from "../components/home/BestProperties";
import RentalProperties from "../components/home/RentalProperties";
import JourneyForm from "../components/home/JourneyForm";
import ClientProperties from "../components/home/ClientProperties";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhatWeDo />
      <FeaturedProperties />
      <BestProperties/>
      <RentalProperties/>
      <JourneyForm/>
      <ClientProperties/>
      {/* <Newsletter /> */}
      <Footer />
      
    </>
  );
};

export default Home;
