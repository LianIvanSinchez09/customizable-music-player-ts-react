import { useContext } from "react"
import Navbar from "../components/Navbar"
import UserProfile from "../components/user/UserProfile"
import { tokenContext } from "../components/auth/Login"


const Home = () => {
  
  const token = useContext(tokenContext)  
  



  return (
    <>
      <Navbar token={token}/>
      <div className="flex justify-center items-center">
        <UserProfile token={token}/>
      </div>
    </>
  )
}

export default Home
