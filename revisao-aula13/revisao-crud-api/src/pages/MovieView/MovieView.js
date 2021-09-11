import React, { useEffect, useState } from "react";
import "./MovieView.scss"
import { Api } from "../../api/api";

const MovieView = (props)=>{
    //pegar o id e chamar a api na url passada no back ->http://localhost:3002/filmes/filme/
    const id = props.match.params.id
    const [filme, setFilme] = useState({})
    
    useEffect(()=>{
        getMovieById()
    },[])
    
    
    

    const getMovieById = async ()=>{
        const response = await Api.buildGetRequestById(id)
        const data = await response.json()
        setFilme(data)
    }

    return(
        <section className="view">
            
            <div className="view-img">
                <img src={filme.imagem} alt=""></img>
            </div>
            
            <div className="view-info">
                <p className="view-info-text"><b>Nome: </b> {filme.nome}</p>
                <p className="view-info-text"><b>Lançamento: </b> {filme.lancamento}</p>
                <a className="view-info-text" href={filme.trailer} target="_blank">Trailer</a>
                <button className="btn btn-success">Editar</button>
                <button className= "btn btn-danger">Excluir</button>
            </div>
        </section>
    )
}

export default MovieView;