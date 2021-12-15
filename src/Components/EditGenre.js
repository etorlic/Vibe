import { useState, useEffect } from "react"
import { useAuthentication } from "../services/authService.js"


import { EditUserInfo, getUserInfo } from "../services/profileService"




import Box from "@mui/material/Box"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Typography from "@mui/material/Typography"
import { Button } from "@mui/material"





export default function EditGenre() {
  const user = useAuthentication()
  const [userStreaming, setUserStreaming] = useState([])
  useEffect(() => {
    if (user) {
      getUserInfo(user.uid).then(docSnap => {
        const streaming = docSnap.data()["Streaming"]
        setUserStreaming(streaming)
      })
    }
  }, [user])

  const [biography, setBiography] = useState(false)
  const [filmNoir, setFilmNoir] = useState(false)
  const [gameShow, setGameShow] = useState(false)
  const [musical, setMusical] = useState(false)
  const [sport, setSport] = useState(false)
  const [short, setShort] = useState(false)
  const [adult, setAdult] = useState(false)
  const [adventure, setAdventure] = useState(false)


  const handleBiography = () => {
    if (biography) {
      setBiography(false)
    } else {
      setBiography(true)
    }
  }
  const handleFilmNoir = () => {
    if (filmNoir) {
      setFilmNoir(false)
    } else {
      setFilmNoir(true)
    }
  }
  const handleGameShow = () => {
    if (gameShow) {
      setGameShow(false)
    } else {
      setGameShow(true)
    }
  }
  const handleMusical = () => {
    if (musical) {
      setMusical(false)
    } else {
      setMusical(true)
    }
  }
  const handleSport = () => {
    if (sport) {
      setSport(false)
    } else {
      setSport(true)
    }
  }
  const handleShort = () => {
    if (short) {
      setShort(false)
    } else {
      setShort(true)
    }
  }

  const handleAdult = () => {
    if (adult) {
      setAdult(false)
    } else {
      setAdult(true)
    }
  }

  const handleAdventure = () => {
    if (adventure) {
      setAdventure(false)
    } else {
      setAdventure(true)
    }
  }

  const updateStream = () => {
    console.log("here")
    const result = []
    if (biography) {
      result.push("1")
    }
    if (filmNoir) {
      result.push("2")
    }
    if (gameShow) {
      result.push("3")
    }
    if (musical) {
      result.push("4")
    }
    if (sport) {
      result.push("5")
    }

    EditUserInfo(user.displayName, userStreaming, result, user.uid)
  }
  return (
    <Box
      color="white"
      sx={{
        width: "50vw",
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        margin: "auto",
      }}
    >
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Select Genre
      </Typography>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox onChange={handleBiography} />}
          label="Biography"
        />
        <FormControlLabel
          control={<Checkbox onChange={handleFilmNoir} />}
          label="Film Noir"
        />
        <FormControlLabel
          control={<Checkbox onChange={handleGameShow} />}
          label="Game Show"
        />
        <FormControlLabel
          control={<Checkbox onChange={handleMusical} />}
          label="Musical"
        />
        <FormControlLabel
          control={<Checkbox onChange={handleSport} />}
          label="Sport"
        />
        <FormControlLabel
          control={<Checkbox onChange={handleShort} />}
          label="Short"
        />
        <FormControlLabel
          control={<Checkbox onChange={handleAdult} />}
          label="Adult"
        />
        <FormControlLabel
          control={<Checkbox onChange={handleAdventure} />}
          label="Adventure"
        />
      </FormGroup>
      <Button id="submitButton" variant="contained" onClick={updateStream}>
        Update Streaming Service
      </Button>
    </Box>
  )
}
