import React from 'react'
import Livro from '../components/Livro'
import NicaJoaninha from '../images/Nicajoaninha.webp'
import DestinoAssimQuis from '../images/DestinoAssimQuis.webp'
import SeteDias from '../images/SeteDias.webp'
import OdioMorte from '../images/OdioMorte.webp'

function Livros() {
    return (
        <div className='livros' id='livros'>
            <h1>LIVROS DE ANA DE CARVALHO</h1>
            <div className='livros-container'>
                <Livro source={NicaJoaninha} title="Nicajoaninha" linkCompra="google.pt" />
                <Livro source={DestinoAssimQuis} title="O Destino Assim o Quis" linkCompra="google.pt" />
                <Livro source={OdioMorte} title="Odio de Morte" linkCompra="google.pt" />
                <Livro source={SeteDias} title="Sete Dias Sete Contos" linkCompra="google.pt" />

            </div>
        </div>
    )
}

export default Livros