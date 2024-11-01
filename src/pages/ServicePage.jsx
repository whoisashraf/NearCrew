import React from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ServicePage = ({ deleteService }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  /** @type {any} */
  const service = useLoaderData(); 

  const onDeleteClick = (serviceId) => {
    
    const confirm = window.confirm(
      "Are you sure you want to delete this listing?"
    );

    if (!confirm) return;

    deleteService(serviceId); 

    toast.success("Service deleted successfully");

    navigate("/services"); 
  };

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/services" 
            className="text-teal-500 hover:text-teal-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Service Listings
          </Link>
        </div>
      </section>

      <section className="bg-teal-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{service.type}</div>
                <h1 className="text-3xl font-bold mb-4">
                  {service.service}
                </h1>{" "}
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarker className="text-orange-700 mr-1" />
                  <p className="text-orange-700">{service.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-teal-800 text-lg font-bold mb-6">
                  Service Description
                </h3>
                <p className="mb-4">{service.description}</p>
                <h3 className="text-teal-800 text-lg font-bold mb-2">Fee </h3>
                <p className="mb-4">{service.priceRange} / Service</p>
              </div>
            </main>

            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>
                <h2 className="text-2xl">{service.provider.name}</h2>
                <p className="my-2">{service.provider.description}</p>
                <hr className="my-4" />
                <h3 className="text-xl">Contact Email:</h3>
                <p className="my-2 bg-teal-100 p-2 font-bold">
                  {service.provider.contactEmail}
                </p>
                <h3 className="text-xl">Contact Phone:</h3>
                <p className="my-2 bg-teal-100 p-2 font-bold">
                  {service.provider.contactPhone}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Service</h3>
                <Link
                  to={`/edit-service/${service.id}`} 
                  className="bg-teal-500 hover:bg-teal-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Service
                </Link>
                <button
                  onClick={() => onDeleteClick(service.id)} 
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Service
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const serviceLoader = async ({ params }) => {
  const res = await fetch(`/api/services/${params.id}`); 
  const data = await res.json();
  return data;
};

export { ServicePage as default, serviceLoader }; 
