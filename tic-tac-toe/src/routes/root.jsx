
import { Link } from "react-router-dom";
import tictactoeImg from "../assets/5x5-tic-tac-toe.jpg"

export default function Root() {

    return (
        <>
            <div className="outermost-container lg:flex">
                <main className="lg:w-[60%]">
                    <h1 className="text-orange-500 p-6 text-center">Web Tic Tac Toe</h1>
                    <div className="hero-image w-[80%] h-[80vh] m-auto ">
                        <img src={tictactoeImg} className="block m-auto" alt="tic-tac-toe-image" />
                        <h3 className="text-center text-orange-300 text-xl">
                            Challenge Your Mind with 5X5 Tic-Tac-Toe
                        </h3>
                    </div>
                </main>
                <aside id="sidebar" className="lg:w-[40%] p-6 font-bold flex justify-center align-cener">
                    <div className="content bg-orange-700 p-6 scroll lg:h-[90vh] overflow-y-auto">

                        <section className="">

                            <h1 className="mb-4">
                                "The classic game you love, now with a modern twist:
                                Play against friends, the computer, or test your skills on different board sizes!"
                            </h1>



                            <Link to={`tic-tac-toe`} className="btn bg-black block p-4 rounded-sm mb-2 text-center"> [Play Now] </Link>
                            <button className="btn bg-slate-500 inline-block p-4 rounded-sm" type="button"> [Learn More]  </button> (scrolls down to more information)


                            <p className="p-4 text-2xl">
                                A dynamic Tic-Tac-Toe game in action, showing different board sizes and a variety of gameplay options.
                            </p>

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
                </aside>
            </div>
        </>
    );
}