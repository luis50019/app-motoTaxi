import * as Location from "expo-location";
import { ResponseAddress } from "../../../Interfaces/responseAddress";
//https://maps.googleapis.com/maps/api/geocode/json?latlng=37.4222804,-122.0843428&key=TU_API_KEY_AQUI
const API_KEY = "AIzaSyDIrpCNK96weWpWYmOxt87rDjlPw2_z9mk";
interface info {
  long_name: String;
  short_name: String;
  types: string[];
}

const getInfoAddress = (infoAdress: info[]) => {
  const responseAddress = {
    street_number: "",
    route: "",
    political: "",
    administrative_area_level_1: "",
    country: "",
    postal_code: "",
    locality: "",
  };

  infoAdress.map((item: info) => {
    if (responseAddress.hasOwnProperty(item.types[0])) {
      (responseAddress as any)[item.types[0]] = item.short_name;
    }
  });

  return responseAddress;
};

export const useLocation = () => {
  async function getAddressFromCoords(latitude: number, longitude: number) {
    //TODO: realizar un metodo de busqueda para encontrar la siguiente infomacion
    //* calle, municipio, colina, numero de calle,

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${API_KEY}`,
      );
      const data: ResponseAddress = await response.json();

      const address = getInfoAddress(data.results[0].address_components);
      return {
        streetNumber: address.street_number || "",
        neighborhood: address.political || "",
        street: address.route || "",
        city: address.administrative_area_level_1 || "",
        postal_code: address.postal_code || "",
        country: address.country || "",
        locality: address.locality || "",
      };
    } catch (error) {
      console.error("Error al obtener la direccion: " + error);
      return null;
    }
  }

  return { getAddressFromCoords };
};
