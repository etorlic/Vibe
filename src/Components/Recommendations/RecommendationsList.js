import {useState, useEffect} from "react";

export default function RecommendationsList(props) {
  const [data, setData] = useState("");
  const [tracks, setTracks] = useState("");
  const [artists, setArtists] = useState("");
  const [genre, setGenre] = useState("");

  function getMin(number) {
      if (number!= null) {
        return (number+number%10)/100
      } else {
          return .5
      }
  }
  function getMax(number) {
    if (number!= null) {
        return (number+number%10)/100+.1
      } else {
          return .5
      }
  }
    
  

  

  useEffect(() => {
    
      
    const url = `https://api.spotify.com/v1/me/top/artists?limit=10`;
    console.log(url);
    fetch(url,{
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
        //TODO get top artists and make them an array. go through the array and getartist to make array of genres
        
        

    })
    const url = `https://api.spotify.com/v1/me/top/tracks?limit=10`;
    console.log(url);
    fetch(url,{
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
        //TODO get top tracks and make them an array.
        

    })
    .then((r) => r.json())
    .then((r) => setData(r));

    //needs spotify user import
  }, [user]);

  useEffect(() => {
    
      
    const url = `https://api.spotify.com/v1/recommendations?limit=20&seed_artist=${artists.join("%2C")}&seed_genres=${genres.join("%2C")}&seed_tracks=${tracks.join("%2C")}&max_danceability=${getMax(props.danceability)}&min_danceability=${getMin(props.danceability)}&max_valence=${getMax(props.valence)}&min_valence=${getMin(props.valence)}&max_tempo=${getMax(props.tempo)}&min_tempo=${getMin(props.tempo)}&max_energy=${getMax(props.energy)}&min_valence=${getMin(props.energy)}`;
    console.log(url);
    fetch(url,{
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
        //TODO get recommendations
        

    })
    .then((r) => r.json())
    .then((r) => setData(r));

  }, [props]);

  return (
      //TODO
      //list element that displays all the urls and names of songs
    <div>
      Estimate Age: {data.href}
    </div>
  )
}
