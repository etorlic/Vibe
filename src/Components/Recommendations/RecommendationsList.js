import {useState, useEffect} from "react";

export default function RecommendationsList(props) {
  const [data, setData] = useState("");

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
    
      
    const url = `https://api.spotify.com/v1/recommendations?max_danceability=${getMax(props.danceability)}&min_danceability=${getMin(props.danceability)}&max_valence=${getMax(props.valence)}&min_valence=${getMin(props.valence)}&max_tempo=${getMax(props.tempo)}&min_tempo=${getMin(props.tempo)}&max_energy=${getMax(props.energy)}&min_valence=${getMin(props.energy)}`;
    console.log(url);
    fetch(url,{
        method: "GET",
        //TODO
        

    })
    .then((r) => r.json())
    .then((r) => setData(r));

  }, [props]);

  return (
      //TODO
      //list element that displays all the urls of songs
    <div>
      Estimate Age: {data.href}
    </div>
  )
}