import { Coordinates, Address } from "./Address";
// ------------------------- LocationContextType ----------------LocationContextType
export type LocationContextType = {
  getLocation: () => Promise<void>;
  location: Coordinates | null;
  address: Address | null;
};
