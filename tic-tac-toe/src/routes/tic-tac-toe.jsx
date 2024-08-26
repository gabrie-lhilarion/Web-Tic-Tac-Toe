import React from 'react'
import { useLoaderData, } from 'react-router-dom'
import {
    selectPlayMode,
    addAI,
    addFriend,
    addBoth,
    hideInputElement
} from '../helpers/game_logic/play_mode'


import AddAI from '../components/AddAI'
import AddBoth from '../components/AddBoth'
import AddFriend from '../components/AddFriend'
import BoardSizes from '../helpers/board/board-size'
import BoardChoice from '../components/BoardChoice'
import HeadingTwo from '../components/HeadingTwo'
import HeadingOne from '../components/HeadingOne'
import Game from '../helpers/game_logic/game'
import StartGameBtn from '../components/StartGameBtn'
import TicTacToeBoard from '../components/TicTacToeBoard'

import Styles from '../helpers/css_classes/classes.json'
import Text from '../helpers/text/text.json'



function TicTacToe() {

    const gameData = useLoaderData();
    console.log(gameData)

    const playMode = (target) => {
        console.log(target.id)

        if (target.tagName !== 'INPUT') {
            selectPlayMode(target)
            hideInputElement(target)
        }

    }

    const setBoardSize = (el) => {
        const size = el.id
        const boardSize = BoardSizes[size]
        return boardSize
    }

    const mode = {
        mode: 3,
        gameOwner: 'me',
        ai: 'ai',
        friend: 'friend_name'
    }



    const setBoard = () => ""



    return (
        <>
            <div className={Styles.outermost_container}>
                <main className={Styles.main}>
                    <h1 className={Styles.heading_one}>Web Tic Tac Toe</h1>
                    <div className={Styles.heading_one_inner}>
                        <TicTacToeBoard
                            size={25}
                            boardStyles={Styles.game_board}
                            cellStyles={Styles.cells}
                        />
                    </div>
                </main>

                <aside id="sidebar" className={Styles.sideBar}>
                    <div className={Styles.sideBar_inner}>

                        <section>
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
                                    <AddAI onClick={AddAI} textInfo={'Play with AI'} />
                                    <AddFriend onClick={addFriend} textInfo={'Play with a friend'} />
                                    <AddBoth onClick={addBoth} textInfo={'Play with AI and a friend'} />
                                </ul>
                            </div>

                            <div className='mt-6'>
                                <HeadingTwo
                                    cls={Styles.heading_two}
                                    textInfo={' Choose board size'}
                                />
                                <ul className={Styles.board_size_ul}>
                                    <BoardChoice onClick={setBoardSize} boardSize={'3x3 Board'} />
                                    <BoardChoice onClick={setBoardSize} boardSize={'4x4 Board'} />
                                    <BoardChoice onClick={setBoardSize} boardSize={'5x5 Board'} />
                                </ul>
                            </div>

                            <StartGameBtn onClick={setBoard} textInfo={'Start Game'} />

                        </section>
                    </div>
                </aside>
            </div>
        </>
    )
}

export default TicTacToe