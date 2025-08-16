import AsyncStorage from "@react-native-async-storage/async-storage";

const TOKEN_KEY = "authToken";

//?Función para almacenar el token
export const saveToken = async(token:string):Promise<void> =>{
  try {
    await AsyncStorage.setItem(TOKEN_KEY,token);
  } catch (error) {
    console.error("error al guardar el token");
  }
  
}

//?Función para obtener el token
export const getToken = async():Promise<string|null> =>{
  try {
    return await AsyncStorage.getItem(TOKEN_KEY);
  } catch (error) {
    console.error("Error al obtener el token")
    return null;
  }
}

//?Función para eliminar el token
export const removeToken = async():Promise<void>=>{
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    console.error("Error al remover el token")
  }
}


