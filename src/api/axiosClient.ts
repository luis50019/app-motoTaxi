import axios from "axios";
import { UserNotFound } from "../errors/UserNotFound";
import { ApiError } from "../errors/ApiError";

//*Declaramos la configuracion de axios
const axiosClient = axios.create({
  //baseURL: "http://192.168.100.7:5000",  // HTTP y puerto mapeado en Docker
  baseURL:"https://microservicios-mototaxis.onrender.com",
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.response.use(
  (response) => response,
  (error) =>{
    if(error.response){
      if(error.response.status == 400){
        throw new UserNotFound(error.response.data.error)
      }
      throw new ApiError(
        error.response.data?.error || "Error en el servidor",
        error.response.status
      )
    }
    throw new ApiError("Error de conexion",500);
  }
)


export default axiosClient;
