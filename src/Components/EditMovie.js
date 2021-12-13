import { useEffect, useState, cloneElement } from "react"
import { SignIn, SignOut, useAuthentication } from "../services/authService.js"

import Box from "@mui/material/Box"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Typography from "@mui/material/Typography"
import { Button } from "@mui/material"
import { EditUserInfo } from "../services/profileService"

export default function EditMovie() {
  const user = useAuthentication()
  const [disney, setDisney] = useState(false)
  const [hulu, setHulu] = useState(false)
  const [netflix, setNetflix] = useState(false)
  const [hbo, setHbo] = useState(false)
  const [amazon, setAmazon] = useState(false)

  const handleDisney = () => {
    if (disney) {
      setDisney(false)
    } else {
      setDisney(true)
    }
  }
  const handleHulu = () => {
    if (hulu) {
      setHulu(false)
    } else {
      setHulu(true)
    }
  }
  const handleHbo = () => {
    if (hbo) {
      setHbo(false)
    } else {
      setHbo(true)
    }
  }
  const handleNetflix = () => {
    if (netflix) {
      setNetflix(false)
    } else {
      setNetflix(true)
    }
  }
  const handleAmazon = () => {
    if (amazon) {
      setAmazon(false)
    } else {
      setAmazon(true)
    }
  }

  const updateStream = () => {
    console.log("here")
    const result = []
    if (disney) {
      result.push("disney")
    }
    if (hulu) {
      result.push("hulu")
    }
    if (hbo) {
      result.push("hbo")
    }
    if (netflix) {
      result.push("netflix")
    }
    if (amazon) {
      result.push("prime")
    }

    EditUserInfo(user.displayName, result, user.uid)
  }
  return (
    <Box
      color="white"
      sx={{
        width: "50vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        margin: "auto",
      }}
    >
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Select Streaming Services
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox onChange={handleDisney} />}
          label="Disney+"
        />
        <FormControlLabel control={<Checkbox onChange={handleHulu} />} label="Hulu" />
        <FormControlLabel control={<Checkbox onChange={handleHbo} />} label="HBO max" />
        <FormControlLabel
          control={<Checkbox onChange={handleNetflix} />}
          label="Netflix"
        />
        <FormControlLabel
          control={<Checkbox onChange={handleAmazon} />}
          label="Amazon Prime Video"
        />
      </FormGroup>
      <Button variant="contained" onClick={updateStream}>
        Update Streaming Service
      </Button>
    </Box>
  )
}
