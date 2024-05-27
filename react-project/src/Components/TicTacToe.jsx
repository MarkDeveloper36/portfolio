import './TicTacToe.css'
// dit project was voornamelijk bedoelt om module design patern te leren
export default function TicTacToe() {
    const handleClick = (e) => {
        let elRow = e.target.getAttribute('data-row');
        let elColumn = e.target.getAttribute('data-column');
        gameController.playRound(elRow, elColumn);
        gameBoard.DOMController.updateBox(e.target);
        gameBoard.DOMController.renderBoard(gameBoard.board);
    }

    const gameBoard = (function () {
        const board = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];

        const DOMController = {
            renderBoard: function (board) {
                let index = 0;
                for (let row = 0; row < board.length; row++) {
                    for (let col = 0; col < board[row].length; col++) {
                        let selector = `tictactoeBox${index + 1}`;
                        let element = document.querySelector(`#${selector}`);
                        element.textContent = board[row][col];
                        index++;
                    }
                }
            },
            updateBox: function(el) {
                console.log(gameController.isPlayer1);
            }
        }


        // const printBoard = () => {
        //     console.log('Board: ');

        //     let printedBoard = '';
        //     for (let i = 0; i < 3; i++) {
        //         for (let j = 0; j < 3; j++) {
        //             printedBoard += board[i][j] + ', ';
        //         }
        //         printedBoard += '\n';
        //     }

        //     console.log(printedBoard);
        // }

        return { printBoard, board, DOMController };
    })();

    function createPlayer(playerNum, symbol) {
        return { playerNum, symbol };
    }

    const player1 = createPlayer(1, 'X');
    const player2 = createPlayer(2, 'O');

    const gameController = (function () {
        let isPlayer1 = true;
        let isWinner = false;

        const playRound = (row, column) => {
            gameBoard.printBoard();

            isPlayer1 ? (
                gameBoard.board[row][column] = 'X'
            ) : (
                gameBoard.board[row][column] = 'O'
            );
            if (!checkForWinner() && !checkForTie()) { isPlayer1 = !isPlayer1 }
        }

        const checkForWinner = () => {
            let thisRoundHasWinner = false;
            if (gameBoard.board[0][0] !== '' && gameBoard.board[0][0] === gameBoard.board[0][1] && gameBoard.board[0][0] === gameBoard.board[0][2]) {
                announceWinner();
                thisRoundHasWinner = true;
            } else if (gameBoard.board[1][0] !== '' && gameBoard.board[1][0] === gameBoard.board[1][1] && gameBoard.board[1][0] === gameBoard.board[1][2]) {
                announceWinner();
                thisRoundHasWinner = true;
            } else if (gameBoard.board[2][0] !== '' && gameBoard.board[2][0] === gameBoard.board[2][1] && gameBoard.board[2][0] === gameBoard.board[2][2]) {
                announceWinner();
                thisRoundHasWinner = true;
            } else if (gameBoard.board[0][0] !== '' && gameBoard.board[0][0] === gameBoard.board[1][0] && gameBoard.board[0][0] === gameBoard.board[2][0]) {
                announceWinner();
                thisRoundHasWinner = true;
            } else if (gameBoard.board[0][1] !== '' && gameBoard.board[0][1] === gameBoard.board[1][1] && gameBoard.board[0][1] === gameBoard.board[2][1]) {
                announceWinner();
                thisRoundHasWinner = true;
            } else if (gameBoard.board[0][2] !== '' && gameBoard.board[0][2] === gameBoard.board[1][2] && gameBoard.board[0][2] === gameBoard.board[2][2]) {
                announceWinner();
                thisRoundHasWinner = true;
            } else if (gameBoard.board[0][0] !== '' && gameBoard.board[0][0] === gameBoard.board[1][1] && gameBoard.board[0][0] === gameBoard.board[2][2]) {
                announceWinner();
                thisRoundHasWinner = true;
            } else if (gameBoard.board[0][2] !== '' && gameBoard.board[0][2] === gameBoard.board[1][1] && gameBoard.board[0][2] === gameBoard.board[2][0]) {
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
                    if (box === '') {
                        isBoardFilled = false;
                    }
                })
            });
            if (isBoardFilled && !isWinner) {
                thisRoundIsTie = true;
                console.log("It's a Tie!");
                prompt("Start new Game?\nType \"y\"") === 'y' ? startNewGame() : null;
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
            prompt("Start new Game?\nType \"y\"") === 'y' ? startNewGame() : null;
        }

        const startNewGame = () => {
            for (let rowIndex = 0; rowIndex < gameBoard.board.length; rowIndex++) {
                for (let boxIndex = 0; boxIndex < gameBoard.board[rowIndex].length; boxIndex++) {
                    gameBoard.board[rowIndex][boxIndex] = '';
                }
            }
            isWinner = false;
            isPlayer1 = true;
        }

        return { playRound, isPlayer1};
    })();

    return (
        <section id='sectionTicTacToe'>
            <h1 onClick={gameController.playRound}>Tic Tac Toe</h1>
            <div id='ticTacToeContainer' className='container'>
                <div className='row'>
                    <div id='tictactoeBox1' data-row="0" data-column="0" className='box bg-secondary border border-primary' onClick={handleClick}></div>
                    <div id='tictactoeBox2' data-row="0" data-column="1" className='box bg-secondary border border-primary' onClick={handleClick}></div>
                    <div id='tictactoeBox3' data-row="0" data-column="2" className='box bg-secondary border border-primary' onClick={handleClick}></div>
                </div>
                <div className='row'>
                    <div id='tictactoeBox4' data-row="1" data-column="0" className='box bg-secondary border border-primary' onClick={handleClick}></div>
                    <div id='tictactoeBox5' data-row="1" data-column="1" className='box bg-secondary border border-primary' onClick={handleClick}></div>
                    <div id='tictactoeBox6' data-row="1" data-column="2" className='box bg-secondary border border-primary' onClick={handleClick}></div>
                </div>
                <div className='row'>
                    <div id='tictactoeBox7' data-row="2" data-column="0" className='box bg-secondary border border-primary' onClick={handleClick}></div>
                    <div id='tictactoeBox8' data-row="2" data-column="1" className='box bg-secondary border border-primary' onClick={handleClick}></div>
                    <div id='tictactoeBox9' data-row="2" data-column="2" className='box bg-secondary border border-primary' onClick={handleClick}></div>
                </div>
            </div>
        </section>
    )
}