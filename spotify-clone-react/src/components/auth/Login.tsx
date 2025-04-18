import loginEndpoint from "../api/Spotify"
import { createContext, useEffect, useState } from "react";
import { getTokenFromUrl, fetchUserData } from "../api/Spotify";
import type { Children } from "../../custom-types/Types";

export const tokenContext = createContext<string | null>(null);

const Login = ( { children }: Children ) => {
  const [token, setToken] = useState<string | null>(null);
  
  
  //ocultar token de usuario
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    
    if (_token) {
      setToken(_token);
      fetchUserData(_token)
    }
    
  }, []);
  
  console.log(token);
  
  
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
