
import tictactoeImg from "../assets/5x5-tic-tac-toe.jpg"

export default function Root() {

    return (
        <>
            <div className="outermost-container lg:flex">
                <main className="lg:w-[60%]">
                    <h1 className="text-orange-500 p-6 text-center">Web Tic Tac Toe</h1>
                    <div className="hero-image w-[80%] h-[80vh] m-auto ">
                        <img src={tictactoeImg} className="block m-auto" alt="tic-tac-toe-image" />
                        <h3 className="text-center">
                            Challenge Your Mind with 5X5 Tic-Tac-Toe
                        </h3>
                    </div>
                </main>
                <div id="sidebar" className="w-[40%] text-3xl font-bold bg-slate-700">
                    side bar containt
                </div>
            </div>

        </>
    );
}