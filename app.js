import { gameResult, randomThrow } from './utils.js';

// import functions and grab DOM elements
const submitButton = document.querySelector('#submit-button');
const gameResultsDiv = document.querySelector('#game-results-div');
const totalGamesDiv = document.querySelector('#total-games-div');
const userWinDiv = document.querySelector('#user-win-div');
const userLossesDiv = document.querySelector('user-losses-div');
const totalDrawDiv = document.querySelector('total-draw-div');
const resetButton = document.querySelector('#reset-button');

// initialize state
let totalGames = 0;
let totalWins = 0;
let totalLosses = 0;
let totalDraw = 0;


// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {

    const computerThrow = Math.ceil(Math.random() * 3);
    const computerRandomThrow = randomThrow(computerThrow);
    const chosenThrow = document.querySelector('input:checked');
    const userThrow = chosenThrow.value;

console.log(gameResult(userThrow, computerRandomThrow));

    if (gameResult(userThrow, computerRandomThrow) === 'win') {
        // totalWins++;
        // totalGames++;
        totalGamesDiv.textContent = `${totalGames}`; 
        userWinDiv.textContent = `Congratulations! ${userThrow} beats ${computerRandomThrow}. You win!`;
    } else if (gameResult(userThrow, computerRandomThrow) === 'lose') {
        // totalLosses++;
        // totalGames++;
        totalGamesDiv.textContent = `${totalGames}`;
        gameResultsDiv.textContent = `Sorry! ${computerRandomThrow} beats ${userThrow}. You lose!`;
    } else if (gameResult(userThrow, computerRandomThrow) === 'draw'); { 
        // totalDraw++; 
        // totalGames++;
        totalGamesDiv.textContent = `${totalGames}`;
        gameResultsDiv.textContent = `${userThrow} and ${computerRandomThrow} are the same. The game is a draw. Try again.`;
    }


    // userWinDiv.textContent = `${totalWins}`;
    // userLossesDiv.textContent = `${totalLosses}`;
    // totalDrawDiv.textContent = `${totalDraw}`;

});
    

resetButton.addEventListener('click', () => {


});
