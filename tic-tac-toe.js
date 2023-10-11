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

    // For your next task, when a user clicks on a square in the grid it should alternate putting 
    // an X or an O onto the square that was clicked. Also ensure you add the class "X" or 
    // "O" to the square so that it is styled with the appropriate colour from the stylesheet. 
    // Take a look at the stylesheet to see what these classes do. 
    
    // Hint: You may want to initialize an empty array to keep track of the state of the game 
    // after each square is clicked so that you can use it later to check which user has won. 
    // You can also use the JavaScript innerHTML or textContent property to make the 
    // appropriate X or O show up in the appropriate div
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

}


