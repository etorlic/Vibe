import {useState, useEffect} from "react"

import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { Button } from "@mui/material"


export default function EditGenre() {
    const [genre, setGenre] = useState(1)

    function handleOnChange(e) {
      console.log('selected option', e.target.value);
      setGenre(e.target.value);
    }

    useEffect(() => {
      setGenre(genre)
    },[genre])

    return (
        <Box
      sx={{
        width: "50vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        margin: "auto",
      }}
    >
      <Typography variant="h4"> Select Genre</Typography>
      <input type="radio" value="1" name="gender" onChange={handleOnChange} /> Biography
      <input type="radio" value="2" name="gender" onChange={handleOnChange} /> Film Noir
      <input type="radio" value="3" name="gender" onChange={handleOnChange} /> Game Show
      <input type="radio" value="4" name="gender" onChange={handleOnChange} /> Musical
      <input type="radio" value="5" name="gender" onChange={handleOnChange} /> Sport
      <input type="radio" value="6" name="gender" onChange={handleOnChange} /> Short
      <input type="radio" value="7" name="gender" onChange={handleOnChange} /> Adult
      <input type="radio" value="12" name="gender" onChange={handleOnChange} /> Adventure
      <Button variant="contained">
        Update Streaming Service
      </Button>
    </Box>
        
    )
}
