import loginEndpoint from "../api/Spotify"
import { createContext, useEffect, useState } from "react";
import { getTokenFromUrl, fetchUserData } from "../api/Spotify";
import type { Children } from "../../custom-types/Types";
import { setLocalStorage } from "../custom-hooks/hooks";


//hacer que este contexto sea el de localstorage
export const tokenContext = createContext<string | null>(null);



const Login = ( { children }: Children ) => {
  
  const [token, setToken] = useState<string | null>(localStorage.getItem("currentUserToken"));
  
  //ocultar token de usuario
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    
    if (_token) {
      setLocalStorage(_token, setToken)
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
export default Login
