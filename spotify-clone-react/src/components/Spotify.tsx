const authEndpoint = "https://accounts.spotify.com/authorize?"
const redirectUri = "http://localhost:5175"
const scopes = ["user-library-read", "playlist-read-private", "user-read-private", "user-read-email"]
const clientID = "a80f93192df64616b72f5ade18bf4753"

const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
  return window.location.hash
  .substring(1)
  .split("&")
  .reduce((acc: any, item) => {
    let parts = item.split("=");
    acc[parts[0]] = decodeURIComponent(parts[1]);
    return acc;
  }, {});
};

export const getUserData = async (token: string) => {
  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();
  console.log(data);
  return data;
};


export default loginEndpoint;