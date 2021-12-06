export const authEndpoint = "https://accounts.spotify.com/authorize"
export const token = "https://accounts.spotify.com/api/token"
export const redirectUri = "http://localhost:3000/"

const scopes = ["streaming", "user-read-email", "user-read-private"]

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}`

// export const tokenUrl = `${token}?grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}&client_secret=${clientSecret}&client_id=${clientId}`
