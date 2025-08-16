import React, { createContext, ReactNode, useEffect, useState } from "react";
import { getToken, removeToken, saveToken } from "../storage/authStorage";

type AutContextType = {
  token:string|null;
  login: (newToken:string) => Promise<void>;
  logout:()=>Promise<void>;
}

export const AuthContext =  createContext<AutContextType>({
  token: null,
  login: async()=>{},
  logout:async ()=>{}
});

type Props = {
  children:ReactNode;
};

export const AuthProvider = ({children}: Props)=>{

  const [token,setToken] = useState<string | null>(null);

  useEffect(()=>{
    const loadToken = async()=>{
      const storedToken = await getToken();
      if(storedToken) setToken(storedToken)
    }
    loadToken();

  },[])

  //!Modificar logica
  const login = async (newToken:string) =>{
    await saveToken(newToken);
    setToken(newToken);
  }

  //!Modificar logica
  const logout = async()=>{
    await removeToken();
    setToken(null);
  }

  return(
    <AuthContext.Provider value={{login,logout,token}} >
      {children}
    </AuthContext.Provider>
  )


}

