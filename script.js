let turnCount = 0;
const winMessage = document.querySelector(".win-message");
const resetBtn = document.querySelector(".reset");
resetBtn.addEventListener("click", ()=>{
    window.location.reload();
})

function player(mark){
    playerMark = mark;
    return {
        playerMark,
    }
}

const playerOne = player("X");
const playerTwo = player("O");

const mark = document.querySelectorAll("div.space");
for(let i = 0; i < mark.length; i++){
    let key = i;
    let symbol = ''
    mark[i].addEventListener('click', ()=>{
        console.log(`hello ${key}`)
        if(gameboard.board[key]!== "") return
        else{
            if(turnCount%2 === 0){
                
                symbol = playerOne.playerMark
                gameboard.board.splice(key, 1, symbol);
                mark.forEach((el, index)=>{
                    el.textContent = gameboard.board[index]
                    
            })
            if(winCondition(symbol)=='Player One Wins'){
                winMessage.innerText = `${playerOne.playerMark} Has Won The Game`
            }
            console.log(winCondition(symbol))
            }

            if(turnCount%2 !== 0){ 
                symbol = playerTwo.playerMark
                gameboard.board.splice(key, 1, symbol);
                mark.forEach((el, index)=>{
                    el.textContent = gameboard.board[index]
                })
                if(winCondition(symbol)=='Player Two Wins'){
                    winMessage.innerText = `${playerTwo.playerMark} Has Won The Game`
                }
                console.log(winCondition(symbol))
            }
        }
        turnCount++;
        console.log(turnCount)
        turn();
        addMark();
    })
}

const gameboard = (() => {
    const board = ['',"","", "", "", "", "", "", ""];
        // mark.forEach((el, index)=>{
        //     el.textContent = board[index]
        // })

    return {
        board,
    };
})();


// function renderGame(){
//     mark
// }
function addMark() {
    const playerOneMark = 'X';
    const playerTwoMark = 'O';
}

function turn() {
    let turnCount = 0
    turnCount ++;
    return {
        turnCount
    }
}

function winCondition() {
    // let gameboard.board = []
    let tied = false
    // gameboard.board.forEach(element => {
    //     gameboard.board.push(element.innerText)
    // })
    if ( //checks rows for winning condition
        ((gameboard.board[0] == 'X') && (gameboard.board[1] == 'X') && (gameboard.board[2] == 'X')) ||
        ((gameboard.board[3] == 'X') && (gameboard.board[4] == 'X') && (gameboard.board[5] == 'X')) ||
        ((gameboard.board[6] == 'X') && (gameboard.board[7] == 'X') && (gameboard.board[8] == 'X')) ||
        //checks columns for winning condition
        ((gameboard.board[0] == 'X') && (gameboard.board[3] == 'X') && (gameboard.board[6] == 'X')) ||
        ((gameboard.board[1] == 'X') && (gameboard.board[4] == 'X') && (gameboard.board[7] == 'X')) ||
        ((gameboard.board[2] == 'X') && (gameboard.board[5] == 'X') && (gameboard.board[8] == 'X')) ||
        //checks diagonals for winning condition
        ((gameboard.board[0] == 'X') && (gameboard.board[4] == 'X') && (gameboard.board[8] == 'X')) ||
        ((gameboard.board[2] == 'X') && (gameboard.board[4] == 'X') && (gameboard.board[6] == 'X'))) {
        return "Player One Wins"
        // return 1
    } else if ( //checks rows for winning condition
        ((gameboard.board[0] == 'O') && (gameboard.board[1] == 'O') && (gameboard.board[2] == 'O')) ||
        ((gameboard.board[3] == 'O') && (gameboard.board[4] == 'O') && (gameboard.board[5] == 'O')) ||
        ((gameboard.board[6] == 'O') && (gameboard.board[7] == 'O') && (gameboard.board[8] == 'O')) ||
        //checks columns for winning condition
        ((gameboard.board[0] == 'O') && (gameboard.board[3] == 'O') && (gameboard.board[6] == 'O')) ||
        ((gameboard.board[1] == 'O') && (gameboard.board[4] == 'O') && (gameboard.board[7] == 'O')) ||
        ((gameboard.board[2] == 'O') && (gameboard.board[5] == 'O') && (gameboard.board[8] == 'O')) ||
        //checks diagonals for winning condition
        ((gameboard.board[0] == 'O') && (gameboard.board[4] == 'O') && (gameboard.board[8] == 'O')) ||
        ((gameboard.board[2] == 'O') && (gameboard.board[4] == 'O') && (gameboard.board[6] == 'O'))) {
        // return -1
        return "Player Two Wins"
    }
    
    for (let i = 0; i < 9; i++) {
        if (gameboard.board[i] == '') {
            return 2
        } else {
                tied = true
        }
    }
    if (tied) {
        return "TIE"
         // return 0
    }
}

function endGame() {
    if(winCondition == 1)
    winMessage.innerText = `${playerOne.playerMark} Has Won The Game`;

}
