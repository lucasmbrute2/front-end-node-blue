import React, { useState , useEffect } from "react";
import MovieCard from "../MovieCard/MovieCard"
import "./MovieList.scss"
import { Api } from "../../../api/api"

const MovieList =()=>{
    
    const [movies, setMovies] = useState([])  
    
    useEffect(()=>{
        getMovie();
    },[])
    
    
    const getMovie = async () => {
        const response = await Api.buildGetRequest()
        const data = await response.json()
        setMovies(data)
    }

    return(
        <div className="list">
            {movies.map((filme)=>(
                <MovieCard filme = {filme} key={filme._id}/>
            ))}
            
        </div>
    )
}

export default MovieList;