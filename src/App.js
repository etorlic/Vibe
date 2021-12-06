import "./App.css"
import { SignIn, SignOut, useAuthentication } from "./services/authService.js"
import ProfileCard from "./Components/ProfileCard"
import LoginToSpotify from "./Components/LoginToSpotify"
import VibeAppBar from "./Components/VibeAppBar"
import CreatePlaylist from "./Components/CreatePlaylist"
import { useEffect, useState } from "react"
import Home from "./Components/Home"
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom"
import { authEndpoint, clientId, redirectUri, scopes, loginUrl } from "./services/spotify"

const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function (initial, item) {
    if (item) {
      var parts = item.split("=")
      initial[parts[0]] = decodeURIComponent(parts[1])
    }
    return initial
  }, {})

export default function App() {
  const user = useAuthentication()
  const [currentTab, setCurrentTab] = useState("Home")
  const [auth_token, setToken] = useState()
  useEffect(() => {
    let token = hash.access_token
    if (token) {
      setToken(token)
      console.log(token)
    }
  }, [])

  function HomeScreen() {
    return (
      <>
        {!auth_token ? (
          user ? (
            <Home loggedIn={true} spotifyLogin={loginUrl} spotifyAuth={false} />
          ) : (
            <Home loggedIn={false} login={SignIn} spotifyAuth={false} />
          )
        ) : (
          <Redirect to="/CreatePlaylist" />
        )}
      </>
    )
  }

  return (
    <>
      <Router>
        {!user ? (
          <VibeAppBar
            loggedIn={false}
            login={SignIn}
            logout={SignOut}
            setCurrentTab={setCurrentTab}
          />
        ) : (
          <VibeAppBar
            loggedIn={true}
            login={SignIn}
            logout={SignOut}
            setCurrentTab={setCurrentTab}
          />
        )}
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/home" component={HomeScreen} />
        </Switch>
      </Router>
    </>
  )
}
