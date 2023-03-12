import React from 'react'
import Comentario from '../components/Comentario'

function NaMidia() {
    return (
        <div className='naMidia' id='naMidia'>
            <h1>NA MÍDIA</h1>
            <div className="naMidiaContainer">
                <Comentario textComent="Sou um depoimento. Clique aqui para editar e adicionar um texto sobre você e seus serviços. Permita que seus clientes o avaliem e digam aos amigos o quanto você é bom."
                    nameComent="NUNO ALVES"
                    sourceComent="JORNAL DE NOTICIAS" />

                <Comentario textComent="Sou um depoimento. Clique aqui para editar e adicionar um texto sobre você e seus serviços. Permita que seus clientes o avaliem e digam aos amigos o quanto você é bom."
                    nameComent="GABRIEL CARDOSO"
                    sourceComent="JORNAL DE NOTICIAS" />

                <Comentario textComent="Sou um depoimento. Clique aqui para editar e adicionar um texto sobre você e seus serviços. Permita que seus clientes o avaliem e digam aos amigos o quanto você é bom."
                    nameComent="JORGE SILVA"
                    sourceComent="JORNAL DE NOTICIAS" />
            </div>
        </div>
    )
}

export default NaMidia