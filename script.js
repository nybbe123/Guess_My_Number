'use strict';
window.addEventListener('load', main);


/**
 * State
 */
let randomNumber = Math.round(Math.random() * 20) + 1;
console.log(randomNumber);

let score = 15;
let highScore = 0;


/**
 * functions to be called on window load
 */
function main() {
    currentStatus();
    addEventListeners();
}


/**
 * Displays the score based on current state
 */
function currentStatus() {
    const scoreElement = document.querySelector('.score').innerHTML = score;
    const highScoreElement = document.querySelector('.highscore').innerHTML = highScore;
}


/**
 * Eventlistener
 */
function addEventListeners() {
    const checkBtn = document.getElementById('check-btn');
    checkBtn.addEventListener('click', checkGuess);

    const playAgainBtn = document.getElementById('restart-btn');
    playAgainBtn.addEventListener('click', clearGame);
}


/**
 * Compares the guess to the randomNumber, then changes the scores and updates the DOM
 */
function checkGuess() {
    const messageElement = document.querySelector('.message');
    const guess = document.querySelector('.guess').value;
    const checkBtn = document.getElementById('check-btn');

    if(guess == randomNumber) {
        messageElement.innerHTML = 'You guessed right!';
        document.body.style.backgroundColor = 'green';
        checkBtn.style.display = 'none';
        highScore += score;
        currentStatus();
    } else if (guess > randomNumber && guess) {
        messageElement.innerHTML = 'Lower!';
        score--;
        currentStatus();
    } else if (guess < randomNumber && guess) {
        messageElement.innerHTML = 'Higher!';
        score--;
        currentStatus();
    } 
    
    if (!guess) {
        messageElement.innerHTML = 'No number!';
    }
}


/**
 * Function will set everything back to normal exept earned highscores
 */
function clearGame() {
    randomNumber = Math.round(Math.random() * 20) + 1;
    console.log(randomNumber);

    score = 15;

    const messageElement = document.querySelector('.message');
    const guess = document.querySelector('.guess').value = '';
    const checkBtn = document.getElementById('check-btn');

    messageElement.innerHTML = 'start guessing...';
    document.body.style.backgroundColor = '#222';
    checkBtn.style.display = 'unset';

    currentStatus();
}