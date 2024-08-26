import React from 'react'

function BoardChoice({ setBoardSize, thisSize, textInfo }) {
    return (
        <li
            onClick={(e) => setBoardSize(e.target)}
            id={thisSize}
            className='board_3x3 p-2 cursor-pointer hover:bg-orange-800 pl-6'>
            {textInfo}
        </li>
    )
}

export default BoardChoice