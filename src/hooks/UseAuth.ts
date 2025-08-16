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

export const UseAuth = ():UseAuthReturn =>{
  const [errorMessage,setErrorMessage] = useState<ErrorAuth>({error:"",detail:""});
  
    const handlerError =( message:string,detail:string)=>{
      setErrorMessage({
        error:message,
        detail
      })
    }

    const AuthLogin = async (data: LoginForm) => {
      try {
        const newPhone = {
          number: data.phone,
          countrycode: "+52",
          verified: false,
        };
        const res = await login(newPhone, data.password);
        return res;
      } catch (error) {
        if(error instanceof UserNotFound){
          handlerError(error.message,"Los datos que ingresaste no son correctos")
        }else if(error instanceof ApiError){
          handlerError(error.message,"Por el momento no esta disponible la aplicacion")
        }else{
          handlerError("Error inesperado","Intente nuevamente mas tarde")
        }
      }
    };
  
    useEffect(()=>{
      const reloadMessage = setTimeout(() => {
        setErrorMessage({
          error:"",
          detail:""
        })
      }, 20000);
  
      return ()=> clearTimeout(reloadMessage);
  
    },[errorMessage])

  return {AuthLogin,errorMessage}
}
