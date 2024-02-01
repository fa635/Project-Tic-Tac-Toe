




const oneShot = (function () {

    let gameBoard = [a1 = "", a2 = "", a3 = "", b1 = "", b2 = "", b3 = "", c1 = "", c2 = "", c3 = ""]

    let winner = ""
    
    let content = ""

    let divIndex = 0

    return { gameBoard, winner, content, divIndex }
})()



function playRound () {
    

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
        oneShot.winner = "o"
        
        
        
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
        oneShot.winner = "x"
    }
    else if (oneShot.gameBoard[0] !== "" && oneShot.gameBoard[1] !== "" && oneShot.gameBoard[2] !== "" && oneShot.gameBoard[3] !== "" && oneShot.gameBoard[4] !== "" && oneShot.gameBoard[5] !== "" && oneShot.gameBoard[6] !== "" && oneShot.gameBoard[7] !== "" && oneShot.gameBoard[8] !== "") {
    oneShot.winner = "tie"
    }
    
}



const squares = document.querySelectorAll(".square")
squares.forEach(function(div) {
    div.addEventListener("click", markSquare)
})




squares.forEach(function(div) {
    div.setAttribute("data-index", oneShot.divIndex)
    oneShot.divIndex++
})



function markSquare (e) {


    if (oneShot.content === "") {

        oneShot.content = "o"
        oneShot.gameBoard[this.dataset.index] = "o"
   
    }
    else if (oneShot.content === "x") { 
        
        if (oneShot.gameBoard[this.dataset.index] === "") {

            if (oneShot.winner === "") {

                oneShot.content = "o"

                oneShot.gameBoard[this.dataset.index] = "o"

                playRound()

                if (oneShot.winner === "o") {

                    const body = document.querySelector("body")
                    const div = document.createElement("div")
                    body.appendChild(div)

                    e.target.textContent = oneShot.content

                    div.textContent = "o won"
                }
                else if (oneShot.winner === "tie") {
                    const body = document.querySelector("body")
                    const div = document.createElement("div")
                    body.appendChild(div)

                    e.target.textContent = oneShot.content

                    div.textContent = "it’s a tie!"
                }
            }

            
        }

    }
    else if (oneShot.content === "o") { 
        
        if (oneShot.gameBoard[this.dataset.index] === "") {

            if (oneShot.winner === "") {
                oneShot.content = "x"

                oneShot.gameBoard[this.dataset.index] = "x"

                playRound()

                if (oneShot.winner === "x") {

                    const body = document.querySelector("body")
                    const div = document.createElement("div")
                    body.appendChild(div)

                    e.target.textContent = oneShot.content

                    div.textContent = "x won"
                }
                
            }
            
        }

    }
    
    
    if (oneShot.winner === "") {
        if (oneShot.gameBoard[this.dataset.index] === oneShot.content) {
        e.target.textContent = oneShot.content
        }
    }
    
}


const restart = document.querySelector("button")
restart.addEventListener("click", restartGame)


function restartGame () {
    oneShot.gameBoard[0] = "", oneShot.gameBoard[1] = "", oneShot.gameBoard[2] = "", 
    oneShot.gameBoard[3] = "", oneShot.gameBoard[4] = "", oneShot.gameBoard[5] = "", 
    oneShot.gameBoard[6] = "", oneShot.gameBoard[7] = "", oneShot.gameBoard[8] = ""
    oneShot.winner = ""
    oneShot.content = ""


    squares.forEach(function(div) {
        div.textContent = ""
    })

}

