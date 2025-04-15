import Login from "./components/auth/Login"
import Home from "./Home/Home"

function App() {

  return (
    <>
      <Login children={<Home/>}/>
    </>
  )
}

export default App
