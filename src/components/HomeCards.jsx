import React from "react"
import { Link } from "react-router-dom";
import Card from "./Card";

const HomeCards = () => {
  return (
    <section className="py-4">
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
            <h2 className="text-2xl font-bold">For Service Seekers</h2>
            <p className="mt-2 mb-4">
              Explore a variety of local services tailored to your needs.
            </p>
            <Link
              to="/services"
              className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
            >
              Browse Services
            </Link>
          </Card>
          <Card bg="bg-teal-100">
            <h2 className="text-2xl font-bold">For Service Providers</h2>
            <p className="mt-2 mb-4">
              List your services to connect with customers in your area.
            </p>
            <Link
              to="/add-service"
              className="inline-block bg-teal-500 text-white rounded-lg px-4 py-2 hover:bg-teal-600"
            >
              Add Service
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
