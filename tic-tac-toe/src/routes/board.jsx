import React, { useState } from 'react';
import BoardSizes from '../helpers/board-size';
import { SizeFive, SizeFour, SizeThree } from '../components/gameBoard';
import { NavLink } from "react-router-dom";

function board() {
	const [boardSize, setBoardSize] = useState(3);
	const changeBoardSize = (size) => {
		setBoardSize(size);
	}
	return (
		<>
			<div className="outermost-container lg:flex">
				<main className="lg:w-[60%]">
					<h1 className="text-orange-500 p-6 text-center">Web Tic Tac Toe</h1>
					<div className="hero-image w-[80%] m-auto ">
						<h3 className="text-center text-orange-300 text-xl">
							Challenge Your Mind with 5X5 Tic-Tac-Toe
						</h3>
					</div>
					<div className='relative w-[350px] ml-auto mr-auto'>
						<div className='h-[350px] w-[350px] absolute top-0 left-0 backdrop-blur-sm'>
						<button className='text-orange-500 w-[100px] h-[50px] bg-black rounded-full text-2xl font-bold shadow-md mt-5 top-[50%] absolute left-[50%] translate-x-[-50%] translate-y-[-50%]'>Start</button>
						</div>
					{boardSize === 3 && <SizeThree />}
					{boardSize === 4 && <SizeFour />}
					{boardSize === 5 && <SizeFive />}
					</div>
					<div className='ml-auto mr-auto text-2xl text-center text-orange-500 mb-5'><p>Select Board Size</p></div>
					<div className='ml-auto mr-auto flex w-[200px] items-center justify-between p-3 bg-black rounded-full'>
						<NavLink className={`size ${ boardSize === 3 ? 'active-link':''}`} onClick={()=>changeBoardSize(3)}>3</NavLink>
						<NavLink className={`size ${ boardSize === 4 ? 'active-link':''}`} onClick={()=>changeBoardSize(4)}>4</NavLink>
						<NavLink className={`size ${ boardSize === 5 ? 'active-link':''}`} onClick={()=>changeBoardSize(5)}>5</NavLink>
					</div>			
				</main>
				{/* <aside id="sidebar" className="lg:w-[40%] p-6 font-bold flex justify-center align-cener">
					<div className="content bg-orange-700 p-6 scroll lg:h-[90vh] overflow-y-auto">

						<section className="">

							<h1 className="mb-4">
								"The classic game you love, now with a modern twist:
								Play against friends, the computer, or test your skills on different board sizes!"
							</h1>
						</section>
						<section>
							<h2 className="bg-black block p-4 rounded-sm mb-2 text-center">
								Get Started in 3 Easy Steps
							</h2>
							<ul className="steps-to-play p-6">
								<h2 className="text-2xl">
									Steps
								</h2>
								<li>
									Sign Up or Log In:
									"Create an account or log in with your credentials to start playing."
								</li>
								<li>
									Choose Your Game Mode:
									"Select whether you want to play against the computer, a friend, or in multiplayer mode."
								</li>
								<li>
									Start Playing:
									"Pick your board size and begin your Tic-Tac-Toe journey!"
								</li>
							</ul>
						</section>
					</div>
				</aside> */}
			</div>
		</>
	)
}

export default board