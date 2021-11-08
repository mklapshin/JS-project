let oldCellSmilePosition = 1;
let newCellSmilePosition = 1;
let smilePosition = 1;
let foodItems = [1];
let food = 1;
let problems = 1;
let score = 0;
let newScore = 1;
let clean1 = 0;
const config = {
  size: 5
};
const board = document.getElementById('board');
let problemsCoordinates = [];
function render(board) {
  for (let i = 1; i <= config.size ** 2; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.coordinate = i;
    board.appendChild(cell);
  }
};
function cleanBoard() {
  for (let k = 0; k < problemsCoordinates.length; k++) {
    clean1 = document.querySelector(`.problems[data-coordinate="${problemsCoordinates[k]}"]`);
    clean1.className = "cell";
  }
  clean1 = document.querySelector(`.food[data-coordinate="${food}"]`);
  clean1.className = "cell";
  foodItems = [1];
  problemsCoordinates = [];
  score = 0;
  renderFoodAndProblems();
  renderSmile();
  newScore = document.getElementById("scoreValue");
  newScore.innerHTML = score;
}
function generateItem() {
  const newItem = getRandomNumber(1, config.size * config.size)
}
function generateProblem() {
  let newProblem = getRandomNumber(1, config.size * config.size)
};
function getRandomNumber(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}
function renderFoodAndProblems() {
  food = getRandomNumber(1, config.size ** 2);
  let newCellFood = document.querySelector(`.cell[data-coordinate="${food}"]`);
  if (newCellFood == null) {
    while (newCellFood == null) {
      food = getRandomNumber(1, config.size ** 2);
      newCellFood = document.querySelector(`.cell[data-coordinate="${food}"]`);
    }
  }
  newCellFood.className = "food";
  problems = getRandomNumber(1, config.size ** 2);
  if (problems == food) {
    while (problems == food) {
      problems = getRandomNumber(1, config.size ** 2);
    }
  }
  let newCellProblems = document.querySelector(`.cell[data-coordinate="${problems}"]`);
  while (newCellProblems == null) {
    problems = getRandomNumber(1, config.size ** 2);
    if (problems == food) {
      while (problems == food) {
        problems = getRandomNumber(1, config.size ** 2);
      }
    }
    newCellProblems = document.querySelector(`.cell[data-coordinate="${problems}"]`);
  }
  newCellProblems.className = "problems";
  problemsCoordinates.push(problems);
};
buttonStart.addEventListener("click", () => {
  render(board);
  const timeCountdown = document.getElementById("scoreValue");
  timeCountdown.innerHTML = 'Счет: 0';
  renderSmile();
  renderFoodAndProblems();
});
document.addEventListener('keydown', function (event) {
  event.preventDefault();
  switch (event.code) {
    case 'ArrowUp':
      oldCellSmilePosition = document.querySelector(`.smile[data-coordinate="${smilePosition}"]`);
      oldCellSmilePosition.className = "cell";
      if (smilePosition <= 5) {
        alert('Вы проиграли');
        cleanBoard();
        return;
      } else {
        smilePosition -= 5;
        for (let i = 0; i < problemsCoordinates.length; i++) {
          if (smilePosition == problemsCoordinates[i]) {
            alert('Вы проиграли');
            cleanBoard();
            return;
          }
        };
        if (smilePosition == food) {
          alert('Вы выиграли');
          score++;
          newScore = document.getElementById("scoreValue");
          newScore.innerHTML = score;
          renderFoodAndProblems();
          newCellSmilePosition = document.querySelector(`.food[data-coordinate="${smilePosition}"]`);
          newCellSmilePosition.className = "smile";
          return;
        }
        else if (smilePosition == problems) {
          alert('Вы проиграли');
          cleanBoard();
          break;
        }
        newCellSmilePosition = document.querySelector(`.cell[data-coordinate="${smilePosition}"]`);
        newCellSmilePosition.className = "smile";
        break;
      }
    case 'ArrowDown':
      oldCellSmilePosition = document.querySelector(`.smile[data-coordinate="${smilePosition}"]`);
      oldCellSmilePosition.className = "cell";
      if (smilePosition > 20) {
        alert('Вы проиграли');
        cleanBoard();
        return;
      } else {
        smilePosition += 5;
        for (let i = 0; i < problemsCoordinates.length; i++) {
          if (smilePosition == problemsCoordinates[i]) {
            alert('Вы проиграли');
            cleanBoard();
            return;
          }
        };
        if (smilePosition == food) {
          alert('Вы выиграли');
          score++;
          newScore = document.getElementById("scoreValue");
          newScore.innerHTML = score;
          renderFoodAndProblems();
          newCellSmilePosition = document.querySelector(`.food[data-coordinate="${smilePosition}"]`);
          newCellSmilePosition.className = "smile";
          return;
        }
        else if (smilePosition == problems) {
          alert('Вы проиграли');
          cleanBoard();
          break;
        }
        newCellSmilePosition = document.querySelector(`.cell[data-coordinate="${smilePosition}"]`);
        newCellSmilePosition.className = "smile";
        break;
      }
    case 'ArrowRight':
      oldCellSmilePosition = document.querySelector(`.smile[data-coordinate="${smilePosition}"]`);
      oldCellSmilePosition.className = "cell";
      if (smilePosition % 5 == 0) {
        alert('Вы проиграли');
        cleanBoard();
        return;
      } else {
        smilePosition++;
        for (let i = 0; i < problemsCoordinates.length; i++) {
          if (smilePosition == problemsCoordinates[i]) {
            alert('Вы проиграли');
            cleanBoard();
            return;
          }
        };
        if (smilePosition == food) {
          alert('Вы выиграли');
          score++;
          newScore = document.getElementById("scoreValue");
          newScore.innerHTML = score;
          renderFoodAndProblems();
          newCellSmilePosition = document.querySelector(`.food[data-coordinate="${smilePosition}"]`);
          newCellSmilePosition.className = "smile";
          return;
        }
        else if (smilePosition == problems) {
          alert('Вы проиграли');
          cleanBoard();
          break;
        }
        newCellSmilePosition = document.querySelector(`.cell[data-coordinate="${smilePosition}"]`);
        newCellSmilePosition.className = "smile";
        break;
      }
    case 'ArrowLeft':
      oldCellSmilePosition = document.querySelector(`.smile[data-coordinate="${smilePosition}"]`);
      oldCellSmilePosition.className = "cell";
      if ((smilePosition - 1) % 5 == 0) {
        alert('Вы проиграли');
        cleanBoard();
        return;
      } else {
        smilePosition--;
        for (let i = 0; i < problemsCoordinates.length; i++) {
          if (smilePosition == problemsCoordinates[i]) {
            alert('Вы проиграли');
            cleanBoard();
            return;
          }
        };
        if (smilePosition == food) {
          alert('Вы выиграли');
          score++;
          newScore = document.getElementById("scoreValue");
          newScore.innerHTML = score;
          renderFoodAndProblems();
          newCellSmilePosition = document.querySelector(`.food[data-coordinate="${smilePosition}"]`);
          newCellSmilePosition.className = "smile";
          return;
        }
        else if (smilePosition == problems) {
          alert('Вы проиграли');
          cleanBoard();
          break;
        }
        newCellSmilePosition = document.querySelector(`.cell[data-coordinate="${smilePosition}"]`);
        newCellSmilePosition.className = "smile";
        break;
      }
  }
});
function renderSmile() {
  let smile = 1;
  let newCellSmile = document.querySelector(`.cell[data-coordinate="${smile}"]`);
  newCellSmile.className = "smile";
  smilePosition = 1;
};