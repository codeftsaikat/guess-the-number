// const randomNumber = parseInt(Math.random() * 100 + 1);
let randomNumber = parseInt(Math.random() * 100) + 1;

const submitBtn = document.querySelector('#sbt');
const userInput = document.querySelector('#guessField');
const userGuess = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultPage');
const p = document.createElement('p');

let previousGuess = [];
let numberOfGuess = 1;
let playGame = true;

if (playGame) {
        submitBtn.addEventListener('click', (e) => {
                e.preventDefault()
                const guess = parseInt(userInput.value)
                validateNumber(guess)
        })
}

function validateNumber(guess) {
        if (isNaN(guess)) {
                alert("Please enter a valid number.");
        } else if (guess < 1) {
                alert("Please enter a number greater than one.");
        } else if (guess > 100) {
                alert("Please enter a number smaller than one hundred.");
        } else {
                previousGuess.push(guess)
                if (numberOfGuess >= 11) {
                        displayGuess(guess)
                        displayMessage(`<h3>Game over. Random number was <br/> ${randomNumber}</h3>`)
                        endGame()
                } else {
                        displayGuess(guess)
                        checkGuess(guess)
                }
        }
};

function checkGuess(guess) {
        if (guess === randomNumber) {
                displayMessage(`You guessed it right`)
                endGame()
        } else if (guess < randomNumber) {
                displayMessage("Number is too low")
        } else if (guess > randomNumber) {
                displayMessage("Number is too big")
        }
};

function displayGuess(guess) {
        userInput.value = "";
        userGuess.innerHTML += `${guess}, `;
        numberOfGuess++;
        lastResult.innerHTML = `${11 - numberOfGuess}`;
}


function displayMessage(message) {
        lowOrHigh.innerHTML = `<h2>${message}</h2>`
};

function endGame() {
        userInput.value = "";
        // userInput.setAttribute('disable', '')
        userInput.setAttribute('disabled', '');
        p.classList.add('button')
        p.innerHTML = `<h3 id="newGame">Start New Game</h3>`;
        startOver.appendChild(p)
        playGame = false;
        newGame()
}

function newGame() {
        const newGameButton = document.querySelector('#newGame')
        newGameButton.addEventListener("click", (e) => {
                randomNumber = parseInt(Math.random() * 100) + 1;
                previousGuess = [];
                playGame = true;
                userGuess.innerHTML = "";
                lastResult.innerHTML = `${11 - numberOfGuess}`;
                userInput.removeAttribute('disabled')
                startOver.removeChild(p)

        })
};