const GAME_DURATION = 300; // 5 minutes in seconds

const player1Questions = [0, 2, 4, 6, 8].map(i => QUESTIONS[i]);
const player2Questions = [1, 3, 5, 7, 9].map(i => QUESTIONS[i]);

let p1Score = 0;
let p2Score = 0;

let p1Index = 0;
let p2Index = 0;

let currentPlayer = 1;
let timeLeft = GAME_DURATION;
let gameEnded = false;
let timerInterval = null;

const turnDisplay = document.getElementById("player-turn-display");
const questionText = document.getElementById("mp-question-text");
const optionsContainer = document.getElementById("mp-options-container");
const timerDisplay = document.getElementById("mp-timer");
const p1ScoreDisplay = document.getElementById("p1-score");
const p2ScoreDisplay = document.getElementById("p2-score");
const resultScreen = document.getElementById("mp-result-screen");

function startMultiplayerGame() {
    p1Score = 0;
    p2Score = 0;
    p1Index = 0;
    p2Index = 0;
    currentPlayer = 1;
    timeLeft = GAME_DURATION;
    gameEnded = false;

    updateScores();
    updateTimer();

    resultScreen.innerHTML = "";
    resultScreen.style.display = "none";

    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            endGameByTime();
        }
    }, 1000);

    loadCurrentQuestion();
}

function updateScores() {
    p1ScoreDisplay.textContent = p1Score;
    p2ScoreDisplay.textContent = p2Score;
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerDisplay.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function loadCurrentQuestion() {
    if (gameEnded) return;

    const question =
        currentPlayer === 1
            ? player1Questions[p1Index]
            : player2Questions[p2Index];

    if (!question) {
        checkInstantWinner();
        return;
    }

    turnDisplay.textContent = `Player ${currentPlayer}'s Turn`;
    questionText.textContent = question.question;
    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => handleAnswer(index));
        optionsContainer.appendChild(button);
    });
}

function handleAnswer(selectedIndex) {
    if (gameEnded) return;

    const question =
        currentPlayer === 1
            ? player1Questions[p1Index]
            : player2Questions[p2Index];

    const correct =
        selectedIndex === question.correctAnswer ||
        selectedIndex === question.answer ||
        question.options[selectedIndex] === question.correctAnswer;

    if (correct) {
        if (currentPlayer === 1) {
            p1Score++;
            p1Index++;

            if (p1Index >= player1Questions.length) {
                endGame("Player 1 Escaped First! 🎉");
                return;
            }
        } else {
            p2Score++;
            p2Index++;

            if (p2Index >= player2Questions.length) {
                endGame("Player 2 Escaped First! 🎉");
                return;
            }
        }
    }

    updateScores();

    currentPlayer = currentPlayer === 1 ? 2 : 1;
    loadCurrentQuestion();
}

function checkInstantWinner() {
    if (p1Index >= player1Questions.length) {
        endGame("Player 1 Escaped First! 🎉");
    } else if (p2Index >= player2Questions.length) {
        endGame("Player 2 Escaped First! 🎉");
    }
}

function endGameByTime() {
    if (gameEnded) return;

    if (p1Score > p2Score) {
        endGame("Time's Up! Player 1 Wins!");
    } else if (p2Score > p1Score) {
        endGame("Time's Up! Player 2 Wins!");
    } else {
        endGame("Time's Up! It's a Draw!");
    }
}

function endGame(message) {
    gameEnded = true;
    clearInterval(timerInterval);

    turnDisplay.textContent = "";
    questionText.textContent = "";
    optionsContainer.innerHTML = "";

    resultScreen.style.display = "block";
    resultScreen.innerHTML = `
        <h2>${message}</h2>
        <p>Player 1 Score: ${p1Score}</p>
        <p>Player 2 Score: ${p2Score}</p>
        <button id="mp-rematch-btn">Rematch</button>
    `;

    document
        .getElementById("mp-rematch-btn")
        .addEventListener("click", startMultiplayerGame);
}

startMultiplayerGame();
