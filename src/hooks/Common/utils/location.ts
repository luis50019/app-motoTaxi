import * as Location from "expo-location";

export async function getAddressFromCoords(
  latitude: number,
  longitude: number,
) {
  try {
    const [address] = await Location.reverseGeocodeAsync({
      latitude,
      longitude,
    });
    return {
      street: address.street || "",
      district: address.district || "",
      neighborhood: address.subregion || "",
      city: address.city || "",
      region: address.region || "",
      country: address.country || "",
    };
  } catch (error) {
    console.error("Error al obtener la direccion: " + error);
    return null;
  }
}
