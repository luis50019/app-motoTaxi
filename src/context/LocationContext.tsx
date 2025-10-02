import React, { createContext, ReactNode, useState } from "react";
import { useRealTimeLocation } from "../hooks/Common/useRealTimeLocation";
import { LocationContextType } from "../types/TypesContexts";
import { Address } from "../Interfaces/responseAddress";
import { Coordinates } from "../types/Address";
//* creamos el contexto del tipo de datos LocationContextType
export const LocationContext = createContext<LocationContextType>({
  getLocation: (): Coordinates | null => null,
  location: null,
  address: null,
});

type Props = {
  children: ReactNode;
};

export const LocationProvider = ({ children }: Props) => {
  const { location, address } = useRealTimeLocation();

  const getLocation = () => {
    return location;
  };

  return (
    <LocationContext.Provider value={{ getLocation, location, address }}>
      {children}
    </LocationContext.Provider>
  );
};
