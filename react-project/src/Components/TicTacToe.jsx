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
        let isWinner = false;

        console.log('Welcom.');

        const playRound = () => {
            let row;
            let column;

            gameBoard.printBoard();

            isPlayer1 ? (
                row = prompt('player 1 row: '),
                column = prompt('player 1 column'),
                gameBoard.board[row][column] = 'X'
            ) : (
                row = prompt('player 2 row: '),
                column = prompt('player 2 column'),
                gameBoard.board[row][column] = 'O'
            );
            if (!checkForWinner() && !checkForTie()) {isPlayer1 = !isPlayer1}
        }

        const checkForWinner = () => {
            let thisRoundHasWinner = false;
            if (gameBoard.board[0][0] !== '_' && gameBoard.board[0][0] === gameBoard.board[0][1] && gameBoard.board[0][0] === gameBoard.board[0][2]) {
                announceWinner();
                thisRoundHasWinner = true;
            } else if (gameBoard.board[1][0] !== '_' && gameBoard.board[1][0] === gameBoard.board[1][1] && gameBoard.board[1][0] === gameBoard.board[1][2]) {
                announceWinner();
                thisRoundHasWinner = true;
            } else if (gameBoard.board[2][0] !== '_' && gameBoard.board[2][0] === gameBoard.board[2][1] && gameBoard.board[2][0] === gameBoard.board[2][2]) {
                announceWinner();
                thisRoundHasWinner = true;
            } else if (gameBoard.board[0][0] !== '_' && gameBoard.board[0][0] === gameBoard.board[1][0] && gameBoard.board[0][0] === gameBoard.board[2][0]) {
                announceWinner();
                thisRoundHasWinner = true;
            } else if (gameBoard.board[0][1] !== '_' && gameBoard.board[0][1] === gameBoard.board[1][1] && gameBoard.board[0][1] === gameBoard.board[2][1]) {
                announceWinner();
                thisRoundHasWinner = true;
            } else if (gameBoard.board[0][2] !== '_' && gameBoard.board[0][2] === gameBoard.board[1][2] && gameBoard.board[0][2] === gameBoard.board[2][2]) {
                announceWinner();
                thisRoundHasWinner = true;
            } else if (gameBoard.board[0][0] !== '_' && gameBoard.board[0][0] === gameBoard.board[1][1] && gameBoard.board[0][0] === gameBoard.board[2][2]) {
                announceWinner();
                thisRoundHasWinner = true;
            } else if (gameBoard.board[0][2] !== '_' && gameBoard.board[0][2] === gameBoard.board[1][1] && gameBoard.board[0][2] === gameBoard.board[2][0]) {
                announceWinner();
                thisRoundHasWinner = true;
            }
            return thisRoundHasWinner;
        }

        const checkForTie = () => {
            let thisRoundIsTie = false;
            let isBoardFilled = true;
            gameBoard.board.forEach(row => {
                row.forEach(box => {
                    if (box === '_') {
                        isBoardFilled = false;
                    }
                })
            });
            if (isBoardFilled && !isWinner) {
                thisRoundIsTie = true;
                console.log("It's a Tie!");
                prompt("Start new Game?\nType \"y\"") === 'y' ? startNewGame(): null;
            }
            return thisRoundIsTie;
        }

        const announceWinner = () => {
            gameBoard.printBoard();
            isPlayer1 ? 
            console.log('player 1 won (' + player1.symbol + ')')
            :
            console.log('player 2 won (' + player2.symbol + ')');
            isWinner = true;
            prompt("Start new Game?\nType \"y\"") === 'y' ? startNewGame(): null;
        }

        const startNewGame = () => {
            for (let rowIndex = 0; rowIndex < gameBoard.board.length; rowIndex++) {
                for (let boxIndex = 0; boxIndex < gameBoard.board[rowIndex].length; boxIndex++) {
                    gameBoard.board[rowIndex][boxIndex] = '_';
                }
            }
            isWinner = false;
            isPlayer1 = true;
        }

        return { playRound };
    })();

    return (
        <section id='tic-tac-to'>
            <h1 onClick={gameController.playRound}>test</h1>
        </section>
    )
}