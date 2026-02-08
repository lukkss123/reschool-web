let randomNumber;
let attempts;
const maxAttempts = 7;

const guessInput = document.getElementById('guess-input'); 
const checkBtn = document.getElementById('check-btn');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');
const restartBtn = document.getElementById('restart-btn');
// tamashis dawyeba
function startGame() {  
  randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    feedback.textContent = '';
    attemptsDisplay.textContent = `ცდების რაოდენობა: 0`;
    guessInput.value = '';
    guessInput.disabled = false;
    checkBtn.disabled = false;
    restartBtn.style.display = 'none';
  console.log("დასაწყისი რიცხვი:", randomNumber); // მხოლოდ ტესტისთვის
}
// ricxvis shemowmeba
function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    feedback.textContent = 'გთხოვ შეიყვანე რიცხვი 1-დან 100-მდე!';
    return;
}

attempts++;
attemptsDisplay.textContent = `ცდების რაოდენობა: ${attempts}`;

if (userGuess === randomNumber) {
    feedback.textContent = `თქვენ სწორად გამოიცანით! ცდების რაოდენობა: ${attempts}`;
    endGame();
} else if (attempts >= maxAttempts) {
    feedback.textContent = `შენ წააგე! სწორი პასუხი იყო: ${randomNumber}`;
    endGame();
} else {
    feedback.textContent = userGuess < randomNumber ? 'ცადე უფრო მაღალი რიცხვი' : 'ცადე უფრო დაბალი რიცხვი'; }
}
// tamashis dasruleba
function endGame() {
    guessInput.disabled = true;
    checkBtn.disabled = true;
    restartBtn.style.display = 'inline-block';
}

// ღილაკის აქტივაცია
checkBtn.addEventListener('click', checkGuess);
restartBtn.addEventListener('click', startGame);

// თამაშის დაწყება სტარტის ღილაკიდან
document.getElementById('start-btn').addEventListener('click', () => {
    document.getElementById('start-screen').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
    startGame();
});
