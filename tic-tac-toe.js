window.onload = function() {
    const gameBoard = document.getElementById("board")
    // add the class square to each div in the board
    for (let i = 0; i < gameBoard.children.length; i++) {
        gameBoard.children[i].classList.add("square")
    }

    const X_CLASS = "X"
    const O_CLASS = "O"
    WINNING_COMBINATIONS = [
        [0,1,2], [3,4,5], [6,7,8], // horizontal
        [0,3,6], [1,4,7], [2,5,8], // vertical
        [0,4,8], [2,4,6] // diagonal
    ]
    let xTurn = true

    gameBoard.addEventListener("click", (event) => {
        const square = event.target
        if (!square.classList.contains("square") || square.classList.contains(X_CLASS) || square.classList.contains(O_CLASS) || winner) {
            return
        }

        if (xTurn){
            square.innerHTML = X_CLASS
            square.classList.add(X_CLASS)
            xTurn = false
        } else {
            square.innerHTML = O_CLASS
            square.classList.add(O_CLASS)
            xTurn = true
        }

        // check if there is a winner
        checkWinner()
    })


    const squares = document.querySelectorAll(".square")
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.classList.add("hover")
        })
        square.addEventListener("mouseout", () => {
            square.classList.remove("hover")
        })
    })

   
    const status = document.getElementById("status")
    let winner = false
    function checkWinner() {
        for (let i = 0; i < WINNING_COMBINATIONS.length; i++) {
            const winningCombo = WINNING_COMBINATIONS[i]
            const square1 = squares[winningCombo[0]]
            const square2 = squares[winningCombo[1]]
            const square3 = squares[winningCombo[2]]
            if (square1.innerHTML === X_CLASS && square2.innerHTML === X_CLASS && square3.innerHTML === X_CLASS) {
                status.innerHTML = "Congratulations! X is the Winner!"
                status.classList.add("you-won")
                winner = true
            } else if (square1.innerHTML === O_CLASS && square2.innerHTML === O_CLASS && square3.innerHTML === O_CLASS) {
                status.innerHTML = "Congratulations! O is the Winner!"
                status.classList.add("you-won")
                winner = true
            }
        }
    }

    
    const newGame = document.getElementsByClassName("btn")[0]
    newGame.addEventListener("click", () => {
        for (let i = 0; i < squares.length; i++) {
            squares[i].innerHTML = ""
            squares[i].classList.remove(X_CLASS)
            squares[i].classList.remove(O_CLASS)
        }
        status.innerHTML = "Move your mouse over a square and click to play an X or an O."
        status.classList.remove("you-won")
        winner = false
    })

}


