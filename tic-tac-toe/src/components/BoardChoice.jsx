import React from 'react'

function BoardChoice({ setBoardSize, boardSize }) {
    return (
        <li
            onClick={(e) => setBoardSize(e.target)}
            id='three'
            className='board_3x3 p-2 cursor-pointer hover:bg-orange-800 pl-6'>
            {boardSize}
        </li>
    )
}

export default BoardChoice