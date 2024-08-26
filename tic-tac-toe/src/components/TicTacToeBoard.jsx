import React from 'react'


function TicTacToeBoard({ size, boardStyles, cellStyles }) {
    const [boardSize, setBoardSize] = React.useState(0)
    const cells = []
    for (let x = 0; x < size; x++) {
        cells.push(" . ")
    }

    //"lg:h-[70vh] grid grid-cols-5 gap-2 place-items-stretch text-center bg-slate-600 p-[1px]"
    // "bg-orange-300 grid place-items-center text-3xl"

    return (
        <div
            id='game-board'
            className={boardStyles}>

            {/* <h1 className='text-slate-800'>
                                YOUR BOARD WILL BE CREATED HERE
                            </h1> */}

            {
                cells.map((cell, index) => <div key={index}
                    className={cellStyles}>
                    &nbsp;
                </div>)
            }

        </div>
    )
}

export default TicTacToeBoard