import React, { useEffect, useState } from 'react'
import axios from './axios';
import "./Row.css"
import Youtube from 'react-youtube';
//import movieTrailer from 'movie-trailer';
const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title,fetchUrl,isLargeRow}){
  const [movies,setMovies] = useState([]);
  //const [trailerUrl,setTrailerUrl]=useState("");
  useEffect(() => {

    async function fetchData(){
        const request= await axios.get(fetchUrl);
        console.log(request.data.results);
        setMovies(request.data.results);
        return request;
    }
     fetchData();
  }, [fetchUrl]);
  
  /*const handleClick =(moviename)=>{
    console.log(moviename);
      if(trailerUrl){
          setTrailerUrl("");
      }
      else{
          movieTrailer(moviename||"").then(url=>{
            const urlParamV = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParamV.get("v"));
          })
          .catch((error)=> console.log(error));
      }
  }*/
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
    return(
        <div className="row">
            <h2 className="movieName">{title}</h2>


             <div className="row__posters">

                 {movies.map(movie=>(
                     (isLargeRow && movie.poster_path )||
                     (!isLargeRow && movie.backdrop_path)) &&(
                     
                        <img key={movie.id} 
                        /*onClick={()=> {
                          return handleClick(toString(movie.id) || movie.title || movie.orginal_name);
                        }}*/
                        //{trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
                        className={`row__poster ${isLargeRow && "row__posterlarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                      

                     ) 
                     
                 )}

             </div>
                 
        </div>
    )
}

export default Row