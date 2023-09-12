"use strict";

const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const number = document.querySelector(".number");
const body = document.getElementsByTagName("body");
const check = document.querySelector(".check");
const again = document.querySelector(".again");

let randomNumber = Math.trunc(Math.random() * 20) + 1;

const onClickButton = () => {
  let inputValue = document.querySelector(".guess").value;

  if (!inputValue.length) {
    message.textContent = "Please enter number.";
  } else if (inputValue < 1 || inputValue > 20) {
    message.textContent = "Enter between 1 to 20";
  } else {
    if (inputValue - 5 >= randomNumber) {
      message.textContent = "📈 Too high";
      score.textContent = Number(score.textContent) - 1;
    } else if (inputValue > randomNumber) {
      message.textContent = "high";
      score.textContent = Number(score.textContent) - 1;
    } else if (Number(inputValue) + 5 <= randomNumber) {
      message.textContent = "📉 Too low";
      score.textContent = Number(score.textContent) - 1;
    } else if (inputValue < randomNumber) {
      message.textContent = "  Low";
      score.textContent = Number(score.textContent) - 1;
    } else {
      message.textContent = "🎉WellDone";
      number.textContent = randomNumber;
      body[0].style.backgroundColor = "#60b347";
      number.style.width = "30rem";
      Number(score.textContent) > Number(highScore.textContent)
        ? (highScore.textContent = score.textContent)
        : (highScore.textContent = highScore.textContent);
    }
  }
  if (Number(score.textContent) < 1) {
    message.textContent = "You Loose!!";
    check.style.display = "none";
    return;
  }
};

check.addEventListener("click", () => {
  onClickButton();
});

again.addEventListener("click", () => {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  body[0].style.backgroundColor = "#222";
  number.textContent = "?";
  score.textContent = 20;
  document.querySelector(".guess").value = "";
  message.textContent = "Start guessing...";
  check.style.display = "block";
});
