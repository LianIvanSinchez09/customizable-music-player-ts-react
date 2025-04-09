import Home from "./Home/Home"
import { useEffect, useState } from "react";
import { getTokenFromUrl } from "./components/Spotify";


function App() {

  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = ""; // limpia la URL
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
    }
  }, []);

  return (
    <>
      <Home/>
    </>
  )
}

export default App
