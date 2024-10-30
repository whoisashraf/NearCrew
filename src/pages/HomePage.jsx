import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import ServiceListings from "../components/ServiceListings"; // Updated component
import ViewAllServices from "../components/ViewAllServices"; // New component for viewing all services

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
