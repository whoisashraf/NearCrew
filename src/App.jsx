import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage"; 
import NotFoundPage from "./pages/NotFoundPage";
import ServicePage, { serviceLoader } from "./pages/ServicePage"; 
import AddServicePage from "./pages/AddServicePage"; 
import EditServicePage from "./pages/EditServicePage"; 

const App = () => {
  const addService = async (newService) => {
    const res = await fetch("/api/services", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newService),
    });
    return res.json(); 
  };

  const deleteService = async (id) => {
    const res = await fetch(`/api/services/${id}`, {
      method: "DELETE",
    });
    return res.json(); 
  };

  const updateService = async (service) => {
    const res = await fetch(`/api/services/${service.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(service),
    });
    return res.json(); 
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
          loader={serviceLoader} 
        />
        <Route
          path="/services/:id"
          element={<ServicePage deleteService={deleteService} />}
          loader={serviceLoader} 
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
