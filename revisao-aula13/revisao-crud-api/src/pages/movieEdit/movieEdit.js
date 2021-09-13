import React from "react";
import './movieEdit.scss'

const movieEdit = ()=>{
    return(
        <div>
        <section className="add">
            <h1 className="add-h1">Editar</h1>
            <form className="add-form">
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
        </div>
    )
}

export default movieEdit;