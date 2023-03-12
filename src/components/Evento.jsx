import React from 'react'

function Evento({ eventDay, eventDayWeek, eventMonth, eventTittle, eventPlace }) {
    return (
        <div className='eventoContainer'>
            <div className='eventoContent'>
                <div>
                    <h2>{eventDay}</h2>
                    <div>
                        <small>{eventDayWeek}</small>
                        <small>{eventMonth}</small>
                    </div>
                    <h1>{eventTittle}/</h1>
                    <h6>{eventPlace}</h6>
                </div>
                <div className='eventBtn'>
                    <a>Comparecer</a>
                </div>
            </div>
        </div>
    )
}

export default Evento