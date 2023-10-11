import React, { useEffect, useState } from 'react'
import axios from "../axios"
import "../Row.css"
import movieTrailer from "movie-trailer"

import Youtube from "react-youtube"
/**
* @author
* @function Row
**/

const Row = ({title,fetchUrl,isLargeRow}) => {
    const base_urlimg="https://image.tmdb.org/t/p/original/"

const [movies,setMovies]=useState([])
const [trailerUrl,setTrailerUrl]=useState("")


useEffect(()=>{
 async function fetchData(){
    
     const request= await axios.get(fetchUrl)
    //  console.log(request)
      setMovies(request.data.results)
     return request
 }
 fetchData();
},[fetchUrl])
// console.log(movies)
const opts={
  height:"390",
  width: "100%",
  playerVars:{
    autoplay:1
  },
}

// const handleClick=(movie)=>{
//   if(trailerUrl)
//   {
//     setTrailerUrl("")
//   }else{
//     movieTrailer(movie?.name || "")
//     .then((url)=>{
//       const urlParams=new URLSearchParams
//       (new URL(url).search);
//       setTrailerUrl(urlParams.get("v"))

//     }).catch((error)=>console.log(error))
//   }
// }
const handleClick = async (movie) => {
  if (trailerUrl) {
    setTrailerUrl("");
  } else {
    let trailerurl = await axios.get(
      `/movie/${movie.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`
    );
    setTrailerUrl(trailerurl.data.results[0]?.key);
  }
};


  return(
    <div className="row"  >
        {/* title */}
        <h2>{title}</h2>
        {/* posters */}
        <div className="row__posters" >
         
          {movies.map(movie => 
              (
              <img 
              key={movie.id}
              onClick={() => handleClick(movie)}
              
              className={`row__poster ${isLargeRow && "row__posterLarge"}  `}
              src={`${base_urlimg}${isLargeRow ? movie.poster_path: movie.backdrop_path  }`} alt={movie.name}/>
              )
          )}

        </div>
         {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}

    </div>
   )

 }

export default Row