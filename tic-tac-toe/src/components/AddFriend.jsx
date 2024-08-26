import React from 'react'

function AddFriend({ addFriend, textInfo }) {
    return (
        <li id="four" data-opponent='friend' className='play_with_friend p-2 cursor-pointer hover:bg-orange-800 pl-6'>
            {textInfo}
            <input type="text" className='hidden' placeholder='enter name' />
            <p className='hidden'>
                <input type="text" className='p-3 ml-3 text-slate-500' placeholder='enter name' />
                <button type="button" onClick={(e) => addFriend(e.target)} className='block bg-black p-3 m-3'>Add friend</button>
            </p>
        </li>
    )
}

export default AddFriend