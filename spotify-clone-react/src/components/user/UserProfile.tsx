import { getUserData } from '../auth/userData'

const UserProfile = ({ token }: { token: string | null }) => {
  
  const user = getUserData( { token } );
  console.log(user);

  return (
    <>
      {user ? <p> Hola, {user?.name}</p> : "Cargando usuario...)"}
    </>
  )
}

export default UserProfile
