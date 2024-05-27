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
            gameBoard.printBoard();
            checkForWinner();
            isPlayer1 = !isPlayer1;
        }

        const checkForWinner = () => {
            if (gameBoard.board[0][0] !== '_' && gameBoard.board[0][0] === gameBoard.board[0][1] && gameBoard.board[0][0] === gameBoard.board[0][2]) {
                isPlayer1 ? console.log('player 1 won (' + player1.symbol + ')') : console.log('player 2 won (' + player2.symbol + ')');
            } else if (gameBoard.board[1][0] !== '_' && gameBoard.board[1][0] === gameBoard.board[1][1] && gameBoard.board[1][0] === gameBoard.board[1][2]) {
                isPlayer1 ? console.log('player 1 won (' + player1.symbol + ')') : console.log('player 2 won (' + player2.symbol + ')');
            } else if (gameBoard.board[2][0] !== '_' && gameBoard.board[2][0] === gameBoard.board[2][1] && gameBoard.board[2][0] === gameBoard.board[2][2]) {
                isPlayer1 ? console.log('player 1 won (' + player1.symbol + ')') : console.log('player 2 won (' + player2.symbol + ')');
            } else if (gameBoard.board[0][0] !== '_' && gameBoard.board[0][0] === gameBoard.board[1][0] && gameBoard.board[0][0] === gameBoard.board[2][0]) {
                isPlayer1 ? console.log('player 1 won (' + player1.symbol + ')') : console.log('player 2 won (' + player2.symbol + ')');
            } else if (gameBoard.board[0][1] !== '_' && gameBoard.board[0][1] === gameBoard.board[1][1] && gameBoard.board[0][1] === gameBoard.board[2][1]) {
                isPlayer1 ? console.log('player 1 won (' + player1.symbol + ')') : console.log('player 2 won (' + player2.symbol + ')');
            } else if (gameBoard.board[0][2] !== '_' && gameBoard.board[0][2] === gameBoard.board[1][2] && gameBoard.board[0][2] === gameBoard.board[2][2]) {
                isPlayer1 ? console.log('player 1 won (' + player1.symbol + ')') : console.log('player 2 won (' + player2.symbol + ')');
            } else if (gameBoard.board[0][0] !== '_' && gameBoard.board[0][0] === gameBoard.board[1][1] && gameBoard.board[0][0] === gameBoard.board[2][2]) {
                isPlayer1 ? console.log('player 1 won (' + player1.symbol + ')') : console.log('player 2 won (' + player2.symbol + ')');
            } else if (gameBoard.board[0][2] !== '_' && gameBoard.board[0][2] === gameBoard.board[1][1] && gameBoard.board[0][2] === gameBoard.board[2][0]) {
                isPlayer1 ? console.log('player 1 won (' + player1.symbol + ')') : console.log('player 2 won (' + player2.symbol + ')');
            }
        }

        return { playRound };
    })();

    return (
        <section id='tic-tac-to'>
            <h1 onClick={gameController.playRound}>test</h1>
        </section>
    )
}