/*-------------------------------- Constants --------------------------------*/

//** 4 define required constants

const playerX = 1
const playerO = -1
let turn 
// in render function this provides logic for what need to display


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




/*---------------------------- Variables (state) ----------------------------*/   //**  1   */ 

//1.1
let winner = null
// 1.3 
// let turn 
//1.2
//define variables needed to track state of the game
let tie 


/*------------------------ Cached Element References ------------------------*/  //** 2 */
const sq = document.querySelectorAll('.square')
const message = document.querySelector('#message')
const gameBoard = document.querySelector('.board')

//   return `Click your square of choice, to start the game.`
// }
// allSquares = [sq0 = null, sq1 = null, sq2 = null, sq3 = null, sq4 = null, sq5 = null, sq6 = null, sq7 = null, sq8 = null]
// console.log(allSquares)



//

/*----------------------------- Event Listeners -----------------------------*/
//use single listener with event bubbling 

sq.forEach(square => square.addEventListener('click', handleClick))


/*-------------------------------- Functions --------------------------------*/
// init   --  to initialize stated variablees  //** 3.1 */
function init(){
  sq = [null, null, null, null, null, null, null, null, null]
  turn = 1 // 3.2.2 
  winner = null // 3.2.3  
  message.textContent = `Let's play! Choose your first square.`
  render()     //3.2.4 
  sq.innerHTML = ""
}
//___________________________________________

//render  -- render these values to the page   //** 3.2 */
function renderGame() {
  gameBoard.forEach((sq, idx) => {
    if (sq === 1){
      sq[idx].innerHTML = 'X'
      sq[idx].style.backgroundColor = 'red';
      message.textContent = `It's O's turn...`
    }
      else if (sq === -1) {
        sq[idx].innerHTML = 'O'
        sq[idx].style.backgrounColor = 'blue';
        message.textContent = `It's X's turn...`
      // }else (sq === null){
      //   sq[idx].innerHTML = ''
        }
    }
  ) 
}

    // i (!isWinner) {
    //   //indicate whose turn it is
    // } else if (winner ==='T') {
    //   //indicate a tie game
    // }else {
    //   //congrats to the winner!
    //   gameMessage.textContent = 'congrats'
    // }



function handleClick (event) {
  console.log(event.target.id)
}

//play  -  wait for user to click square   //** 3.3 */



  
function renderWinner(){
  let isWinner = winCombo.forEach()
  for(let c = 0; c < winCombo.length; c++){
    if (playerX = isWinner) {
      return `X is the winner!`
      console.log(isWinner)
    // }else if (playerO = isWinner){
      return `O is the winner!`
    }else (tie)=> `Tie Game. Play again!`
    }
  }



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
