import loginEndpoint from "../api/Spotify"
import { createContext, useEffect, useState } from "react";
import { getTokenFromUrl, fetchUserData } from "../api/Spotify";
import type { Children } from "../../custom-types/Types";

//hacer que este contexto sea el de localstorage
export const tokenContext = createContext<string | null>(null);



const Login = ( { children }: Children ) => {
  
  const [token, setToken] = useState<string | null>(localStorage.getItem("currentUserToken"));
  
  const setLocalStorage = (value: string) => {
    try {
      setToken(value)
      localStorage.setItem("currentUserToken", value)
    }catch{
      console.error(Error)
    }
  }
  //ocultar token de usuario
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    console.log("hola");
    
    if (_token) {
      setLocalStorage(_token)
      fetchUserData(_token)
    }
    
  });
  
  return (
    <tokenContext.Provider value={token}>
        <div>
          {
            token ? (
              <>
                { children }
              </>
            ) :  (
        <a href={loginEndpoint}>
            Log in
        </a>
            )
          }
        </div>
    
    </tokenContext.Provider>
  )
}

/**
 * const Login = ( { children }: Children ) => {
  
  let tokenBackup: string | null = localStorage.getItem("currentUserToken")
  const [token, setToken] = useState<string | null>(null)


  if(localStorage.getItem("currentUserToken") != ""){
    useEffect(() => {
      setToken(token)
      fetchUserData(token)
    }, [])
  }
  else{
    useEffect(() => {
      const hash = getTokenFromUrl();
      window.location.hash = "";
      const _token = hash.access_token;
      
      if (_token) {
        localStorage.setItem("currentUserToken", _token)
        setToken(localStorage.getItem("currentUserToken"))
        fetchUserData(_token)
      }
    }, []);
  }
 * 
 */


export default Login
