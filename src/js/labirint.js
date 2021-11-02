/* сделать кнопку запуска игры
рендерим поле
 появляется смайлик в рандомном месте

 render board

 при нажатии на кнопку старт рендерим поле, добавляем затем добавляем смайлик на ту позицию куда хочу, препятствие

Повесить на окно window событие keydown и вызыавть функцию move для движений
в функции move будем определять движения

создаем массив с координатами-номерами наших ячкеек
при нажатии на соответствующую стрелку производим операцию

numberCell + 1  - при клике вправо, но сначала проверить

*/


const config = {
  size: 5
};
const board = document.getElementById('board');
let smilePosition = 0;

function render(board) {

  for (let i = 0; i < config.size ** 2; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.coordinate = i;
    board.appendChild(cell);
  }
};

function generateItem() {
  const newItem = getRandomNumber(0, config.size * config.size - 1)
}

function generateProblem() {
  let newProblem = getRandomNumber(0, config.size * config.size - 1)
};

function getRandomNumber(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}

function renderSmile() {
  let smile = 0;
  const newCellSmile = document.querySelector(`.cell[data-coordinate="${smile}"]`);
  newCellSmile.className = "smile";
};

function renderFoodAndProblems() {
  let food = getRandomNumber(0, config.size ** 2 - 1);
  const newCellFood = document.querySelector(`.cell[data-coordinate="${food}"]`);
  newCellFood.className = "food";
  let problems = getRandomNumber(0, config.size ** 2 - 1);
  if (problems == food) {
    while (problems == food) {
      problems = getRandomNumber(0, config.size ** 2 - 1);
    }
  }
  const newCellProblems = document.querySelector(`.cell[data-coordinate="${problems}"]`);
  newCellProblems.className = "problems";
};

buttonStart.addEventListener("click", () => {
  render(board);
  const timeCountdown = document.getElementById("scoreValue");
  timeCountdown.innerHTML = 'Счет: 0';
  renderSmile();
  renderFoodAndProblems();
});


document.addEventListener('keydown', function (event) {

  if (event.code == 'ArrowUp') {
    smilePosition -= 5;
  } else if (event.code == 'ArrowDown') {
    smilePosition += 5;
  } else if (event.code == 'ArrowRight') {
    smilePosition++;
  } else if (event.code == 'ArrowLeft') {
    smilePosition--;
  }
  let newPosition = smilePosition;
  const newCellSmilePosition = document.querySelector(`.cell[data-coordinate="${newPosition}"]`);
  newCellSmilePosition.className = "smile";
});




  //   function renderItems(recentCoordinate, className) {
  //   const cells = document.getElementsByClassName('cell');

  //   for (let cell of cells) {
  //     cell.classList.remove(className);
  //   }
  //   const newCell = document.querySelector(`.cell[data-coordinate="${recentCoordinate}"]`);
  //   newCell.classList.add(className);
  // };



