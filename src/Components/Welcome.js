import React from "react"
import { Link } from "react-router-dom"
import { Box, Button, Typography } from "@mui/material"
//import logo from "./vibe.png"
import "../App.css"

function Welcome(props) {
  return (
    <>
      <Box
        id="welcomeScreen"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography id="welcomeHeading" variant="h1" sx={{ mt: 15, textAlign: "center" }}>
          Welcome to Vibe{" "}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            paddingLeft: 20,
            paddingRight: 20,
            textAlign: "center",
            fontStyle: "italic",
          }}
        >
          Looking for a Movie or TV show you want to watch but don't know where to stream
          it?
        </Typography>
        <Typography variant="h6" sx={{ mt: 10, textAlign: "center" }}>
          Display the movies/tv shows available with your given genres and streaming
          services at{" "}
          <Link id="link" to="/DisplayMovie">
            Display Movie
          </Link>
        </Typography>
        <Typography variant="h6" sx={{ m: "5px", textAlign: "center" }}>
          Select the genres you are interested in browsing at{" "}
          <Link id="link" to="/EditGenre">
            Select Genre
          </Link>
        </Typography>
        <Typography variant="h6" sx={{ m: "5px", textAlign: "center" }}>
          Edit the streaming services you are subscribed to at{" "}
          <Link id="link" to="/EditMovie">
            Edit Streaming Services
          </Link>
        </Typography>
        <Typography variant="h6" sx={{ m: "5px", textAlign: "center" }}>
          Learn more about us at{" "}
          <Link id="link" to="/About">
            About
          </Link>
          !
        </Typography>
      </Box>
    </>
  )
}

export default Welcome
//<img src={logo} alt="loading..." class="recordImg" />
