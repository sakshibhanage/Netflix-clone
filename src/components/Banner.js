import React, { useEffect, useState } from 'react'
import axios from "../axios"
import "../Banner.css"

/**
* @author
* @function Banner
**/

const Banner = ({fetchUrl,title}) => {

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }

    const base_urlimg="https://image.tmdb.org/t/p/original/"
const [banner,setBanner]=useState([])
    useEffect(()=>{
        async function fetchData(){
           
            const request= await axios.get(fetchUrl)
            console.log(request)
            setBanner(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ])
            // setBanner(request.data.results[1])
            return request
        }
        fetchData();
       },[fetchUrl])

  return(
      <>
      <header className="banner" 
      style={{
          backgroundSize:"cover",
          backgroundImage:`url(
             " ${base_urlimg}${banner?.backdrop_path}"
          )`,
          backgroundPosition:"center center"
      }}
      >
      <div className="banner__contents" >
          {/* title */}
          <h1 className="banner__title">{banner?.title || banner?.original_name}
          </h1>
          {/* btn */}
          <div className="banner__btns" >
              <button className="banner__btn">Play</button>
              <button className="banner__btn">My List</button>
          </div>
          
          {/* descp */}
          <h1 className="banner__descp" >
             
              {truncate(banner?.overview, 200)}
               </h1>
         
     </div>
     <div className="banner__fadeBottom" ></div>

      </header>
    
    </>
   )

 }

export default Banner