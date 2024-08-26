import React from 'react'
import { addAI, addFriend, addBoth } from '../helpers/game_logic/play_mode'

function Opponent({ type, textInfo, buttonText }) {

    if (type === 'ai') {

        return (
            <li
                id="three"
                data-opponent='AI'
                onClick={(e) => addAI(e.target)}
                className='play_with_ai p-2  cursor-pointer hover:bg-orange-800 pl-6'>
                {textInfo}
            </li>
        )
    }


    if (type === 'friend') {
        return (
            <li id="friend" data-opponent='friend' className='play_with_friend p-2 cursor-pointer hover:bg-orange-800 pl-6'>
                {textInfo}
                <input type="text" className='hidden' placeholder='enter name' />
                <p className='hidden'>
                    <input type="text" className='p-3 ml-3 text-slate-500' placeholder='enter name' />
                    <button type="button"
                        onClick={(e) => addFriend(e.target)}
                        className='block bg-black p-3 m-3'>{buttonText}</button>
                </p>
            </li>
        )
    }

    if (type === 'both') {
        return (
            <li id="both" className='play_with_both  p-2  cursor-pointer hover:bg-orange-800 pl-6'>
                {textInfo}
                <p className='hidden'>
                    <input type="text" className='p-3 ml-3 text-slate-500' placeholder='enter name' />
                    <button type="button" onClick={(e) => addBoth(e.target)}
                        className='block bg-black p-3 m-3'>{buttonText}</button>
                </p>
            </li>
        )
    }
}

export default Opponent