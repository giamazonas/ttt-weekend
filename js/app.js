/*-------------------------------- Constants --------------------------------*/

//** 4 define requierd constants
// let playerX = 1
// let playerO = -1
// in render function this provides logic for what need to display


/*---------------------------- Variables (state) ----------------------------*/   //**  1   */ 
let squares 
//1.1
let winner
// 1.3 
let turn
//1.2
//define variables needed to track state of the game


/*------------------------ Cached Element References ------------------------*/  //** 2 */
const allSquare = document.querySelectorAll('.square')


//

/*----------------------------- Event Listeners -----------------------------*/
//use single listener with event bubbling 


/*-------------------------------- Functions --------------------------------*/
// init   --  to initialize stated variablees  //** 3.1 */

//render  -- render these values to the page   //** 3.2 */

//play  -  wait for user to click square   //** 3.3 */
    //  handle when use clicks square   //** 5 */
    //  handle player clicking replay button  ?//**6 */

// reset game option/button??


// **  AAU 
// I should see a tictactoe board open
// I should be given directions to start
// I should be able to select a square and put an X/or O
// I should not be able to change a square's value
// I should be able to complete the game
// I should be made to feel like a winner (confetti)
// should be told game ends in tie if tie
// reset button at end regardless, given chance to play again
