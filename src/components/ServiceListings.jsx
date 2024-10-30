import React, { useState, useEffect } from "react";
import ServiceListing from "./ServiceListing"; // Update the import to the new component
import Spinner from "./Spinner";

const ServiceListings = ({ isHome = false }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      const apiUrl = isHome ? "/api/services?_limit=3" : "/api/services"; // Updated the API URL
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.log("Error fetching data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-teal-500 mb-6 text-center">
          {isHome ? "Recent Services" : "Browse Services"}{" "}
          {/* Updated the heading */}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((/** @type {any} */service) => (
              <ServiceListing key={service.id} service={service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceListings;
