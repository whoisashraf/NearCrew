import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import ServiceListings from "../components/ServiceListings"; 
import ViewAllServices from "../components/ViewAllServices"; 
const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <ServiceListings isHome={true} />
      <ViewAllServices />
    </>
  );
};

export default HomePage;
