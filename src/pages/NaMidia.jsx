import React from 'react'
import Comentario from '../components/Comentario'

function NaMidia() {
    return (
        <div className='naMidia' id='naMidia'>
            <h1>NA MÍDIA</h1>
            <div className="naMidiaContainer">
                <Comentario textComent="Sou um depoimento. Clique aqui para editar e adicionar um texto sobre você e seus serviços. Permita que seus clientes o avaliem e digam aos amigos o quanto você é bom."
                    nameComent="GABRIEL CARDOSO"
                    sourceComent="DIÁRIO DE CAMPINAS" />

                <Comentario textComent="Sou um depoimento. Clique aqui para editar e adicionar um texto sobre você e seus serviços. Permita que seus clientes o avaliem e digam aos amigos o quanto você é bom."
                    nameComent="GABRIEL CARDOSO"
                    sourceComent="DIÁRIO DE CAMPINAS" />

                <Comentario textComent="Sou um depoimento. Clique aqui para editar e adicionar um texto sobre você e seus serviços. Permita que seus clientes o avaliem e digam aos amigos o quanto você é bom."
                    nameComent="GABRIEL CARDOSO"
                    sourceComent="DIÁRIO DE CAMPINAS" />
            </div>
        </div>
    )
}

export default NaMidia