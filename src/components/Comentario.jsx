import React from 'react'

function Comentario({ nameComent, sourceComent, textComent }) {
    return (
        <div className='comentarioContent'>
            <div className='aspas'></div>
            <p>{textComent}</p>
            <div className='underLine'></div>
            <h5><b>{nameComent},</b><p>{sourceComent}</p></h5>
        </div>
    )
}

export default Comentario