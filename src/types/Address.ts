export type AddressResponse = {
  route: Route;
  street_number: StreetNumber;
  postal_code: PostalCode;
  area_level_1: Area_level_1;
  area_level_2: Area_level_2;
  sublocality: Sublocality;
  country: Country;
};

//* informacion de la calle
type Route = {
  long_name: string;
  short_name: string;
};
//* Numero de calle
type StreetNumber = {
  long_name: number;
  short_name: number;
};
//* codigo postal
type PostalCode = {
  long_name: number;
  short_name: number;
};
//* estado
type Area_level_1 = {
  long_name: string;
  short_name: string;
};
//* municipio
type Area_level_2 = {
  long_name: number;
  short_name: number;
};
//* colonia
type Sublocality = {
  long_name: number;
  short_name: number;
};
//*country
type Country = {
  long_name: number;
  short_name: number;
};

// --------------------- Coordinates
export interface Coordinates {
  latitude: number;
  longitude: number;
  altitude: number | null;
  accuracy: number | null;
  altitudeAccuracy?: number | null;
  heading?: number | null;
  speed?: number | null;
}
