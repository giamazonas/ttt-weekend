/*-------------------------------- Constants --------------------------------*/

//** 4 define required constants

const playerX = 1
const playerO = -1
let turn 
// in render function this provides logic for what need to display



/*---------------------------- Variables (state) ----------------------------*/   //**  1   */ 

//1.1
let winner = null
let gameOver 
// 1.3 
// let turn 
//1.2
////define variables needed to track state of the game
let tie 
//// let initMessage = `Click your square of choice, to start the game.`


/*------------------------ Cached Element References ------------------------*/  //** 2 */
const sq = document.querySelectorAll('.square')
const message = document.querySelector('#message')

const gameBoard = document.querySelector('.board')


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

sq.forEach(square => square.addEventListener('click', handleClick))


/*-------------------------------- Functions --------------------------------*/
// init   --  to initialize stated variablees  //** 3.1 */
function init(){
  sq = [null, null, null, null, null, null, null, null, null]
  turn = 1   // 1/-1 ? // 3.2.2 
  winner = null // 3.2.3  
  message.textContent = `Let's play! Choose your first square.`
  sq.innerHTML = ""
  render()     //3.2.4 
}

//___________________________________________

//render  -- render these values to the page   //** 3.2 */

function render() {
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
    }
    else if (sq === null){
      sq[idx].innerHTML = ''
    }
  }) 
}


function getWinner(){
  let winner = winCombo.forEach()
  for(let c = 0; c < winCombo.length; c++){
    if (playerX = winner()) {
      return `X is the winner!`
      console.log(winner())
    // }else if (playerO = isWinner){
      return `O is the winner!`
    }else (tie)=> `Tie Game. Play again!`
    }
  }
  // (winner() = winCombo.some(arr)

  function handleClick(e, idx) {
    return sq[idx]
    if (winner !== null) {
      return gameOver
  } else return winner.push()
    return (turn * -1)
    //obtain index of sq clicked on
    // extract index from id asigned to element
    // filter click to an array 
    // console.log(event.target.id)
  }
  
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
