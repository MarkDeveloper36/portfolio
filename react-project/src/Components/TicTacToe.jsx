import './TicTacToe.css'

export default function TicTacToe() {
    const gameBoard = (function () {
        let board = [
            ['_', '_', '_'],
            ['_', '_', '_'],
            ['_', '_', '_']
        ];

        const printBoard = () => {
            console.log('Board: ');

            let printedBoard = '';
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    printedBoard += board[i][j] + ', ';
                }
                printedBoard += '\n';
            }

            console.log(printedBoard);
        }

        return { printBoard, board };
    })();

    function createPlayer(playerNum, symbol) {
        return { playerNum, symbol };
    }

    const player1 = createPlayer(1, 'X');
    const player2 = createPlayer(2, 'O');

    const gameController = (function () {
        let isPlayer1 = true;

        console.log('Welcom.');
        gameBoard.printBoard();

        const playRound = () => {
            let row;
            let column;

            isPlayer1 ? (
                row = prompt('player 1 row: '),
                column = prompt('player 1 column'),
                gameBoard.board[row][column] = 'X'
            ) : (
                row = prompt('player 2 row: '),
                column = prompt('player 2 column'),
                gameBoard.board[row][column] = 'O'
            );
            isPlayer1 = !isPlayer1;
            gameBoard.printBoard();
        }

        return { playRound };
    })();

    return (
        <section id='tic-tac-to'>
            <h1 onClick={gameController.playRound}>test</h1>
        </section>
    )
}