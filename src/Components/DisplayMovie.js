import { useEffect, useState, cloneElement } from "react"
import { SignIn, SignOut, useAuthentication } from "../services/authService"
import Typography from "@mui/material/Typography"
import { getUserInfo } from "../services/profileService"
import TableContainer from "@mui/material/TableContainer"
import Table from "@mui/material/Table"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableCell from "@mui/material/TableCell"
import TableBody from "@mui/material/TableBody"

export default function DisplayMovie() {
  const user = useAuthentication()
  const [userStreaming, setUserStreaming] = useState([])
  const [huluRec, setHuluRec] = useState([])
  const [netflixRec, setNetflixRec] = useState([])
  const [disneyRec, setDisneyRec] = useState([])
  const [primeRec, setPrimeRec] = useState([])
  const [hboRec, setHboRec] = useState([])
  const [movieRec, setMovieRec] = useState({})

  const getMovieRec = provider => {
    return fetch(
      `https://streaming-availability.p.rapidapi.com/search/basic?country=us&service=${provider}&type=movie&page=1&output_language=en&language=en`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "streaming-availability.p.rapidapi.com",
          "x-rapidapi-key": "cf8094ad0bmsh6e650a080c056aap188d61jsn6eb1260e61fa",
        },
      }
    )
      .then(response => {
        return response.json().then(data => {
          const currentMovies = {}
          currentMovies[provider] = data.results
          return currentMovies
        })
      })
      .catch(err => {
        console.error(err)
      })
  }
  useEffect(() => {
    if (user) {
      getUserInfo(user.uid).then(docSnap => {
        const streaming = docSnap.data()["Streaming"]
        setUserStreaming(streaming)
      })
    }
  }, [user])
  useEffect(() => {
    const promise = []
    if (userStreaming.length > 0) {
      for (let i = 0; i < userStreaming.length; i++) {
        promise.push(getMovieRec(userStreaming[i]))
      }
      Promise.all(promise).then(data => {
        const totalMovieData = {}
        data.map(streamService => {
          Object.entries(streamService).map(([provider, movie]) => {
            totalMovieData[provider] = movie
          })
        })
        console.log(totalMovieData)
        setMovieRec(totalMovieData)
      })
    }
  }, [userStreaming])
  return (
    <>
      {Object.entries(movieRec).length > 0 ? (
        <TableContainer>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Movie</TableCell>
                <TableCell align="center">Poster</TableCell>
                <TableCell align="center">Imbd Rating</TableCell>
                <TableCell align="center">Streaming Service Link</TableCell>
                <TableCell align="right">Streaming Service</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {Object.entries(movieRec).map(([provider, movie]) => {
                return movie.map(movieInfo => {
                  return (
                    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                      <TableCell
                        key={movieInfo.title + provider}
                        component="th"
                        scope="row"
                      >
                        {movieInfo.title}
                      </TableCell>
                      <TableCell
                        key={movieInfo.title + "poster"}
                        component="th"
                        scope="row"
                        align="center"
                      >
                        <a href={movieInfo.posterURLs.original}>
                          <img
                            alt="Qries"
                            src={movieInfo.posterURLs.original}
                            width="20%"
                            height="20%"
                          />
                        </a>
                      </TableCell>
                      <TableCell
                        key={movieInfo.title + "imdb"}
                        component="th"
                        scope="row"
                        align="center"
                      >
                        {movieInfo.imdbRating}
                      </TableCell>
                      <TableCell key={movieInfo.title + "streamlink"} align="right">
                        <a href={movieInfo.streamingInfo[provider].us.link}>
                          {movieInfo.streamingInfo[provider].us.link}
                        </a>
                      </TableCell>
                      <TableCell key={movieInfo.title + "stream"} align="right">
                        {provider.toUpperCase()}
                      </TableCell>
                    </TableRow>
                  )
                })
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Text only
        </Typography>
      )}
    </>
  )
}