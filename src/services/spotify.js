export const authEndpoint = "https://accounts.spotify.com/authorize"
export const token = "https://accounts.spotify.com/api/token"
export const redirectUri = "http://localhost:3000/CreatePlaylist"
export const clientId = "49730aa4a8084c0ea53e05d91dd48799"
export const clientSecret = "eefae8adc65c464584b54cb80d54860c"

const scopes = ["streaming", "user-read-email", "user-read-private", "user-top-read"]

export const loginUrl = `${authEndpoint}?client_id=${clientId}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}`

// export const tokenUrl = `${token}?grant_type=authorization_code&code=${code}&redirect_uri=${redirectUri}&client_secret=${clientSecret}&client_id=${clientId}`
