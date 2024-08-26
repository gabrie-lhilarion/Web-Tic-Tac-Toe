import React from 'react'

export const SizeThree = () => {
    const board = [];
    for (let i = 0; i < 3 * 3; i++)
        board.push(<div className='grid-boxes-three' id={`grid-${i}`} key={i}></div>);
    return (
        <div className='w-[350px] h-[350px] bg-black grid-cols-3 grid justify-items-center items-center mt-10 mb-10 ml-auto mr-auto p-2'>
            {board}
        </div>
    );
}

export const SizeFour = () => {
    const board = [];
    for (let i = 0; i < 4 * 4; i++)
        board.push(<div className='grid-boxes-four' id={`grid-${i}`} key={i}></div>);
    return (
        <div className='w-[350px] h-[350px] bg-black grid-cols-4 grid justify-items-center items-center mt-10 mb-10 ml-auto mr-auto p-2'>
            {board}
        </div>
    );
}

export const SizeFive = () => {
    const board = [];
    for (let i = 0; i < 5 * 5; i++)
        board.push(<div className='grid-boxes-five' id={`grid-${i}`} key={i}></div>);
    return (
        <div className='w-[350px] h-[350px] bg-black grid-cols-5 grid justify-items-center items-center mt-10 mb-10 ml-auto mr-auto p-2'>
            {board}
        </div>
    );
}
