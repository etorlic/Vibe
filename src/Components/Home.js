import React from "react"
import { Box, Button } from "@mui/material"
import LoginToSpotify from "./LoginToSpotify"
import Welcome from "./Welcome"

function Home(props) {
  return (
    <>
      {props.loggedIn ? (
        <LoginToSpotify login={props.spotifyLogin} />
      ) : (
        <Welcome login={props.login} />
      )}
    </>
  )
}

export default Home
