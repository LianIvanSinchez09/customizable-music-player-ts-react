import { useContext, useEffect, useState } from "react"
import { tokenContext } from "../auth/Login"
import { fetchUserPlaylists } from "../api/Spotify"
import { Playlist } from "../../custom-types/Types"
import { PlaylistComponent } from "../playlist/PlaylistComponent"


const ShowPlaylists = () => {
  const token = useContext(tokenContext);
  const [userPlaylists, setUserPlaylists] = useState<Playlist[] | null>(null);

  useEffect(() => {
    const loadPlaylists = async () => {
      const playlists = await fetchUserPlaylists(token);
      console.log(playlists);
      
      setUserPlaylists(playlists);
    };
    loadPlaylists();
  }, [token]);

  return (
    <div>
      {userPlaylists?.map((playlist) => (
        <div className="grid grid-cols-2 show-playlist">
          <PlaylistComponent {...playlist}/>
        </div>
      ))}
    </div>
  );
};


export default ShowPlaylists
