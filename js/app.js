/*-------------------------------- Constants --------------------------------*/

//** 4 define requierd constants
// let playerX = 1
// let playerO = -1
// in render function this provides logic for what need to display
const players = {
  '1': {
    name: 'playerX',
    score: 0,
  },
  '-1': {
    name: 'playerO',
    score: 0,
  }
}

const winningCombos = [
  combo1 = [sq0, sq1, sq2],
  combo2 = [sq3, sq4, sq5],
  combo3 = [sq6, sq7, sq8],
  combo4 = [sq0, sq3, sq6],
  combo5 = [sq1, sq4, sq7],
  combo6 = [sq2, sq5, sq8],
  combo7 = [sq0, sq4, sq8],
  combo8 = [sq6, sq4, sq2],
]

/*---------------------------- Variables (state) ----------------------------*/   //**  1   */ 
let allSquares
//1.1
let winner
// 1.3 
let turn
//1.2
//define variables needed to track state of the game



/*------------------------ Cached Element References ------------------------*/  //** 2 */
const sq = document.querySelectorAll('.square')
const message = document.querySelector('#message')
//   return `Click your square of choice, to start the game.`
// }
allSquares = [sq0 = null, sq1 = null, sq2 = null, sq3 = null, sq4 = null, sq5 = null, sq6 = null, sq7 = null, sq8 = null]
console.log(allSquares)


// let allSquares = squareArr.map(function(a){

// }
// )
//use a for loop to map each null to eac indv square using index (0= top left and so on)

//

/*----------------------------- Event Listeners -----------------------------*/
//use single listener with event bubbling 

sq.forEach(square => square.addEventListener('click', handleClick))


/*-------------------------------- Functions --------------------------------*/
// init   --  to initialize stated variablees  //** 3.1 */
function init(){

  
}

//render  -- render these values to the page   //** 3.2 */
function render() {
  gameBoard.forEach(allSquares => {
    if (allSquares === 1){
      allSquare.innerHTML = 'X'}
      else if (allSquares === -1) {
        allSquares.innerHTML = 'O'
      }else {
        allSquares = null
      }
    }) 
    console.log(allSquares)

}

function handleClick (event) {
  console.log(event.target.id)
}

//play  -  wait for user to click square   //** 3.3 */
    //  handle when use clicks square   //** 5 */
    //  handle player clicking replay button  ?//**6 */

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


