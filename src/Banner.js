import React,{ useEffect, useState } from 'react'
import './Banner.css'
import axios from './axios'
import requests from './requests';
function Banner() {

    const base_url = "https://image.tmdb.org/t/p/original/";
    const [movie,setMovie]=useState([]);

    
   useEffect(() => {
    async function fetchData(){
     const request=await axios.get(requests.fetchNetflixOriginals);
     setMovie(
         request.data.results[
     Math.floor(Math.random() * request.data.results.length-1  )
    ]
     );
    return request;

    }
    fetchData();
     
   }, []);


    

   function truncateString(str, num) {
    if(!str){
      return;
    }
    return  str.length > num ? str.substr(0, num-1) + "..." : str;
  }

    return (
        <header className="banner"
         style= {{
           
        backgroundSize:"cover",
        backgroundImage:`url('${base_url}${movie.backdrop_path}')`,
        backgroundPosition:"center center",

         }}
        >
            <div className="banner_contents">
                 <h1 className="banner__title">
                 {movie.name || movie.title || movie.orginal_name}
                 </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My list</button>
                </div>
                <div>
                    <h1 className="banner__description">{truncateString(movie.overview,100)}</h1>
                </div>
            </div>
            <div className="banner__fadeBottom"/>
        </header>
    )
}

export default Banner
