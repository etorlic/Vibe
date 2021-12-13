import { Typography } from "@mui/material"
import { Link } from "react-router-dom"

export default function About() {
  return (
    <>
      <Typography variant="h3" sx={{ m: 2, textAlign: "center" }}>
        About
      </Typography>
      <Typography
        variant="h6"
        sx={{ m: 2, paddingLeft: 20, paddingRight: 20, textAlign: "center" }}
      >
        Vibe's aim is to give users an easy way of looking up movies or tv shows on
        streaming services. If you're ever wondering where you can find a movie or tv,
        this is the place. All you have to do is select what genres you're interested in
        and what streaming services you own.
      </Typography>
      <Typography variant="h4" sx={{ mt: 10, textAlign: "center" }}>
        About us
      </Typography>
      <Typography
        variant="h6"
        sx={{ m: 2, paddingLeft: 20, paddingRight: 20, textAlign: "center" }}
      >
        Vibe is a project developed by Justin Yee, Clayton Bruce, Riley Lewis, and Emin
        Torlic. For source code please visit our{" "}
        <a href="https://github.com/etorlic/Vibe" rel="nonferrer">
          Github Repository
        </a>
      </Typography>
    </>
  )
}
