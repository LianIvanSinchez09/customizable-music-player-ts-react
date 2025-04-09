import { useState, useEffect } from 'react'
import { fetchUserData } from '../api/Spotify'
import type { User } from '../../custom-types/Types'
 
export const getUserData = ({ token }: { token: string }) => {
    
    let userProfile: User = null;

    const [user, setUser] = useState<User | null>(null)
    
    useEffect(() => {
      const getUser = async () => {
      const userData = await fetchUserData(token)
      if(userData){
      userProfile = {
          name: userData.display_name,
          email: userData.email,
          isPremium: userData.product,
          profilePic: userData.images[0].url
        }
        setUser(userProfile)
      }
    }
    getUser()
    }, [token])

    return user;
}
