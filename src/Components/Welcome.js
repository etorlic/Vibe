import React from "react"
import { Box, Button, Typography } from "@mui/material"

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
      <Typography variant="h1" color="primary" sx={{ m: 10 }}>
        Welcome to Vibe{" "}
      </Typography>
      <Button variant="contained" color="primary" onClick={props.login}>
        Login
      </Button>
    </Box>
  )
}

export default Welcome
