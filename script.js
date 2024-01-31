

let winner = ""


const oneShot = (function () {

    let gameBoard = [a1 = "", a2 = "", a3 = "", b1 = "", b2 = "", b3 = "", c1 = "", c2 = "", c3 = ""]

    return { gameBoard }
})()

function getGameData(player1Position, player2Position) {

    

    oneShot.gameBoard[player1Position] = "o"
    oneShot.gameBoard[player2Position] = "x"

}




function playRound () {

    
    const addToScorePlayer1 = () => player1Score++;
    const addToScorePlayer2 = () => player2Score++;
    
    // let tie


    if (
        (oneShot.gameBoard[0] === "o" && oneShot.gameBoard[1] === "o" && oneShot.gameBoard[2] === "o") || 
        (oneShot.gameBoard[3] === "o" && oneShot.gameBoard[4] === "o" && oneShot.gameBoard[5] === "o") ||
        (oneShot.gameBoard[6] === "o" && oneShot.gameBoard[7] === "o" && oneShot.gameBoard[8] === "o") ||
        (oneShot.gameBoard[0] === "o" && oneShot.gameBoard[3] === "o" && oneShot.gameBoard[6] === "o") ||
        (oneShot.gameBoard[1] === "o" && oneShot.gameBoard[4] === "o" && oneShot.gameBoard[7] === "o") ||
        (oneShot.gameBoard[2] === "o" && oneShot.gameBoard[5] === "o" && oneShot.gameBoard[8] === "o") ||
        (oneShot.gameBoard[0] === "o" && oneShot.gameBoard[4] === "o" && oneShot.gameBoard[8] === "o") ||
        (oneShot.gameBoard[2] === "o" && oneShot.gameBoard[4] === "o" && oneShot.gameBoard[6] === "o") 
        ){
        winner = "o"
        
        
        
    }
    else if (
        (oneShot.gameBoard[0] === "x" && oneShot.gameBoard[1] === "x" && oneShot.gameBoard[2] === "x") || 
        (oneShot.gameBoard[3] === "x" && oneShot.gameBoard[4] === "x" && oneShot.gameBoard[5] === "x") ||
        (oneShot.gameBoard[6] === "x" && oneShot.gameBoard[7] === "x" && oneShot.gameBoard[8] === "x") ||
        (oneShot.gameBoard[0] === "x" && oneShot.gameBoard[3] === "x" && oneShot.gameBoard[6] === "x") ||
        (oneShot.gameBoard[1] === "x" && oneShot.gameBoard[4] === "x" && oneShot.gameBoard[7] === "x") ||
        (oneShot.gameBoard[2] === "x" && oneShot.gameBoard[5] === "x" && oneShot.gameBoard[8] === "x") ||
        (oneShot.gameBoard[0] === "x" && oneShot.gameBoard[4] === "x" && oneShot.gameBoard[8] === "x") ||
        (oneShot.gameBoard[2] === "x" && oneShot.gameBoard[4] === "x" && oneShot.gameBoard[6] === "x") 
        ){
        winner = "x"
    }
    // else if (oneShot.gameBoard[0] !== "" && oneShot.gameBoard[1] !== "" && oneShot.gameBoard[2] !== "" && oneShot.gameBoard[3] !== "" && oneShot.gameBoard[4] !== "" && oneShot.gameBoard[5] !== "" && oneShot.gameBoard[6] !== "" && oneShot.gameBoard[7] !== "" && oneShot.gameBoard[8] !== "") {
    //     //tie = true
    //     return "it’s a tie!"
    // }
    
}

function game () {

    let tie

    while (player1Score < 1 && player2Score < 1) {

        let player1Position = prompt("enter o position")
        let player2Position = prompt("enter x position")
        
        getGameData(player1Position, player2Position)
        console.log(oneShot)
        playRound()
        console.log("player1score: " + player1Score)
        console.log("player2score: " + player2Score)


        if (oneShot.gameBoard[0] !== "" && oneShot.gameBoard[1] !== "" && oneShot.gameBoard[2] !== "" && oneShot.gameBoard[3] !== "" && oneShot.gameBoard[4] !== "" && oneShot.gameBoard[5] !== "" && oneShot.gameBoard[6] !== "" && oneShot.gameBoard[7] !== "" && oneShot.gameBoard[8] !== "") {
            tie = true
            
        }
    }  

    
    if (tie === true) {
        console.log("it’s a tie!") 
    }
}
//game()


// console.log(getGameData(0,3))
// console.log(getGameData(1,8))
// console.log(getGameData(2,5))





const squares = document.querySelectorAll(".square")
squares.forEach(function(div) {
    div.addEventListener("click", markSquare)
})


divIndex = 0

squares.forEach(function(div) {
    div.setAttribute("data-index", divIndex)
    divIndex++
})

let content = ""

function markSquare(e) {


    if (content === "") {

        content = "o"
        oneShot.gameBoard[this.dataset.index] = "o"
   
    }
    else if (content === "x") { 
        
        if (oneShot.gameBoard[this.dataset.index] === "") {

            if (winner === "") {

                content = "o"

                oneShot.gameBoard[this.dataset.index] = "o"

                playRound()

                if (winner === "o") {

                    const body = document.querySelector("body")
                    const div = document.createElement("div")
                    body.appendChild(div)

                    e.target.textContent = content

                    div.textContent = "o won"
                }
            }

            
        }

    }
    else if (content === "o") { 
        
        if (oneShot.gameBoard[this.dataset.index] === "") {

            if (winner === "") {
                content = "x"

                oneShot.gameBoard[this.dataset.index] = "x"

                playRound()

                if (winner === "x") {

                    const body = document.querySelector("body")
                    const div = document.createElement("div")
                    body.appendChild(div)

                    e.target.textContent = content

                    div.textContent = "x won"
                }
            }
            
        }

    }
    
    if (winner === "") {
        if (oneShot.gameBoard[this.dataset.index] === content) {
        e.target.textContent = content
        }
    }
    
}



