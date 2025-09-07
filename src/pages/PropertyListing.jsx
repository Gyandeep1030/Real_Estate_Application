import React from 'react'
import HeroSection from "../components/home/HeroSection";
import Footer from "../components/layout/Footer";
import FeaturedPropertyCards from "../components/home/FeaturedPropertyCards"



const PropertyListing = () => {
  return (
    <>
     <HeroSection />
     <FeaturedPropertyCards/>
     <Footer />

    </>
     

  )
}

export default PropertyListing