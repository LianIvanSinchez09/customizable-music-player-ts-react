import { JSX } from "react"
import UserPreviewCard from "./user/UserPreviewCard"
import { getUserData } from "./auth/userData"

const Navbar = ({ token }: { token: string | null }): JSX.Element => {

  const user = getUserData({ token })

  return (
    <ul id="navbar">
        <li><a href="../index.html">Inicio</a></li>
        <li><a href="../pages/buscar.html">Buscar</a></li>
        <li><a href="../pages/categoria.html">Explorar por categoria</a></li>
        <li><a href="../pages/likes.html">Tus me gusta</a></li>
        <li><a href="../pages/perfil.html">Tu perfil</a></li>
        <li><a href="../pages/configuracion.html">Configuracion</a></li>
        <div id="biblioteca"></div>
        <UserPreviewCard user={user}/>

    </ul>
  )
}

export default Navbar
