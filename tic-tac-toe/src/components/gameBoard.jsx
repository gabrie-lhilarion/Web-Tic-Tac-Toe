import React from 'react'

export const SizeThree = () => {
    const board = [];
    for (let i = 0; i < 3 * 3; i++)
        board.push(<div className='grid-boxes-three  bg-orange-500  grid place-items-center text-3xl cursor-pointer' id={`grid-${i}`} key={i}>  {i + 1} </div>);
    return (
        <div className='w-[550px] h-[550px] grid grid-cols-3 gap-2 place-items-stretch text-center bg-slate-600  m-auto p-[1px]'>
            {board}
        </div>
    );
}

export const SizeFour = () => {
    const board = [];
    for (let i = 0; i < 4 * 4; i++)
        board.push(<div className='grid-boxes-four  bg-orange-500  grid place-items-center text-3xl  cursor-pointer' id={`grid-${i}`} key={i}> {i + 1} </div>);
    return (
        <div className='w-[550px] h-[550px] grid grid-cols-4 gap-2 place-items-stretch text-center bg-slate-600 m-auto p-[1px]'>
            {board}
        </div>
    );
}

export const SizeFive = () => {
    const board = [];
    for (let i = 0; i < 5 * 5; i++)
        board.push(<div className='grid-boxes-five  bg-orange-500  grid place-items-center text-3xl  cursor-pointer' id={`grid-${i}`} key={i}>  {i + 1} </div>);
    return (
        <div className='w-[550px] h-[550px] grid grid-cols-5 gap-2 place-items-stretch text-center bg-slate-600  m-auto p-[1px]'>
            {board}
        </div>
    );
}
