const letters = ["A", "S", "D", "F", "J", "K", "L"];

const letterDiv = document.getElementById("letter");
const scoreDiv = document.getElementById("score");
const timerDiv = document.getElementById("timer");
const startBtn = document.getElementById("start");

let score = 0;
let timeLeft = 30;
let currentLetter = "";
let gameActive = false;
let timerInterval;
let hideTimeout;
let guessed = false;

function getRandomLetter() {
    return letters[Math.floor(Math.random() * letters.length)];
}

function showLetter() {
    guessed = false;
    currentLetter = getRandomLetter();
    letterDiv.textContent = currentLetter;

    // 1 წამში ასო გაქრეს
    hideTimeout = setTimeout(() => {
        if (!guessed && gameActive) {
            endGame(false);
        }
        letterDiv.textContent = "";
    }, 1000);
}

function startGame() {
    score = 0;
    timeLeft = 30;
    gameActive = true;

    scoreDiv.textContent = "Score: 0";
    timerDiv.textContent = "Time: 30s";
    letterDiv.textContent = "";

    showLetter();

    timerInterval = setInterval(() => {
        timeLeft--;
        timerDiv.textContent = `Time: ${timeLeft}s`;

        if (timeLeft <= 0) {
            endGame(true);
        }
    }, 1000);
}

function endGame(win) {
    gameActive = false;
    clearInterval(timerInterval);
    clearTimeout(hideTimeout);

    if (win) {
        letterDiv.textContent = "თქვენ მოიგეთ 🎉";
    } else {
        letterDiv.textContent = "თქვენ ვერ გამოიცანით ❌";
    }
}

document.addEventListener("keydown", (e) => {
    if (!gameActive) return;

    if (e.key.toUpperCase() === currentLetter) {
        guessed = true;
        score++;
        scoreDiv.textContent = `Score: ${score}`;
        clearTimeout(hideTimeout);
        showLetter();
    }
});

startBtn.addEventListener("click", startGame);
