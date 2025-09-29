import { loginRequest } from "../api/auth.api";
import { ApiError } from "../errors/ApiError";
import { UserNotFound } from "../errors/UserNotFound";

export const login = async (phone: object, password: string) => {
  try {
    const data = await loginRequest(phone, password);
    return data;
  } catch (error) {
    if (error instanceof UserNotFound) {
      throw new UserNotFound(error.message);
    } else if (error instanceof ApiError) {
      throw new ApiError("Error del servidor", 500);
    } else {
      throw new Error("Error inesperado");
    }
  }
};

