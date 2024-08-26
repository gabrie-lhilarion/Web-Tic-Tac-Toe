import React from 'react'

function AddBoth({ addBoth, textInfo }) {
    return (
        <li id="five" data-opponent='both' className='play_with_both  p-2   cursor-pointer hover:bg-orange-800 pl-6'>
            {textInfo}
            <p className='hidden'>
                <input type="text" className='p-3 ml-3 text-slate-500' placeholder='enter name' />
                <button type="button" onClick={(e) => addBoth(e.target)} className='block bg-black p-3 m-3'>Add friend</button>
            </p>
        </li>
    )
}

export default AddBoth