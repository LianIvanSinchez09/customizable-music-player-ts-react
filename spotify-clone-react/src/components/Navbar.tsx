import { JSX } from "react"

const Navbar = (): JSX.Element => {
  return (
    <ul id="navbar">
        <li><a href="../index.html">Inicio</a></li>
        <li><a href="../pages/buscar.html">Buscar</a></li>
        <li><a href="../pages/categoria.html">Explorar por categoria</a></li>
        <li><a href="../pages/likes.html">Tus me gusta</a></li>
        <li><a href="../pages/perfil.html">Tu perfil</a></li>
        <li><a href="../pages/configuracion.html">Configuracion</a></li>
        <li><a href="../pages/test.html">test</a></li>
        {/* <a onClick={}>Limpiar biblioteca</a> */}
        <div id="biblioteca"></div>
    </ul>
  )
}

export default Navbar
