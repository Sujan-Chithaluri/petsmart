import React, { createContext } from "react";
import all_services from "../Components/Assets/all_services";
import { useState } from "react";
import { useContext } from "react";

const ServiceContext = createContext();

export const ServiceProvider = ({ children }) => {
  const contextValue = all_services;

  const [serviceDetails, setServiceDetails] = useState(all_services[0]);

  const setServiceToCtx = (itemId) => {
    const service = all_services.find(
      (ser) => ser.id.toString() === itemId.toString()
    );

    setServiceDetails(service);
  };

  return (
    <ServiceContext.Provider
      value={{ contextValue, serviceDetails, setServiceToCtx }}
    >
      {children}
    </ServiceContext.Provider>
  );
};

export const useService = () => {
  return useContext(ServiceContext);
};
