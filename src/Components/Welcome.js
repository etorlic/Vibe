import React from "react"
import { Box, Button, Typography } from "@mui/material"
import logo from "./movie.gif"
import "../App.css"

function Welcome(props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1" color="primary" sx={{ m: 10, textAlign: "center" }}>
        Welcome to Vibe{" "}
      </Typography>
      <img src={logo} alt="loading..." class="recordImg" />
    </Box>
  )
}

export default Welcome
