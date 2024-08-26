
class Game {

    constructor(progress, mode, board) {
        this.progress = progress;
        this.mode = mode;
        this.board = board;
    }

    createBoard() {
        return this.board
    }

    start() {
        console.log("Game started!")
    }

}
export default Game