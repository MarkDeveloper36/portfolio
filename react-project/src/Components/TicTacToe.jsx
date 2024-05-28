import './TicTacToe.css'
// dit project was voornamelijk bedoelt om module design patern te leren

// To do: 
// Clean up the interface to allow players to put in their names, include a button to start/restart the game and add a display element that shows the results upon game end!

export default function TicTacToe() {
    const handleClick = (e) => {
        let elRow = e.target.getAttribute('data-row');
        let elColumn = e.target.getAttribute('data-column');
        gameController.playRound(elRow, elColumn);
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
                        // element.textContent = board[row][col];
                        if (board[row][col] === 'X') {
                            element.innerHTML = `
                        <svg width="233" height="176" viewBox="0 0 233 176" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M170.54 72.0455C176.146 67.4253 181.859 62.9294 187.452 58.3006C200.233 47.7102 218.041 39.6313 217.376 20.4819C217.076 11.7816 211.53 3.34691 202.71 1.22111C177.715 -4.80485 150.842 28.4751 132.126 47.8816C103.693 27.7979 69.7273 2.08258 36.8288 0.681091C30.4386 0.41108 24.8026 8.82857 28.9728 14.3702C47.6036 39.117 75.8219 57.1306 101.653 75.4699C71.9346 101.22 41.1662 125.576 7.8305 146.663C-6.0815 155.47 2.73887 179.93 19.4153 174.14C61.7127 159.452 98.0528 129.794 132.97 102.574C133.664 102.038 134.324 101.451 135.019 100.911C146.595 109.813 158.321 118.517 169.563 127.848C182.082 138.232 193.975 155.389 211.535 155.757C223.762 156.015 230.89 146.093 232.175 135.121C234.79 112.779 198.557 88.7819 170.54 72.0455Z" fill="black" />
                        </svg>
                        `;
                        } else if (board[row][col] === 'O') {
                            element.innerHTML = `
                        <svg width="781" height="770" viewBox="0 0 781 770" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector" d="M755.636 687.233C757.874 684.551 759.723 681.21 760.919 677.051C823.733 460.136 727.438 202.282 547.869 68.5682C462.438 4.95378 353.203 -17.5175 251.207 15.0633C193.479 33.5 137.318 68.4313 95.1571 111.95C34.2695 174.796 8.7976 261.676 -2.8888 345.97C-14.5804 430.208 -16.7189 525.336 33.2926 599.127C60.9983 640.007 86.6651 682.068 132.717 699C187.207 719.03 222 732.363 287 747C348.415 760.83 343 761.5 429 765C484.5 760 507.717 765 558.717 765C651.717 781 719.805 766.605 755.636 687.233ZM630.744 724.981C598.851 713.32 565 720 498.5 720C377 730 379 724.981 305 709C179 656.244 155.1 665.534 82.7403 571.667C29.5827 502.722 46.5092 393.248 57.4636 313.836C57.8484 311.037 57.7532 308.502 57.4638 306.085C79.618 252.027 98.1583 189.782 139.624 146.981C177.14 108.27 230.344 79.0884 281.91 64.6146C371.828 39.3817 460.518 71.6316 531.505 127.277C680.19 243.846 760.362 473.953 708.131 656.244C706.995 657.9 705.964 659.729 705.093 661.763C691.504 693.536 672.478 740.235 630.744 724.981Z" fill="black" />
                        </svg>
                        `;
                        }
                        index++;
                    }
                }
            },
        }

        return { board, DOMController };
    })();

    function createPlayer(playerNum, symbol) {
        return { playerNum, symbol };
    }

    const player1 = createPlayer(1, 'X');
    const player2 = createPlayer(2, 'O');

    const gameController = (function () {
        let isPlayer1Turn = true;
        let isWinner = false;

        const playRound = (row, column) => {
            let selectedBox = gameBoard.board[row][column];

            if (selectedBox === '') {
                isPlayer1Turn ? (gameBoard.board[row][column] = player1.symbol) : (gameBoard.board[row][column] = player2.symbol);

                gameBoard.DOMController.renderBoard(gameBoard.board);
                updateBoard();
            }
        }

        const updateBoard = () => {
            if (!checkForWinner() && !checkForTie()) { isPlayer1Turn = !isPlayer1Turn }
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
                setTimeout(() => {
                    startNewGame();
                }, 2000);

            }
            return thisRoundIsTie;
        }

        const announceWinner = () => {
            isPlayer1Turn ?
                console.log('player 1 won (' + player1.symbol + ')')
                :
                console.log('player 2 won (' + player2.symbol + ')');
            isWinner = true;
            setTimeout(() => {
                startNewGame();
            }, 2000);
        }

        const startNewGame = () => {
            for (let rowIndex = 0; rowIndex < gameBoard.board.length; rowIndex++) {
                for (let boxIndex = 0; boxIndex < gameBoard.board[rowIndex].length; boxIndex++) {
                    gameBoard.board[rowIndex][boxIndex] = '';
                }
            }
            isWinner = false;
            isPlayer1Turn = true;
            gameBoard.DOMController.renderBoard(gameBoard.board);
        }

        return { playRound, isPlayer1Turn };
    })();

    return (
        <section id='sectionTicTacToe' className='py-5'>
            <h1 onClick={gameController.playRound}>Tic Tac Toe</h1>
            <div id='ticTacToeContainer' className='container p-5 justify-content-center'>
                <div className='row justify-content-center'>
                    <div id='tictactoeBox1' data-row="0" data-column="0" className='box d-flex justify-content-center align-items-center' onClick={handleClick}></div>
                    <div id='tictactoeBox2' data-row="0" data-column="1" className='box d-flex justify-content-center align-items-center' onClick={handleClick}></div>
                    <div id='tictactoeBox3' data-row="0" data-column="2" className='box d-flex justify-content-center align-items-center' onClick={handleClick}></div>
                </div>
                <div className='row justify-content-center'>
                    <div id='tictactoeBox4' data-row="1" data-column="0" className='box d-flex justify-content-center align-items-center' onClick={handleClick}></div>
                    <div id='tictactoeBox5' data-row="1" data-column="1" className='box d-flex justify-content-center align-items-center' onClick={handleClick}></div>
                    <div id='tictactoeBox6' data-row="1" data-column="2" className='box d-flex justify-content-center align-items-center' onClick={handleClick}></div>
                </div>
                <div className='row justify-content-center'>
                    <div id='tictactoeBox7' data-row="2" data-column="0" className='box d-flex justify-content-center align-items-center' onClick={handleClick}></div>
                    <div id='tictactoeBox8' data-row="2" data-column="1" className='box d-flex justify-content-center align-items-center' onClick={handleClick}></div>
                    <div id='tictactoeBox9' data-row="2" data-column="2" className='box d-flex justify-content-center align-items-center' onClick={handleClick}></div>
                </div>
            </div>
        </section>
    )
}