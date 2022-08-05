let turnCount = 0;

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
            if(turnCount%2 === 0)
            symbol = playerOne.playerMark
                gameboard.board.splice(key, 1, symbol);
                mark.forEach((el, index)=>{
                    el.textContent = gameboard.board[index]
            })

            if(turnCount%2 !== 0)
            symbol = playerTwo.playerMark
                gameboard.board.splice(key, 1, symbol);
                mark.forEach((el, index)=>{
                    el.textContent = gameboard.board[index]
            })
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
