import { Coordinates } from "./Address";
import { Address } from "../Interfaces/responseAddress";
// ------------------------- LocationContextType ----------------LocationContextType
export type LocationContextType = {
  getLocation: () => Coordinates | null;
  location: Coordinates | null;
  address: Address | null;
};
