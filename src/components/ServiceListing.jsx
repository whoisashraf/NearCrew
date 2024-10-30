import React,{ useState } from "react";
import { FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceListing = ({ service }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = service.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + "...";
  }

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-6">
          <div className="text-gray-600 my-2">{service.type}</div>
          <h3 className="text-xl font-bold">{service.service}</h3>
        </div>

        <div className="mb-5">{description}</div>

        <button
          onClick={() => setShowFullDescription((prevState) => !prevState)}
          className="text-teal-500 mb-5 hover:text-teal-600"
        >
          {showFullDescription ? "Less" : "More"}
        </button>

        <h3 className="text-teal-500 mb-2">{service.priceRange} / Service</h3>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="text-orange-700 mb-3">
            <FaMapMarker className="inline text-lg mb-1 mr-1" />
            {service.location}
          </div>
          <Link
            to={`/services/${service.id}`}
            className="h-[36px] bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceListing;
