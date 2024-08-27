import React from 'react'

function StartGameBtn({ playGame, textInfo }) {
    return (
        <button
            onClick={playGame}
            id="play"
            className='bg-black text-slate-400 rounded-full p-4 mt-2'
            type="button">
            {textInfo}
        </button>
    )
}

export default StartGameBtn