import { userWin, userLose, gameDraw } from './utils.js';

// import functions and grab DOM elements
const submitButton = document.querySelector('#submit-button');
const gameResultsDiv = document.querySelector('#game-results-div');
const totalGamesDiv = document.querySelector('#total-games-div');
const userWinsDiv = document.querySelector('#user-wins-div');
const resetButton = document.querySelector('#reset-button');

// initialize state
let totalGames = 0;
let totalWins = 0;
let totalLosses = 0;
let totalDraw = 0;


// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {

    const computerThrow = Math.ceil(Math.random() * 3);
    const chosenThrow = document.querySelector('input:checked');
    const userThrow = chosenThrow.value;

    userWin(userThrow, computerThrow);
    userLose(userThrow, computerThrow);
    gameDraw(userThrow, computerThrow);

    // if (condition) {
        
    // } else {
        
    // }
                // On Submit button click:
                // - Get computer's choice
                // -Get the user's choice from the radio button
                // -compare user and computer choice
                // -update state
                //     -wins
                //     -losses
                //     -games played
                // -Present results in the DOM
});