/*-------------------------------- Constants --------------------------------*/

//** 4 define required constants

const playerX = 1
const playerO = -1
let turn 
// in render function this provides logic for what need to display



/*---------------------------- Variables (state) ----------------------------*/   //**  1   */ 

//1.1
let winner = null
let gameOver, sq, turnCount, tie, square
// 1.3 
// let turn 
//1.2
////define variables needed to track state of the game
// let tie 
//// let initMessage = `Click your square of choice, to start the game.`


/*------------------------ Cached Element References ------------------------*/  //** 2 */
// const sq = document.querySelectorAll('.square')

const gameStatus = document.querySelector('#message')
const gameBoard = document.querySelectorAll('.board div')

const resetBtn = document.querySelector('#reset-button')
const board = document.querySelector('.board')
//// allSquares = [sq0 = null, sq1 = null, sq2 = null, sq3 = null, sq4 = null, sq5 = null, sq6 = null, sq7 = null, sq8 = null]



const winCombo = [
  combo1 = [0, 1, 2],       //3
  combo2 = [3, 4, 5],      //12
  combo3 = [6, 7, 8],     //21
  combo4 = [0, 3, 6],    //9
  combo5 = [1, 4, 7],      //12
  combo6 = [2, 5, 8],     //15
  combo7 = [0, 4, 8],    //12
  combo8 = [6, 4, 2],   //12
]



// **  element to display game status??
//

/*----------------------------- Event Listeners -----------------------------*/
//use single listener with event bubbling 


// gameBoard.forEach(el => el.addEventListener('click', handleClick))
gameStatus.textContent = message
resetBtn.addEventListener('click', init)

/*-------------------------------- Functions --------------------------------*/
// init   --  to initialize stated variablees  //** 3.1 */

init()
function init(){
  sq = [
    null, null, null, 
    null, null, null, 
    null, null, null]
  console.log(sq)
  turn = 1  // 1/-1 ? // 3.2.2 
  winner = null // 3.2.3  
  message.textContent = `Let's play! Choose your first square.`  
  // T = null
  gameBoard.forEach(sq => sq.innerText ='')
  resetBtn.setAttribute("hidden", true)
  handleClick(sq)
  turnCount = 0
  getWinner()
  // render()     //3.2.4 
}


function handleClick(sq){
  board.addEventListener('click', function(event){
    console.log(event.target.id.replace('sq', ''))
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
  })
  
}
//update array of null values:
// function handleClick(event) {
//   console.log(event.target.id.replace('sq', ''))
//   const idx = event.target.id.replace('sq', '')
//   if (sq[idx] !== null){
//     return 
//   }
//   sq[idx]= turn
//   turn *= -1
// console.log(sq, idx)

//   // turnCount += 1

//   resetBtn.setAttribute('click', init)
// render(sq, idx)

//   //obtain index of sq clicked on
//   // extract index from id asigned to element
//   // filter click to an array 
//   }
// }
//___________________________________________

//render  -- render these values to the page   //** 3.2 */

function render(sq, idx) {
    // console.log()
  if (turn === 1) {
    // console.log('CHECK')
    gameBoard[idx].innerText = 'X' 
    console.log(gameBoard[idx])
    message.textContent = `It's O's turn...`
  }else if(turn === -1){
    gameBoard[idx].textContent = 'O'
    message.textContent = `It's X's turn...`
  }
  // else if (el === null){
  //   gameBoard[sq].innerHTML = ''
  // }
  // sq.forEach((el, idx) => {
  //   if (el === 1){
  //     gameBoard[idx].textContent = 'X'
  //     // gameBoard[idx].style.backgroundColor = 'red';
  //     message.textContent = `It's O's turn...`
  //       // resetBtn.removeAttribute("hidden")
  //   }
  //   else if (el === -1) {
  //     gameBoard[idx].textContent = 'O'
  //     // gameBoard[idx].style.backgrounColor = 'blue';
  //     message.textContent = `It's X's turn...`
  //       // resetBtn.removeAttribute("hidden")
  //   }
  //   // else if (el === null){
    //   // gameBoard[idx].innerHTML = ''
    getWinner()
    // } 
  }
  // ) 

// }


function getWinner(){

  winCombo.forEach((combo)=>{
    if (sq[combo[0]]+sq[combo[1]]+sq[combo[2]] === 3) {
        console.log(`X wins!`)
        message.textContent = `O is the winner!`
        confetti.start(2000)
        resetBtn.removeAttribute("hidden")
    }else if(sq[combo[0]]+sq[combo[1]]+sq[combo[2]] === -3){
        console.log(`O wins!`)
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




    // function tie(){
    //   return tie = null
    // }
    // sq[combo].every()
    // console.log(tie)
    // else if (sq.every()) !== null){
    //   console.log(tie)
    // }
    // else if (sq[combo[0]]+sq[combo[1]]+sq[combo[2]] === null &&
    //     sq[combo[0]]+sq[combo[1]]+sq[combo[2]] === 3 ||
    //     sq[combo[0]]+sq[combo[1]]+sq[combo[2]] === -3) { 

    // }

    
    // console.log(combo[0]) // this value is an index that can be 
    // //passed into sq 
    // console.log(combo[1])
    // // console.log(combo[2])
    // console.log('CHECK', sq[combo[0]]+sq[combo[1]]+sq[combo[2]])

    ///** */   possible tie equals turnCount === 9
    // console.log('SQ', sq)

  // gameBoard.reduce()
  //** */ let winner = (3 || -3)
  // for(let c = 0; c < gameBoard(); c++){
  //   if (playerX = winner()) {
  //     return `X is the winner!`
  //     confetti.start(2000)
  //     resetBtn.removeAttribute("hidden")
  //     // console.log(winner())
  //   }else if (playerO = winner()){
  //     return `O is the winner!`
  //     confetti.start(2000)
  //     resetBtn.removeAttribute("hidden")
  //   }else if (tie !== winner){ 
  //   return `Tie Game. Play again!`
  //   resetBtn.removeAttribute("hidden")
  //   }
    

  
  //play  -  wait for user to click square   //** 3.3 */

    //  handle when use clicks square   //** 5 */
    //  handle player clicking replay button  //**6 */

// reset game option/button??


// **  AAU 
// I should see a tictactoe board open
// I should be given directions to start
// I should be able to select a square and put an X/or O
// I should not be able to change a square's value once clicked
// I should be able to complete the game
// I should be made to feel like a winner (confetti)
// should be told game ends in tie if tie
// reset button at end regardless, given chance to play again


//  bootsrap:  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">