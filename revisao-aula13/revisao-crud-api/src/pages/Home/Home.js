import React from "react";
import "./Home.scss"
import MovieList from "../../components/structure/MovieList/MovieList";
const Home = ()=>{
    return(
        <section className="content">
            <h1 className="content-title">Listagem de Filmes</h1>
            <div className="content-list">
                <MovieList/>
            </div>
        </section>
    )
}

export default Home;