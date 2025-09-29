import { useEffect, useState } from "react";
import { ErrorAuth } from "../types/ErrorAuth";
import { LoginForm } from "../types/LoginForm";
import { UserNotFound } from "../errors/UserNotFound";
import { login } from "../services/auth.service";
import { ApiError } from "../errors/ApiError";

type UseAuthReturn = {
  AuthLogin: (data: LoginForm) => Promise<void>;
  errorMessage: ErrorAuth;
};

type responseData = {
  token: string;
  typeUser: string;
  idUser: string;
};
//credenciales para el inicio de sesion como Intente
//telefono: 9511363940
//contraseña luis2010

//?Por si las moscas revisa todo este archivo, no recuerdo si lo modifique23
export const UseAuth = (): UseAuthReturn => {
  const [errorMessage, setErrorMessage] = useState<ErrorAuth>({
    error: "",
    detail: "",
  });

  const handlerError = (message: string, detail: string) => {
    setErrorMessage({
      error: message,
      detail,
    });
  };

  const AuthLogin = async (data: LoginForm): responseData => {
    try {
      const newPhone = {
        number: data.phone,
        countrycode: "+52",
        verified: false,
      };
      console.log("entrando para validar");
      const response = await login(newPhone, data.password);
      console.log(response);
      return new responseData(response.token);
    } catch (error) {
      console.log(error);
      if (error instanceof UserNotFound) {
        handlerError(
          error.message,
          "Los datos que ingresaste no son correctos",
        );
      } else if (error instanceof ApiError) {
        handlerError(
          error.message,
          "Por el momento no esta disponible la aplicacion",
        );
      } else {
        handlerError("Error inesperado", "Intente nuevamente mas tarde");
      }
    }
  };

  useEffect(() => {
    const reloadMessage = setTimeout(() => {
      setErrorMessage({
        error: "",
        detail: "",
      });
    }, 20000);

    return () => clearTimeout(reloadMessage);
  }, [errorMessage]);

  return { AuthLogin, errorMessage };
};
