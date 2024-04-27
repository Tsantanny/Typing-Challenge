const words = ["azerty", "consider", "govern", "clear", "global"];
let current_word = 0;
let score = 0;
let mistake = 0;

function displayWord() {
  document.getElementById("word").textContent = words[current_word];
}

function updateScore() {
  score++;
  document.getElementById("current-score").textContent = score;
}

document.querySelector("button").addEventListener("click", function () {
  const inputWord = document.querySelector("input").value.trim().toLowerCase();
  if (inputWord === words[current_word]) {
    updateScore();
    mistake = 0;
    current_word++;
    if (current_word < words.length) {
      displayWord();
    } else {
      document.getElementById("message").textContent = "congrat ! ";
    }
  } else {
    mistake++;
    if (mistake === 3) {
      document.getElementById("message").textContent = "Game Over";
    } else {
      document.getElementById("message").textContent = "wrong answer";
    }
  }
});
displayWord();
