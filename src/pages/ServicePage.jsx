import React from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ServicePage = ({ deleteService }) => {
  // Renamed the component and prop
  const navigate = useNavigate();
  const { id } = useParams();
  /** @type {any} */
  const service = useLoaderData(); // Changed to 'service'

  const onDeleteClick = (serviceId) => {
    // Changed to 'serviceId'
    const confirm = window.confirm(
      "Are you sure you want to delete this listing?"
    );

    if (!confirm) return;

    deleteService(serviceId); // Changed to 'deleteService'

    toast.success("Service deleted successfully"); // Changed to 'Service'

    navigate("/services"); // Changed to '/services'
  };

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            to="/services" // Changed to '/services'
            className="text-teal-500 hover:text-teal-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Service Listings{" "}
            {/* Updated text */}
          </Link>
        </div>
      </section>

      <section className="bg-teal-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{service.type}</div>{" "}
                {/* Changed to 'service' */}
                <h1 className="text-3xl font-bold mb-4">
                  {service.service}
                </h1>{" "}
                {/* Changed to 'service' */}
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarker className="text-orange-700 mr-1" />
                  <p className="text-orange-700">{service.location}</p>{" "}
                  {/* Changed to 'service' */}
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-teal-800 text-lg font-bold mb-6">
                  Service Description {/* Updated text */}
                </h3>
                <p className="mb-4">{service.description}</p>{" "}
                {/* Changed to 'service' */}
                <h3 className="text-teal-800 text-lg font-bold mb-2">
                  Fee {/* If applicable, consider renaming to "Price" */}
                </h3>
                <p className="mb-4">{service.priceRange} / Service</p>{" "}
                {/* Changed to 'service' */}
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>
                <h2 className="text-2xl">{service.provider.name}</h2>{" "}
                {/* Changed to 'service' */}
                <p className="my-2">{service.provider.description}</p>{" "}
                {/* Changed to 'service' */}
                <hr className="my-4" />
                <h3 className="text-xl">Contact Email:</h3>
                <p className="my-2 bg-teal-100 p-2 font-bold">
                  {service.provider.contactEmail} {/* Changed to 'service' */}
                </p>
                <h3 className="text-xl">Contact Phone:</h3>
                <p className="my-2 bg-teal-100 p-2 font-bold">
                  {service.provider.contactPhone} {/* Changed to 'service' */}
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Service</h3>{" "}
                {/* Updated text */}
                <Link
                  to={`/edit-service/${service.id}`} // Changed to 'edit-service'
                  className="bg-teal-500 hover:bg-teal-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Edit Service {/* Updated text */}
                </Link>
                <button
                  onClick={() => onDeleteClick(service.id)} // Changed to 'service.id'
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Service {/* Updated text */}
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
  // Renamed function
  const res = await fetch(`/api/services/${params.id}`); // Changed to 'services'
  const data = await res.json();
  return data;
};

export { ServicePage as default, serviceLoader }; // Renamed export
