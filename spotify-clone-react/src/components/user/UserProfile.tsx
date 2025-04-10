import { getUserData } from '../auth/userData'

const UserProfile = ({ token }: { token: string }) => {
  
  let user = getUserData( { token } );

  return (
    <div>
      {user ? <p> Hola, {user.name}</p> : "Cargando usuario...)"}
    </div>
  )
}

export default UserProfile
