

let player1Score = 0
let player2Score = 0


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
        addToScorePlayer1()
        
        
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
        addToScorePlayer2()
    }
    
}

function game () {
    while (player1Score < 1 && player2Score < 1) {

        let player1Position = prompt("enter o position")
        let player2Position = prompt("enter x position")
        
        getGameData(player1Position, player2Position)
        console.log(oneShot)
        playRound()
        console.log("player1score: " + player1Score)
        console.log("player2score: " + player2Score)
    }
    
}
game()


// console.log(getGameData(0,3))
// console.log(getGameData(1,8))
// console.log(getGameData(2,5))
