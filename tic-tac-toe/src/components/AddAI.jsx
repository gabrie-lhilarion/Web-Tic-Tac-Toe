import React from 'react'

function AddAI({ addAI, textInfo }) {
    return (
        <li
            id="three"
            data-opponent='AI'
            onClick={(e) => addAI(e.target)}
            className='play_with_ai p-2  cursor-pointer hover:bg-orange-800 pl-6'>
            {textInfo}
        </li>
    )
}

export default AddAI