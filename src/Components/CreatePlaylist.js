import * as React from "react"
import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"
import { Typography } from "@mui/material"
import RecordPlayer from "./record.gif"

export default function DiscreteSlider() {
  const [dancibility, setDancibility] = React.useState(50)
  const [valence, setValence] = React.useState(50)
  const [tempo, setTempo] = React.useState(50)
  const [energy, setEnergy] = React.useState(50)

  const handleChangeDancibility = (event, newValue) => {
    setDancibility(newValue)
  }

  const handleChangeValence = (event, newValue) => {
    setValence(newValue)
  }

  const handleChangeTempo = (event, newValue) => {
    setTempo(newValue)
  }

  const handleChangEnergy = (event, newValue) => {
    setEnergy(newValue)
  }
  return (
    <Box
      sx={{
        width: "50vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto   ",
      }}
    >
      <Box
        sx={{
          mt: -8,
          mb: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography color="white" variant="h2" gutterBottom>
          Select Your Type of Music
        </Typography>
        <img src={RecordPlayer} alt="loading..." />
      </Box>

      <Typography color="white" gutterBottom>
        Dancibility
      </Typography>
      <Slider
        aria-label="Temperature"
        defaultValue={50}
        onChange={handleChangeDancibility}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
      <Typography color="white" gutterBottom>
        Valence
      </Typography>
      <Slider
        aria-label="Temperature"
        defaultValue={50}
        onChange={handleChangeValence}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
      <Typography color="white" gutterBottom>
        Tempo
      </Typography>
      <Slider
        aria-label="Temperature"
        defaultValue={50}
        onChange={handleChangeTempo}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
      <Typography color="white" gutterBottom>
        Energy
      </Typography>
      <Slider
        aria-label="Temperature"
        defaultValue={50}
        onChange={handleChangEnergy}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={0}
        max={100}
      />
    </Box>
  )
}
