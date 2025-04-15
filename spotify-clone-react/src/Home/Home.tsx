import { useContext } from "react"
import Navbar from "../components/Navbar"
import UserProfile from "../components/user/UserProfile"
import { tokenContext } from "../components/auth/Login"


const Home = () => {
  
  const token = useContext(tokenContext)  
  
  console.log(token);
  


  return (
    <div>
      <Navbar/>
      <UserProfile token={token}/>
    </div>
  )
}

export default Home
