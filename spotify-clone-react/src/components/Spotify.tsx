const authEndpoint = "https://accounts.spotify.com/authorize?"
const redirectUri = "http://localhost:5175"
const scopes = ["user-library-read", "playlist-read-private"]
const clientID = "a80f93192df64616b72f5ade18bf4753"

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export default loginEndpoint;