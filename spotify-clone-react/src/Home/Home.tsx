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
      <div className="home">
        <ShowPlaylists/>
      </div>
    </>
  )
}

export default Home
