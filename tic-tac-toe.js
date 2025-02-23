const board = document.getElementById("board");
        const cells = document.querySelectorAll(".cell");
        const statusText = document.getElementById("status");
        const resetButton = document.getElementById("reset");
        
        let currentPlayer = "X";
        let boardState = ["", "", "", "", "", "", "", "", ""];
        let gameActive = true;

        const winningConditions = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];

        function handleCellClick(event) {
            const index = event.target.getAttribute("data-index");
            if (boardState[index] !== "" || !gameActive) return;
            
            boardState[index] = currentPlayer;
            event.target.textContent = currentPlayer;
            
            if (checkWin()) {
                statusText.textContent = `${currentPlayer} wins!`;
                gameActive = false;
                return;
            }
            
            if (!boardState.includes("")) {
                statusText.textContent = "It's a draw!";
                gameActive = false;
                return;
            }
            
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }

        function checkWin() {
            return winningConditions.some(condition => {
                const [a, b, c] = condition;
                return boardState[a] && boardState[a] === boardState[b] && boardState[a] === boardState[c];
            });
        }

        function resetGame() {
            boardState = ["", "", "", "", "", "", "", "", ""];
            gameActive = true;
            currentPlayer = "X";
            statusText.textContent = "";
            cells.forEach(cell => (cell.textContent = ""));
        }

        cells.forEach(cell => cell.addEventListener("click", handleCellClick));
        resetButton.addEventListener("click", resetGame);