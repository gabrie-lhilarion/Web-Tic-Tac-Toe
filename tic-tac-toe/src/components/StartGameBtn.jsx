import React from 'react'

function StartGameBtn({ setBoard, textInfo }) {
    return (
        <button
            onClick={(e) => setBoard(e.target)}
            className='bg-black text-slate-400 rounded-full p-4 mt-2'
            type="button">
            {textInfo}
        </button>
    )
}

export default StartGameBtn