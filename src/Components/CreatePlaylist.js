import * as React from "react"
import Box from "@mui/material/Box"
import Slider from "@mui/material/Slider"
import { Typography } from "@mui/material"
import RecordPlayer from "./record.gif"
import RecommendationsList from "./Recommendations/RecommendationsList"

export default function DiscreteSlider() {
  const [danceability, setDanceability] = React.useState(50)
  const [valence, setValence] = React.useState(50)
  const [tempo, setTempo] = React.useState(50)
  const [energy, setEnergy] = React.useState(50)

  const handleChangeDanceability = (event, newValue) => {
    setDanceability(newValue)
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
        Danceability
      </Typography>
      <Slider
        aria-label="Temperature"
        defaultValue={50}
        onChange={handleChangeDanceability}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={99}
      />
      <Typography color="white" gutterBottom>
        Valence
      </Typography>
      <Slider
        aria-label="Temperature"
        defaultValue={50}
        onChange={handleChangeValence}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={99}
      />
      <Typography color="white" gutterBottom>
        Tempo
      </Typography>
      <Slider
        aria-label="Temperature"
        defaultValue={50}
        onChange={handleChangeTempo}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={99}
      />
      <Typography color="white" gutterBottom>
        Energy
      </Typography>
      <Slider
        aria-label="Temperature"
        defaultValue={50}
        onChange={handleChangEnergy}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={0}
        max={99}
      />
    <RecommendationsList danceability={danceability} valence={valence} tempo={tempo} energy={energy}/>
    </Box>
  )
}
