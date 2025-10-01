import React, { createContext, ReactNode, useState } from "react";
import { useRealTimeLocation } from "../hooks/Common/useRealTimeLocation";
import { LocationContextType } from "../types/TypesContexts";
import { Address } from "../Interfaces/responseAddress";
//* creamos el contexto del tipo de datos LocationContextType
export const LocationContext = createContext<LocationContextType>({
  getLocation: async () => {},
  location: null,
  address: null,
});

type Props = {
  children: ReactNode;
};

export const LocationProvider = ({ children }: Props) => {
  const { location, address } = useRealTimeLocation();
  //TODO: obtener la direccion con las coordenadas que contiene location
  const getLocation = async () => {};

  return (
    <LocationContext.Provider value={{ getLocation, location, address }}>
      {children}
    </LocationContext.Provider>
  );
};
