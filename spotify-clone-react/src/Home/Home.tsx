import { useContext } from "react"
import Navbar from "../components/Navbar"
// import UserProfile from "../components/user/UserProfile"
import { tokenContext } from "../components/auth/Login"
import ShowPlaylists from "../components/home/ShowPlaylists"

const Home = () => {
  
  const token = useContext(tokenContext)  
  
  return (
    <>
      <Navbar token={token}/>
      <div className="flex justify-center items-center">
        {/* <UserProfile token={token}/> */}
      {/* componente de listas de reproduccion */}
      <ShowPlaylists/>
      </div>
    </>
  )
}

export default Home
