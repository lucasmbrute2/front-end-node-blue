import React, { useEffect, useState } from "react";
import './movieEdit.scss'
import { Api } from '../../api/api'

const MovieEdit = (props)=>{
    const id = props.match.params.id
    const [fields,setFields] = useState({});
    
    useEffect(()=>{
        getMovieById()
    },[])
    
    const getMovieById = async ()=>{
        const response = await Api.buildGetRequestById(id);
        const data = await response.json();
        setFields(data)
    }
    
    const handleFieldsChange = (e)=>{
        const auxFields = { ...fields };
        auxFields[e.target.name] = e.target.value 
        setFields(auxFields)
    }
    
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const dados = { ...fields }
        const result = await Api.fetchPut(dados,id)
        const data = await result.json()      
        props.history.push('/')
    }

    return(
        <div>
        <section className="add">
            <h1 className="add-h1">Editar</h1>
            <form className="add-form" onSubmit={handleSubmit}>
                <div className="add-form-group">
                    <label htmlFor = "nome" className="add-form-group-label">Nome: </label>
                    <input onChange={handleFieldsChange}  type="text" id="nome" name="nome" value={fields.nome} className="add-form-group-input"/>
                </div>
                
                <div className="add-form-group">
                    <label htmlFor = "lancamento" className="add-form-group-label">Lançamento: </label>
                    <input onChange={handleFieldsChange} value={fields.lancamento}type="text" id="lancamento" name="lancamento" className="add-form-group-input"/>
                </div>
                
                <div className="add-form-group">
                    <label htmlFor = "url" className="add-form-group-label">Url: </label>
                    <input onChange={handleFieldsChange} value={fields.imagem}type="text" id="imagem" name="imagem" className="add-form-group-input"/>
                </div>
                <div className='add-form-buttons'>
                    <button className='add-form-buttons-cancelar'>Cancelar</button>
                    <button type='submit' className='add-form-buttons-salvar' >Salvar</button>
                    
                </div>
            </form>
        </section>
        </div>
    )
}

export default MovieEdit;