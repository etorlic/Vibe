import { useState, useEffect } from "react"

import Box from "@mui/material/Box"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Typography from "@mui/material/Typography"
import { Button } from "@mui/material"

export default function EditGenre() {
  const [genre, setGenre] = useState(1)

  function handleOnChange(e) {
    console.log("selected option", e.target.value)
    setGenre(e.target.value)
  }

  useEffect(() => {
    setGenre(genre)
  }, [genre])

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
          control={<Checkbox onChange={handleOnChange} />}
          label="Biography"
        />
        <FormControlLabel
          control={<Checkbox onChange={handleOnChange} />}
          label="Film Noir"
        />
        <FormControlLabel
          control={<Checkbox onChange={handleOnChange} />}
          label="Game Show"
        />
        <FormControlLabel
          control={<Checkbox onChange={handleOnChange} />}
          label="Musical"
        />
        <FormControlLabel
          control={<Checkbox onChange={handleOnChange} />}
          label="Sport"
        />
        <FormControlLabel
          control={<Checkbox onChange={handleOnChange} />}
          label="Short"
        />
        <FormControlLabel
          control={<Checkbox onChange={handleOnChange} />}
          label="Adult"
        />
        <FormControlLabel
          control={<Checkbox onChange={handleOnChange} />}
          label="Adventure"
        />
      </FormGroup>
      <Button id="submitButton" variant="contained">
        Update Genres
      </Button>
    </Box>
  )
}
