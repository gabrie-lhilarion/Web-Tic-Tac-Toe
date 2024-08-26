export async function ticTacToeLoader() {
    const ticTacToeData = localStorage.getItem("tic_tac_toe_game") || []
    return ticTacToeData;
}