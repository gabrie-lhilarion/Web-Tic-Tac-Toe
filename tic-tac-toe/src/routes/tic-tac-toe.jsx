import React from 'react'
import { useLoaderData, } from 'react-router-dom'
import {
    selectPlayMode,
    hideInputElement,
    highlightBoardChoice
} from '../helpers/game_logic/play_mode'

import { SizeThree, SizeFour, SizeFive } from '../components/gameBoard'
import BoardChoice from '../components/BoardChoice'
import HeadingTwo from '../components/HeadingTwo'
import HeadingOne from '../components/HeadingOne'
import Game from '../helpers/game_logic/game'
import StartGameBtn from '../components/StartGameBtn'

import Styles from '../helpers/css_classes/classes.json'
import Text from '../helpers/text/text.json'
import Opponent from '../components/Opponent'



function TicTacToe() {
    const [size, setSize] = React.useState(3)
    const gameData = useLoaderData();
    console.log(gameData)

    const playMode = (target) => {
        if (target.tagName !== 'INPUT') {
            selectPlayMode(target)
            hideInputElement(target)
        }

    }

    const setBoardSize = (el) => {
        const choice = el.id
        setSize(Number(choice))
        highlightBoardChoice(el)
    }


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

                        <section className='before_play'>
                            <HeadingOne
                                cls={Styles.hero_heading_one}
                                textInfo={Text.hero}
                            />
                            <div>
                                <HeadingTwo
                                    cls={Styles.heading_two}
                                    textInfo={'Choose Play Mode'}
                                />

                                <ul className={Styles.play_mode_ul} onClick={(e) => playMode(e.target)}>
                                    <Opponent
                                        type={'ai'}
                                        textInfo={'Play with AI'}
                                        buttonText={null}
                                    />

                                    <Opponent
                                        type={'friend'}
                                        textInfo={'Play with a friend'}
                                        buttonText={'Add friend'}
                                    />

                                    <Opponent
                                        type={'both'}
                                        textInfo={'Play with both AI and a friend'}
                                        buttonText={'Add friend'}
                                    />
                                </ul>
                            </div>

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

                            <StartGameBtn textInfo={'Start Game'} />

                        </section>

                        <section className='in_play'>

                        </section>
                    </div>
                </aside>
            </div>
        </>
    )
}

export default TicTacToe