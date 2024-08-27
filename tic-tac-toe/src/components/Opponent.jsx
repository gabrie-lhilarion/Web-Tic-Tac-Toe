import React from 'react'
import { selectPlayMode } from '../helpers/game_logic/game'
import Styles from '../helpers/css_classes/classes.json'


function Opponent({ playMode, type, textInfo, buttonText }) {

    const toggleImput = (target) => {
        if (target.tagName === 'LI') {
            const playBtn = document.getElementById("play")
            target.parentElement.parentElement.querySelectorAll('p').forEach(p => p.classList.add("hidden"))
            target.parentElement.parentElement.querySelectorAll('input').forEach(input => input.value = '')
            target.querySelector('p').classList.toggle("hidden")

            if (target.id === 'friend' || target.id === 'both') {
                playBtn.classList.add("hidden")
            } else {
                playBtn.classList.remove("hidden")
            }

            selectPlayMode(target)
        }
    }

    if (type === 'ai') {

        return (
            <li
                id="ai"
                data-type="3" data-gameowner="me" data-ai="ai"
                onClick={(e) => playMode(e.target)}
                className={Styles.play_with_ai}>
                {textInfo}
            </li>
        )
    }


    if (type === 'friend') {
        return (
            <li id="friend"
                onClick={(e) => toggleImput(e.target)}
                data-type="3" data-gameowner="me" data-friend=""
                className='play_with_friend p-2 cursor-pointer hover:bg-orange-800 pl-6 rounded-lg'
            >
                {textInfo}
                <input type="text" className='hidden' placeholder='enter name' />
                <p className='hidden'>
                    <input type="text" className='p-3 ml-3 text-slate-500' placeholder='enter name' />
                    <button type="button"
                        onClick={(e) => playMode(e.target)}
                        className='block bg-black p-3 m-3'>{buttonText}</button>
                </p>
            </li>
        )
    }

    if (type === 'both') {
        return (
            <li id="both"
                onClick={(e) => toggleImput(e.target)}
                data-type="3" data-gameowner="me" data-ai="ai" data-friend=""
                className='play_with_both  p-2  cursor-pointer hover:bg-orange-800 pl-6 rounded-lg'>
                {textInfo}
                <p className='hidden'>
                    <input type="text" className='p-3 ml-3 text-slate-500' placeholder='enter name' />
                    <button type="button" onClick={(e) => playMode(e.target)}
                        className='block bg-black p-3 m-3'>{buttonText}</button>
                </p>
            </li>
        )
    }
}

export default Opponent