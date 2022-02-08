/*-------------------------------- Constants --------------------------------*/


const playerX = 1
const playerO = -1
let turn 


/*---------------------------- Variables (state) ----------------------------*/   


let winner = null
let gameOver, sq, turnCount, tie, square

/*------------------------ Cached Element References ------------------------*/  


const gameStatus = document.querySelector('#message')
const gameBoard = document.querySelectorAll('.board div')

const resetBtn = document.querySelector('#reset-button')
const board = document.querySelector('.board')



const winCombo = [
  combo1 = [0, 1, 2],      
  combo2 = [3, 4, 5],      
  combo3 = [6, 7, 8],     
  combo4 = [0, 3, 6],    
  combo5 = [1, 4, 7],      
  combo6 = [2, 5, 8],     
  combo7 = [0, 4, 8],    
  combo8 = [6, 4, 2],   
]

gameStatus.textContent = message
resetBtn.addEventListener('click', init)
board.addEventListener('click', handleClick)

init()
function init(){
  sq = [
    null, null, null, 
    null, null, null, 
    null, null, null]
  console.log(sq)
  turn = 1  
  winner = null 
  message.textContent = `Let's play! Choose your first square.`  

  gameBoard.forEach(sq => sq.innerText ='')
  resetBtn.setAttribute("hidden", true)
  handleClick(sq)
  turnCount = 0
  getWinner()
}


function handleClick(sq){
  const idx = event.target.id.replace('sq', '')
    if (winner !== null){
      return
    }
    if (sq[idx] !== null){
      return 
    }
  sq[idx]= turn
  turn *= -1
  turnCount += 1

  resetBtn.setAttribute('click', init)
  render(sq, idx)
}


function render(sq, idx) {
  if (turn === 1) {
    gameBoard[idx].innerText = 'X' 
    console.log(gameBoard[idx])
    message.textContent = `It's O's turn...`
  }else if(turn === -1){
    gameBoard[idx].textContent = 'O'
    message.textContent = `It's X's turn...`
  }
    getWinner()
  }



function getWinner(){
  winCombo.forEach((combo)=>{
    if (sq[combo[0]]+sq[combo[1]]+sq[combo[2]] === 3) {
        console.log(`X wins!`)
        winner = 'X'
        message.textContent = `O is the winner!`
        confetti.start(2000)
        resetBtn.removeAttribute("hidden")
    }else if(sq[combo[0]]+sq[combo[1]]+sq[combo[2]] === -3){
        console.log(`O wins!`)
        winner = 'O'
        message.textContent = `X is the winner!`
      confetti.start(2000)
      resetBtn.removeAttribute("hidden")
    } 
  })
    if(turnCount === 9 && winner === null){
      console.log('check tie')
      message.textContent = `Tie Game. Play again!`
    resetBtn.removeAttribute("hidden")
    }
}