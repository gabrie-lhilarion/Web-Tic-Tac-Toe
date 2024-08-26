import React from 'react'

function BoardChoice({ setBoardSize, thisSize, textInfo }) {
    return (
        <li
            onClick={(e) => setBoardSize(e.target)}
            id={thisSize}
            className={
                thisSize === 3 ?
                    ` bg-orange-800 board_3x3 p-4 rounded-full cursor-pointer hover:bg-orange-800  inline-block` : `board_3x3 p-4 rounde-full cursor-pointer hover:bg-orange-800 inline-block`
            }>
            {textInfo}
        </li>
    )
}

export default BoardChoice