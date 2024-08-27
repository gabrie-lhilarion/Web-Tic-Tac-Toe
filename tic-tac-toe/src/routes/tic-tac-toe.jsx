import React from 'react'
import { useLoaderData, } from 'react-router-dom'
import {
    selectPlayMode,
    hideInputElement,
    highlightBoardChoice
} from '../helpers/game_logic/game'

import { SizeThree, SizeFour, SizeFive } from '../components/gameBoard'
import BoardChoice from '../components/BoardChoice'
import HeadingTwo from '../components/HeadingTwo'
import HeadingOne from '../components/HeadingOne'
import StartGameBtn from '../components/StartGameBtn'

import Styles from '../helpers/css_classes/classes.json'
import Text from '../helpers/text/text.json'
import Opponent from '../components/Opponent'


function TicTacToe() {
    const [size, setSize] = React.useState(3)
    const [game, setGame] = React.useState({
        board: 3,
        playing: null,
        mode: {
            type: 1,
            gameowner: 'me',
            ai: 'ai'
        }
    })

    React.useEffect(() => {

        if (game.playing === true) {

            const inPlay = document.getElementById("in-play")
            const beforePlay = document.getElementById("before-play")
            beforePlay.classList.add('hidden')
            inPlay.classList.remove('hidden')
        }

    }, [game])

    const gameData = useLoaderData();

    const setPlayMode = (target) => {

        if (target.tagName === 'BUTTON') {

            const friendName = target.parentElement.querySelector('input').value
            const playBtn = document.getElementById("play")
            if (friendName.trim().length < 3) {
                alert("Please enter name at leat 3 characters")
            } else {
                const mode = {}
                const grandParentLi = target.parentElement.parentElement
                grandParentLi.setAttribute('data-friend', friendName)
                const playModeChoice = grandParentLi.id

                if (playModeChoice === 'friend') {
                    mode.type = 2
                    mode.gameowner = 'me'
                    mode.friend = friendName
                }

                if (playModeChoice === 'both') {
                    mode.type = 3
                    mode.gameowner = 'me'
                    mode.ai = 'ai'
                    mode.friend = friendName
                }

                setGame({ ...game, mode: mode })

                playBtn.classList.remove("hidden")
            }


        } else {
            selectPlayMode(target)
            setGame((game) => ({ ...game, mode: { type: 1, gameowner: 'me', ai: 'ai' } }))
            hideInputElement(target)
        }


    }

    const setBoardSize = (el) => {
        const choice = el.id
        setSize(Number(choice))
        highlightBoardChoice(el)

        setGame((game) => ({ ...game, board: Number(choice) }))
    }

    const playGame = () => {
        setGame(game => ({
            ...game,
            playing: true
        }));


    };



    return (
        <>
            <div className={Styles.outermost_container}>
                <main className={Styles.main}>
                    <h1 className={Styles.heading_one}>Web Tic Tac Toe</h1>

                    <div className={Styles.heading_one_inner}>
                        {size === 3 && <SizeThree />}
                        {size === 4 && <SizeFour />}
                        {size === 5 && <SizeFive />}
                    </div>
                </main>

                <aside id="sidebar" className={Styles.sideBar}>
                    <div className={Styles.sideBar_inner}>

                        <section id='before-play' className='before_play p-3'>
                            <HeadingOne
                                cls={Styles.hero_heading_one}
                                textInfo={Text.hero}
                            />


                            <div className='mt-6'>
                                <HeadingTwo
                                    cls={Styles.heading_two}
                                    textInfo={' Choose board size'}
                                />
                                <ul className={Styles.board_size_ul}>
                                    <BoardChoice setBoardSize={setBoardSize} thisSize={3} textInfo={'3x3 Board'} />
                                    <BoardChoice setBoardSize={setBoardSize} thisSize={4} textInfo={'4x4 Board'} />
                                    <BoardChoice setBoardSize={setBoardSize} thisSize={5} textInfo={'5x5 Board'} />
                                </ul>
                            </div>

                            <div>
                                <HeadingTwo
                                    cls={Styles.heading_two}
                                    textInfo={'Choose Play Mode'}
                                />

                                <ul className={Styles.play_mode_ul}>
                                    <Opponent
                                        type={'ai'}
                                        playMode={setPlayMode}
                                        textInfo={'Play with AI  ☀ '}
                                        buttonText={null}
                                    />

                                    <Opponent
                                        type={'friend'}
                                        playMode={setPlayMode}
                                        textInfo={'Play with a friend ☻'}
                                        buttonText={'Add friend'}
                                    />

                                    <Opponent
                                        type={'both'}
                                        playMode={setPlayMode}
                                        textInfo={'Play with both AI and a friend ☀ && ☻'}
                                        buttonText={'Add friend'}
                                    />
                                </ul>
                            </div>


                            <StartGameBtn playGame={playGame} textInfo={'Start Game'} />

                        </section>

                        <section id='in-play' className='in_play hidden mt-2 w-[100%]'>
                            <HeadingOne
                                cls={Styles.hero_heading_one}
                                textInfo={'The Game is on now, do your best to win!'}
                            />
                            <div className='bg-slate-700 p-6'>
                                <h2 className='font-extrabold text-2xl'>
                                    Players
                                </h2>
                                <p>
                                    list of players
                                </p>
                            </div>

                            <div className='bg-slate-700 p-6'>
                                <h2 className='font-extrabold text-2xl'>
                                    Progress
                                </h2>
                                <p>
                                    <span>0</span> of  <span>9</span>
                                </p>
                            </div>

                        </section>
                    </div>
                </aside>
            </div>
        </>
    )
}

export default TicTacToe