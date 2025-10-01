export interface ResponseAddress {
  plus_code: PlusCode;
  results: Result[];
  status: string;
}

interface PlusCode {
  compound_code: string;
  global_code: string;
}

interface Result {
  address_components: AddressComponent[];
  formatted_address: string;
  geometry: Geometry;
  place_id: string;
  types: string[];
}

interface AddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}

interface Geometry {
  location: {
    lat: number;
    lng: number;
  };
  location_type: string;
  viewport: {
    northeast: { lat: number; lng: number };
    southwest: { lat: number; lng: number };
  };
}

export interface Address {
  streetNumber: string;
  neighborhood: string;
  street: string;
  city: string;
  postal_code: string;
  country: string;
  locality: string;
}
