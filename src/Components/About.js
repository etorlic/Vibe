import { Typography } from "@mui/material"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <>
      <Typography color="white" variant="h3" sx={{ m: 2, textAlign: "center" }}>
        About
      </Typography>
      <Typography
        color="white"
        variant="h6"
        sx={{ m: 2, paddingLeft: 20, paddingRight: 20, textAlign: "center" }}
      >
        Vibe's aim is to give users an easy way of looking up movies or tv shows on
        streaming services. If you've ever wanted to find a hidden movie or tv show
        specific to your liking, this is the place. All you have to do is select what
        genres that you're interested in and what streaming services you own, and then you
        just sit back and let us do the rest!
      </Typography>
      <Typography color="white" variant="h4" sx={{ mt: 10, textAlign: "center" }}>
        About us
      </Typography>
      <Typography
        color="white"
        variant="h6"
        sx={{ m: 2, paddingLeft: 20, paddingRight: 20, textAlign: "center" }}
      >
        Vibe is a project developed by Justin Yee, Clayton Bruce, Riley Lewis, and Emin
        Torlic. For source code please visit our{" "}
        <a id="link" href="https://github.com/etorlic/Vibe" rel="nonferrer">
          Github Repository
        </a>
      </Typography>
    </>
  )
}
