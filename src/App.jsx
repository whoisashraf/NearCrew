import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage"; // Updated to ServicesPage
import NotFoundPage from "./pages/NotFoundPage";
import ServicePage, { serviceLoader } from "./pages/ServicePage"; // Updated to ServicePage
import AddServicePage from "./pages/AddServicePage"; // Updated to AddServicePage
import EditServicePage from "./pages/EditServicePage"; // Updated to EditServicePage

const App = () => {
  // Add New Service
  const addService = async (newService) => {
    const res = await fetch("/api/services", {
      // Updated API endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newService),
    });
    return res.json(); // Return the response data if needed
  };

  // Delete Service
  const deleteService = async (id) => {
    const res = await fetch(`/api/services/${id}`, {
      // Updated API endpoint
      method: "DELETE",
    });
    return res.json(); // Return the response data if needed
  };

  // Update Service
  const updateService = async (service) => {
    const res = await fetch(`/api/services/${service.id}`, {
      // Updated API endpoint
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    });
    return res.json(); // Return the response data if needed
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route
          path="/add-service"
          element={<AddServicePage addServiceSubmit={addService} />}
        />{" "}
        <Route
          path="/edit-service/:id"
          element={<EditServicePage updateServiceSubmit={updateService} />}
          loader={serviceLoader} // Updated to serviceLoader
        />
        <Route
          path="/services/:id"
          element={<ServicePage deleteService={deleteService} />}
          loader={serviceLoader} // Updated to serviceLoader
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
