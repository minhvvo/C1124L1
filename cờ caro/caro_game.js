const gameBoard = document.getElementById('game-board');
const gameStatus = document.getElementById('game-status');
const restartButton = document.getElementById('restart-button');

let board = Array(9).fill(null);
let currentPlayer = 'X';
let gameActive = true;

function createBoard() {
    board.forEach((_, index) => {
        const cell = document.createElement('div');
        cell.addEventListener('click', () => handleCellClick(index));
        gameBoard.appendChild(cell);
    });
}

function handleCellClick(index) {
    if (!gameActive || board[index]) return;

    board[index] = currentPlayer;
    gameBoard.children[index].textContent = currentPlayer;

    if (checkWin()) {
        gameStatus.textContent = `Player ${currentPlayer} wins!`;
        gameActive = false;
    } else if (board.every(cell => cell)) {
        gameStatus.textContent = 'It\'s a tie!';
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        gameStatus.textContent = `Player ${currentPlayer}\'s turn`;
    }
}

function checkWin() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    return winningCombos.some(combo =>
        combo.every(index => board[index] === currentPlayer)
    );
}

function resetGame() {
    board.fill(null);
    gameActive = true;
    currentPlayer = 'X';
    gameStatus.textContent = `Player X\'s turn`;
    Array.from(gameBoard.children).forEach(cell => cell.textContent = '');
}

restartButton.addEventListener('click', resetGame);

createBoard();
