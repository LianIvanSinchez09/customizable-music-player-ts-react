import loginEndpoint from "../api/Spotify"
import { useEffect, useState } from "react";
import { getTokenFromUrl, fetchUserData } from "../api/Spotify";
import UserProfile from "../user/UserProfile";


const Login = () => {

  const [token, setToken] = useState<string | null>(null);
  // const [user, setUser] = useState<string | null>(null);
  
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
    <>
        <div>
          <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="log-in" />
          {
            token ? (
              <>
                <p>Actualmente logueado como: </p>
                <UserProfile token={token}/>
            
              </>
            ) :  (
        <a href={loginEndpoint}>
            Log in
        </a>
            )
          }
        </div>
    
    </>
  )
}

export default Login
