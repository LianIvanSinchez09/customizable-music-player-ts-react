import { useContext } from "react"
import { fetchUserPlaylists } from "../api/Spotify"
import { tokenContext } from "../auth/Login"

const ShowPlaylists = () => {
  const token = useContext(tokenContext)
  const userPlaylists = fetchUserPlaylists(token)
  
  console.log(userPlaylists);
  return (
    <div>
      {/* {
        token ? 
        userPlaylists.items.map(() =>{

        })
      } */}
    </div>
  )
}

export default ShowPlaylists
