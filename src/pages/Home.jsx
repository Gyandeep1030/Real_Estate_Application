import React from "react";
import HeroSection from "../components/home/HeroSection";
import WhatWeDo from "../components/home/WhatWeDo";
import FeaturedProperties from "../components/home/FeaturedProperties";
import Newsletter from "../components/home/Newsletter";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <WhatWeDo />
      <FeaturedProperties />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
