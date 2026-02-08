const letters = ["A", "S", "D", "F", "J", "K", "L"];

// ელემენტების წამოღბა
const letterDiv = document.getElementById("letter");
const scoreDiv = document.getElementById("score");
const timerDiv = document.getElementById("timer");
const startBtn = document.getElementById("start");
// თამაშის ცვლადები
let score = 0;
let timeLeft = 30;
let currentLetter = "";
let gameActive = false;
let timerInterval;
let hideTimeout;
let guessed = false;
// შემთხვევითი ასოს არჩევა
function getRandomLetter() {
    return letters[Math.floor(Math.random() * letters.length)];
}
// ასოს გამოჩენა ეკრანზე
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
// თამაშის დაწყება
function startGame() {
    score = 0;
    timeLeft = 30;
    gameActive = true;

    scoreDiv.textContent = "Score: 0";
    timerDiv.textContent = "Time: 30s";
    letterDiv.textContent = "";

    showLetter();
// ტაიმერის მუშაობა
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDiv.textContent = `Time: ${timeLeft}s`;

        if (timeLeft <= 0) {
            endGame(true);
        }
    }, 1000);
}
// თმაშის დსრულება
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
// კლავიატურის დაჭერის შემოწმება
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
// სტარტ ღილაკი
startBtn.addEventListener("click", startGame);
