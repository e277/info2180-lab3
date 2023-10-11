window.onload = function(){
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

    gameBoard.addEventListener("click", function(event){
        square = event.target
        if (xTurn){
            square.innerHTML = X_CLASS
            square.classList.add(X_CLASS)
            xTurn = false
        } else {
            square.innerHTML = O_CLASS
            square.classList.add(O_CLASS)
            xTurn = true
        }
    })

    
    const squares = document.querySelectorAll(".square")
    squares.forEach(square => {
        square.addEventListener("mouseover", function(event) {
            square.classList.add("hover")
        })
        square.addEventListener("mouseout", function(event) {
            square.classList.remove("hover")
        })
    })

}


