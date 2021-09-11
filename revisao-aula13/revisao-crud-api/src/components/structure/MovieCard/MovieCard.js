import React from "react";
import "./MovieCard.scss"
import { Link } from "react-router-dom";
const MovieCard = ({ filme })=>{
    console.log(filme)
    
    
    return(
        <Link to={`/view/${filme._id}`} className= "card">
            <div >
                <p className="card-text">{filme.nome}</p>
                <div className="card-imagem">
                    <img src={filme.imagem} alt=""></img>
                </div>
                <a target="_blank" href={filme.trailer} className="card-info">Trailer</a>
            </div>
        </Link>    

    )
}

export default MovieCard;
