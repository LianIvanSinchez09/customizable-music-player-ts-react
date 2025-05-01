import { useContext, useEffect, useState } from "react"
import { tokenContext } from "../auth/Login"
import { fetchUserPlaylists } from "../api/Spotify"
import { Playlist } from "../../custom-types/Types"

const ShowPlaylists = () => {
  const token = useContext(tokenContext);
  const [userPlaylists, setUserPlaylists] = useState<Playlist[] | null>(null);

  useEffect(() => {
    const loadPlaylists = async () => {
      const playlists = await fetchUserPlaylists(token);
      setUserPlaylists(playlists);
    };
    loadPlaylists();
  }, [token]);

  return (
    <div>
      {userPlaylists?.map((playlist) => (
        <div key={playlist.id}>{playlist.name}</div>
      ))}
    </div>
  );
};


export default ShowPlaylists
