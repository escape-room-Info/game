// game.js

let currentQuestionIndex = 0;
let currentRoom = 0;
let timer = null;
let timeRemaining = 0;
let score = 0;
let mistakes = 0;
let totalTime = 0;
let questionStartTime = 0;

function startGame() {
    currentQuestionIndex = 0;
    currentRoom = 0;
    score = 0;
    mistakes = 0;
    totalTime = 0;

    document.getElementById("result-screen").style.display = "none";
    nextRoom(0);
}

function nextRoom(roomNumber) {
    currentRoom = roomNumber;
    const roomTitle = QUESTIONS[roomNumber * 2].room;

    document.getElementById("room-title").textContent = roomTitle;
    document.getElementById("room-title").style.display = "block";

    setTimeout(() => {
        document.getElementById("room-title").style.display = "none";
        loadQuestion(roomNumber * 2);
    }, 1500);
}

function loadQuestion(index) {
    if (index >= QUESTIONS.length) {
        endGame(true);
        return;
    }

    currentQuestionIndex = index;
    const q = QUESTIONS[index];

    document.getElementById("question-text").textContent = q.question;
    document.getElementById("options-container").innerHTML = "";

    q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.onclick = () => selectAnswer(i);
        document.getElementById("options-container").appendChild(btn);
    });

    timeRemaining = q.timeLimit;
    questionStartTime = Date.now();

    updateTimerDisplay();
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 0) {
            clearInterval(timer);
            handleWrongAnswer();
        }
    }, 1000);

    updateProgressBar();
}

function updateTimerDisplay() {
    document.getElementById("timer-display").textContent = timeRemaining + "s";
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / QUESTIONS.length) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
}

function selectAnswer(optionIndex) {
    clearInterval(timer);

    const q = QUESTIONS[currentQuestionIndex];
    const elapsed = Math.floor((Date.now() - questionStartTime) / 1000);
    totalTime += elapsed;

    if (optionIndex === q.answer) {
        score += 100 + Math.max(0, timeRemaining);
        document.getElementById("score-display").textContent = score;
        goToNext();
    } else {
        handleWrongAnswer();
    }
}

function handleWrongAnswer() {
    mistakes++;
    if (mistakes >= 3) {
        endGame(false);
        return;
    }
    goToNext();
}

function goToNext() {
    const nextIndex = currentQuestionIndex + 1;

    if (nextIndex % 2 === 0 && nextIndex < QUESTIONS.length) {
        nextRoom(nextIndex / 2);
    } else {
        loadQuestion(nextIndex);
    }
}

function endGame(escaped) {
    clearInterval(timer);

    const screen = document.getElementById("result-screen");
    screen.style.display = "block";

    if (escaped) {
        screen.innerHTML = `
            <h2>Escaped!</h2>
            <p>Total Time: ${totalTime}s</p>
            <p>Score: ${score}</p>
            <p>Mistakes: ${mistakes}</p>
            <button onclick="startGame()">Play Again</button>
        `;
    } else {
        screen.innerHTML = `
            <h2>Caught by the System!</h2>
            <p>You made 3 mistakes.</p>
            <button onclick="startGame()">Try Again</button>
        `;
    }
}
