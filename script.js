'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMsg = function (msg) {
  document.querySelector('.msg').textContent = msg;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMsg('Invalid Number');
  } else if (guess === secretNumber) {
    displayMsg('Correct!');
    document.querySelector('.secret-number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#ECF87F';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMsg(guess > secretNumber ? 'TOO HIGH!' : 'TOO LOW!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMsg('Game Over!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.restart').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMsg('Start Guessing..');
  document.querySelector('.score').textContent = score;
  document.querySelector('.secret-number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#c3e0e5';
});
