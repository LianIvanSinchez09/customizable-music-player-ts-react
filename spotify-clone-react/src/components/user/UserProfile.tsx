import { useEffect, useState } from 'react'
import { getUserData } from '../Spotify'


const UserProfile = ({ token }: { token: string }) => {
  
  const [user, setUser] = useState<any>(null)
  type User = {
    name: string,
    email: string,
    isPremium: string,
    profilePic: string
  }


  useEffect(() => {
  const getUser = async () => {
    const userData = await getUserData(token)
    const userProfile: User = {
      name: userData.display_name,
      email: userData.email,
      isPremium: userData.product,
      profilePic: userData.images[0].url
    }
    setUser(userProfile)
  }
  getUser()
  }, [token])

  console.log(user);
  


  return (
    <div>
      {user ? <p> Hola, {user.name}</p> : "Cargando usuario...)"}
    </div>
  )
}

export default UserProfile
