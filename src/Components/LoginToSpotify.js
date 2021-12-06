import React from "react"
import { Box, Button } from "@mui/material"
import VibeAppBar from "./VibeAppBar"

function LoginToSpotify(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify-Logo"
      />
      <Button variant="contained" color="success" href={props.login}>
        LOGIN WITH SPOTIFY
      </Button>
    </Box>
  )
}

export default LoginToSpotify
