import { userWin, userLose, gameDraw } from './utils.js';

// import functions and grab DOM elements
const submitButton = document.querySelector('#submit-button');
const gameResultsDiv = document.querySelector('#game-results-div');
const totalGamesDiv = document.querySelector('#total-games-div');
const userWinDiv = document.querySelector('#user-win-div');
const resetButton = document.querySelector('#reset-button');

// initialize state
let totalGames = 0;
let totalWins = 0;
let totalLosses = 0;
let totalDraw = 0;


// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {

    const computerThrow = Math.ceil(Math.random('Ro', 'Sham', 'Bo') * 3);
    const chosenThrow = document.querySelector('input:checked');
    const userThrow = chosenThrow.value;

    userWin(userThrow, computerThrow);
    userLose(userThrow, computerThrow);
    gameDraw(userThrow, computerThrow);

    if (userWin) {
        totalWins++;
        totalGames++;
        gameResultsDiv.textContent = `Congratulations! ${userThrow} beats ${computerThrow}. You win!`;
    } else if (userLose) {
        totalLosses++;
        totalGames++;
        gameResultsDiv.textContent = `Sorry! ${computerThrow} beats ${userThrow}. You lose!`;
    } else {
        totalDraw++; 
        totalGames++;
        totalGamesDiv.textContent = totalGames;
        gameResultsDiv.textContent = `${userThrow} and ${computerThrow} are the same. The game is a draw. Try again.`;
    }


    userWinDiv.textContent = totalWins;
    

});
    

                // On Submit button click:
                // - Get computer's choice
                // -Get the user's choice from the radio button
                // -compare user and computer choice
                // -update state
                //     -wins
                //     -losses
                //     -games played
                // -Present results in the DOM
