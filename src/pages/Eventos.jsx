import React from 'react'
import Evento from '../components/Evento'

function Eventos() {
    return (
        <div className='eventos' id='eventos'>
            <h1>EVENTOS</h1>
            <div>
                <div className="eventosContainer">
                    <Evento eventDay="9" eventDayWeek="seg" eventMonth="maio" eventTittle="Lançamento do Livro" eventPlace="Vila Real" />
                    <Evento eventDay="17" eventDayWeek="ter" eventMonth="jun" eventTittle="Lançamento do Livro" eventPlace="Porto" />
                    <Evento eventDay="21" eventDayWeek="sex" eventMonth="out" eventTittle="Lançamento do Livro" eventPlace="Lisboa" />
                </div>
            </div>
        </div>
    )
}

export default Eventos