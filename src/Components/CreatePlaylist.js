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

// const hash = window.location.hash
//   .substring(1)
//   .split("&")
//   .reduce(function (initial, item) {
//     if (item) {
//       var parts = item.split("=")
//       initial[parts[0]] = decodeURIComponent(parts[1])
//     }
//     return initial
//   }, {})

// export default function CreatePlaylist() {
//   let storedToken = JSON.parse(sessionStorage.getItem("token"))
//   let expiresAt = null
//   let isExpired = false
//   const [mood, setMood] = useState(0.5)
//   const [minValence, setMinValence] = useState(0.5)
//   const [maxValence, setMaxValence] = useState(0.5)
//   const [minDancibility, setMinDancibility] = useState(0.5)
//   const [maxDancibility, setMaxDancibility] = useState(0.5)
//   const [minEnergy, setMinEnergy] = useState(0.5)
//   const [maxEnergy, setMaxEnergy] = useState(0.5)
//   const [playlistURI, setPlaylistURI] = useState()

<<<<<<< HEAD
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
      </Box>
=======
//   const [topArtists, setTopArtists] = useState([])
//   const [topArtistsURI, setTopArtistsURI] = useState([])
//   const [topTracks, setTopTracks] = useState([])
//   const [topTracksURI, setTopTracksURI] = useState([])
//   const [auth_token, setToken] = useState()
//   const [recommendedTrack, setRecommendedTrack] = useState()

<<<<<<< HEAD
//   useEffect(() => {
//     let token = hash.access_token
//     if (token && token != storedToken.token) {
//       console.log("changing stored token")
//       let store = { token: token, date: new Date() }
//       sessionStorage.setItem("token", JSON.stringify(store))
//       setToken(token)
//     } else if (token) {
//       setToken(token)
//     }
//     if (storedToken) {
//       console.log(token)
//       console.log("chainging token date")
//       expiresAt = new Date(storedToken.date)
//       expiresAt.setHours(expiresAt.getHours())
//       console.log(storedToken.date)
//       isExpired = expiresAt.getTime() < new Date().getTime()
//       console.log(isExpired)
//       console.log(expiresAt)
//     }
//   }, [])

//   const getAllArtists = () => {
//     const range = ["long_term"]
//     return Promise.all([getArtists(range[0])])
//   }

//   const getArtists = range => {
//     return fetch(
//       `https://api.spotify.com/v1/me/top/artists?time_range=${range}&limit=1&offset=5`,
//       {
//         method: "GET",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + auth_token,
//         },
//       }
//     ).then(responseTopArtists => responseTopArtists.json())
//   }

//   const generatePlaylist = () => {
//     if (isExpired) {
//       window.location.reload(false)
//     }
//     getAllArtists().then(([artists]) => {
//       let currentTopArtists = []
//       let currentTopArtistsURI = []
//       for (let i = 0; i < artists.items.length; i++) {
//         if (!(artists.items[i].name in currentTopArtists)) {
//           currentTopArtists.push(artists.items[i].name)
//           currentTopArtistsURI.push(
//             artists.items[i].uri.slice(15, artists.items[i].uri.length)
//           )
//         }
//       }
//       setTopArtists(currentTopArtists)
//       setTopArtistsURI(currentTopArtistsURI)
//       let stringArtists = currentTopArtistsURI.join("%2C")

//       fetch(
//         `https://api.spotify.com/v1/recommendations?limit=10&market=US&seed_artists=${stringArtists}&min_danceability=${minDancibility}&max_danceability=${maxDancibility}&min_energy=${minEnergy}&max_energy=${maxEnergy}&min_valence=${minValence}&max_valence=${maxValence}`,
//         {
//           method: "GET",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//             Authorization: "Bearer " + auth_token,
//           },
//         }
//       ).then(responseRec =>
//         responseRec.json().then(data => {
//           console.log(data)
//           setPlaylistURI("hello")
//         })
//       )
//     })
//   }

//   const handleChangeMood = (event, mood) => {
//     setMood(mood)
//     if (mood < 0.1) {
//       setMinValence(0)
//       setMaxValence(mood + 0.15)
//       setMinDancibility(0)
//       setMaxDancibility(mood * 8)
//       setMinEnergy(0)
//       setMaxEnergy(mood * 10)
//     } else if (0.1 <= mood && mood < 0.25) {
//       setMinValence(mood - 0.075)
//       setMaxValence(mood + 0.075)
//       setMinDancibility(0)
//       setMaxDancibility(mood * 4)
//       setMinEnergy(0)
//       setMaxEnergy(mood * 5)
//     } else if (0.25 <= mood && mood < 0.5) {
//       setMinValence(mood - 0.05)
//       setMaxValence(mood + 0.05)
//       setMinDancibility(0)
//       setMaxDancibility(mood * 1.75)
//       setMinEnergy(0)
//       setMaxEnergy(mood * 1.75)
//     } else if (0.5 <= mood && mood < 0.75) {
//       setMinValence(mood - 0.05)
//       setMaxValence(mood + 0.05)
//       setMinDancibility(mood / 2)
//       setMaxDancibility(1)
//       setMinEnergy(mood / 2)
//       setMaxEnergy(1)
//     } else if (0.75 <= mood && mood < 0.9) {
//       setMinValence(mood - 0.075)
//       setMaxValence(mood + 0.075)
//       setMinDancibility(mood / 2)
//       setMaxDancibility(1)
//       setMinEnergy(mood / 1.75)
//       setMaxEnergy(1)
//     } else if (mood >= 0.9) {
//       setMinValence(mood - 0.15)
//       setMaxValence(1)
//       setMinDancibility(mood / 1.75)
//       setMaxDancibility(1)
//       setMinEnergy(mood / 1.5)
//       setMaxEnergy(1)
//     }
//   }

//   return (
//     <>
//       {auth_token && !isExpired ? (
//         !playlistURI ? (
//           <Box
//             sx={{
//               width: "50vw",
//               height: "100vh",
//               display: "flex",
//               flexDirection: "column",
//               alignItems: "center",
//               justifyContent: "center",
//               margin: "auto",
//             }}
//           >
//             <Box
//               sx={{
//                 display: "flex",
//                 flexDirection: "column",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 mb: 8,
//                 mt: 8,
//               }}
//             >
//               <Typography
//                 color="white"
//                 variant="h2"
//                 gutterBottom
//                 sx={{ textAlign: "center" }}
//               >
//                 Select Your Type of Music
//               </Typography>
//               <img src={RecordPlayer} alt="loading..." class="recordImg" />
//             </Box>
>>>>>>> f586badec9e152dfdf238b8af6ebeb4a8d84e3c2

//             <Typography
//               color="white"
//               gutterBottom
//               variant="h3"
//               sx={{ textAlign: "center" }}
//             >
//               What's your mood? (0: Sad, 1: Happy)
//             </Typography>
//             <Slider
//               aria-label="Temperature"
//               defaultValue={0.5}
//               onChange={handleChangeMood}
//               valueLabelDisplay="auto"
//               step={0.1}
//               marks
//               min={0}
//               max={1}
//             />
//             <Button onClick={generatePlaylist}>Generate Playlist</Button>
//           </Box>
//         ) : (
//           <h1>test</h1>
//         )
//       ) : (
//         <LoginToSpotify login={loginUrl} />
//       )}
//     </>
//   )
// }
=======
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
        Cheerful
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
>>>>>>> 111c9e44965b4b428097e00646bdcf52eee96a96
