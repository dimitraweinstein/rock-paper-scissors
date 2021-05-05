// import functions and grab DOM elements
const submitButton = document.querySelector('submit-button');
const gameResultsDiv = document.querySelector('game-results-div');
const totalGamesDiv = document.querySelector('total-games-div');
const userWinsDiv = document.querySelector('user-wins-div');
const resetButton = document.querySelector('reset-button');

// initialize state
let totalGames = 0;
let totalWins = 0;
let totalLosses = 0;
let computerThrow = Math.ceil(Math.random() * 3);

// set event listeners to update state and DOM
