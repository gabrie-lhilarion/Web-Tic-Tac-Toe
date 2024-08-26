const BoardThree = () => [
    '.', '.', '.',
    '.', '.', '.',
    '.', '.', '.'
]
const BoardFour = () => [
    '.', '.', '.', '.',
    '.', '.', '.', '.',
    '.', '.', '.', '.',
    '.', '.', '.', '.'
]

const BoardFive = () => [
    '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '.',
    '.', '.', '.', '.', '.', '.', '.'
]

const BoardSizes = {
    three: BoardThree(),
    four: BoardFour(),
    five: BoardFive()
}

export default BoardSizes