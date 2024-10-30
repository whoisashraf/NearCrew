import React, { useState } from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditLocalServicePage = ({ updateServiceSubmit }) => {
  /** @type {any} */
  const service = useLoaderData();
  const [name, setName] = useState(service.provider.name);
  const [location, setLocation] = useState(service.location);
  const [description, setDescription] = useState(service.description);
  const [providerDescription, setProviderDescription] = useState(
    service.provider.description
  );
  const [contactEmail, setContactEmail] = useState(
    service.provider.contactEmail
  );
  const [contactPhone, setContactPhone] = useState(
    service.provider.contactPhone
  );
  const [serviceProvided, setServiceProvided] = useState(service.service);
  const [serviceType, setServiceType] = useState(service.type); // New field for service type
  const [priceRange, setPriceRange] = useState(service.priceRange);

  const navigate = useNavigate();
  const { id } = useParams();

  const submitForm = (e) => {
    e.preventDefault();

    const updatedService = {
      id,
      service: serviceProvided,
      type: serviceType,
      description,
      location,
      priceRange: priceRange,
      provider: {
        name: name,
        description: providerDescription,
        contactEmail,
        contactPhone,
      },
    };

    updateServiceSubmit(updatedService);
    toast.success("Service Updated Successfully");
    navigate(`/services/${id}`);
  };

  return (
    <section className="bg-teal-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              Edit Service
            </h2>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Provider Name
              </label>
              <input
                type="text"
                id="name"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="e.g., John Doe Craft Services"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Provider Description
              </label>
              <textarea
                id="description"
                className="border rounded w-full py-2 px-3"
                rows={4}
                placeholder="Describe your main selling point"
                required
                value={description}
                onChange={(e) => setProviderDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Location
              </label>
              <input
                type="text"
                id="location"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="City, State"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">Type</label>
              <input
                type="text"
                id="serviceType"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="e.g., Full-Service, Consultancy"
                required
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Price Range
              </label>
              <input
                type="text"
                id="priceRange"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="e.g., $2,000 - $5,000"
                required
                value={priceRange}
                onChange={(e) => setPriceRange(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Description
              </label>
              <textarea
                id="description"
                className="border rounded w-full py-2 px-3"
                rows={4}
                placeholder="Describe your services"
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Service Offered
              </label>
              <input
                type="text"
                id="services_offered"
                className="border rounded w-full py-2 px-3"
                placeholder="List of services (e.g., catering, equipment rental)"
                required
                value={serviceProvided}
                onChange={(e) => setServiceProvided(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Contact Email
              </label>
              <input
                type="email"
                id="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for inquiries"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                Contact Phone
              </label>
              <input
                type="tel"
                id="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for inquiries"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update Service
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EditLocalServicePage;