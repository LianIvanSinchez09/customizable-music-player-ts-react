import loginEndpoint from "../Spotify"

const Login = () => {
  return (
    <>
        <div>
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="log-in" />
        </div>
        <a href={loginEndpoint}>
            Log in
        </a>
    
    </>
  )
}

export default Login
