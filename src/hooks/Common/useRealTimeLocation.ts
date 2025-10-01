import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { useLocation } from "./utils/location";
import { Coordinates } from "../../types/Address";
import { Address } from "../../Interfaces/responseAddress";

export function useRealTimeLocation() {
  const { getAddressFromCoords } = useLocation();
  const [location, setLocation] = useState<Coordinates | null>(null);

  const [address, setAddress] = useState<Address | null>(null);
  useEffect(() => {
    let subscription: Location.LocationSubscription | null = null;

    async function getLocation() {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("permiso de ubicacion denegado");
        return;
      }

      //?obtener ubicacion inicial
      const current = await Location.getCurrentPositionAsync({});
      setLocation(current.coords);

      //?obtener direccion
      const addr = await getAddressFromCoords(
        current.coords.latitude,
        current.coords.longitude,
      );
      setAddress(addr);

      subscription = await Location.watchPositionAsync(
        { accuracy: Location?.Accuracy.High, distanceInterval: 10 }, // cada 10 metros
        async (loc) => {
          setLocation(loc.coords);
          const newAddr = await getAddressFromCoords(
            loc.coords.latitude,
            loc.coords.longitude,
          );
          setAddress(newAddr);
        },
      );
    }

    getLocation();

    return () => {
      if (subscription) subscription.remove();
    };
  }, []);

  return { location, address };
}
