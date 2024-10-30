import React from "react";
import ServiceListings from "../components/ServiceListings"; // Updated import to reflect service listings

const ServicesPage = () => {
  // Renamed component
  return (
    <section className="bg-blue-50 px-4 py-6">
      <ServiceListings />
    </section>
  );
};

export default ServicesPage; // Renamed export
