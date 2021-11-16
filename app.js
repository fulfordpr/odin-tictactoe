let gameOver = false;
let xTurn = true;
const cells = document.querySelectorAll('.cell')

const state = [

]
const winStates = [
]

const StateFactory = (cell, content) =>{
    return{
        cell,
        content
    }
}

const checkWin = ()=>{
    if(state[0].content === 'X' && 
    state[1].content === 'X' &&
    state[2].content === 'X' ){
        console.log('X Wins!')
    }
}

const gameBoard = ()=>{
    if (gameOver == false){
        for (let i = 0; i < cells.length; i++) {
            const newState = StateFactory(cells[i].dataset.cell, cells[i].textContent);
            state.push(newState);
            cells[i].addEventListener('click', ()=>{;
                if (xTurn == true){
                    state[i].content = 'X';
                    cells[i].textContent ='X'
                    xTurn = false;
                } else if (xTurn == false){
                    state[i].content = 'O';
                    cells[i].textContent = 'O'
                    xTurn = true;
                }  
                console.log(state)  
                checkWin()
            })
        }
    }
}




gameBoard();