import React from 'react';
import "./addMovie.scss"
import { Api } from "../../api/api";
const addMovie = (props)=>{
    
    const HandleSubmit= async (e)=>{
        e.preventDefault()
        const nome = e.target.nome.value
        const lancamento = e.target.lancamento.value
        const url = e.target.url.value
        
        const Movie = {
            nome: nome,
            lancamento: lancamento,
            imagem: url
        }
        
        
        try{
            const response = await Api.fetchPost(Movie);
            const data = await response
            props.history.push('/') // retorna para a rota indicada no push
        }catch(error){
            console.log(error)

        }
    }

    return(
        <section className="add">
            <h1 className="add-h1">Cadastre um Filme</h1>
            <form className="add-form" onSubmit={HandleSubmit}>
                <div className="add-form-group">
                    <label htmlFor = "nome" className="add-form-group-label">Nome: </label>
                    <input type="text" id="nome" name="nome"className="add-form-group-input"/>
                </div>
                
                <div className="add-form-group">
                    <label htmlFor = "lancamento" className="add-form-group-label">Lançamento: </label>
                    <input type="text" id="lancamento" name="lancamento" className="add-form-group-input"/>
                </div>
                
                <div className="add-form-group">
                    <label htmlFor = "url" className="add-form-group-label">Url: </label>
                    <input type="text" id="url" name="url" className="add-form-group-input"/>
                </div>
                <div className='add-form-buttons'>
                    <button className='add-form-buttons-cancelar'>Cancelar</button>
                    <button type='submit' className='add-form-buttons-salvar' >Salvar</button>
                    
                </div>
            </form>
            
        
        </section>
    )
}

export default addMovie;