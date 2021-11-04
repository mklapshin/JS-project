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

let flag = 1;
let oldCellSmilePosition = 1;
let newCellSmilePosition = 1;
const config = {
  size: 5
}
const board = document.getElementById('board');
let smilePosition = 1;

function render(board) {

  for (let i = 1; i <= config.size ** 2; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.coordinate = i;
    board.appendChild(cell);
  }
};

function generateItem() {
  const newItem = getRandomNumber(1, config.size * config.size)
}

function generateProblem() {
  let newProblem = getRandomNumber(1, config.size * config.size)
};

function getRandomNumber(min, max) {
  return Math.trunc(Math.random() * (max - min) + min);
}

function renderSmile() {
  let smile = 1;
  const newCellSmile = document.querySelector(`.cell[data-coordinate="${smile}"]`);
  newCellSmile.className = "smile";
};

function renderFoodAndProblems() {
  let food = getRandomNumber(1, config.size ** 2);
  const newCellFood = document.querySelector(`.cell[data-coordinate="${food}"]`);
  newCellFood.className = "food";
  let problems = getRandomNumber(1, config.size ** 2);
  if (problems == food) {
    while (problems == food) {
      problems = getRandomNumber(1, config.size ** 2);
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

  switch (event.code) {
    case 'ArrowUp':
      oldCellSmilePosition = document.querySelector(`.smile[data-coordinate="${smilePosition}"]`);
      oldCellSmilePosition.className = "cell";
      if (smilePosition <= 5) {
        alert('Вы проиграли');
        flag = 0;
        smilePosition = 1;
        renderSmile();
      } smilePosition -= 5;
      newCellSmilePosition = document.querySelector(`.cell[data-coordinate="${smilePosition}"]`);
      newCellSmilePosition.className = "smile";
      break;
    case 'ArrowDown':
      oldCellSmilePosition = document.querySelector(`.smile[data-coordinate="${smilePosition}"]`);
      oldCellSmilePosition.className = "cell";
      if (smilePosition > 20) {
        alert('Вы проиграли');
        flag = 0;
        smilePosition = 1;
        renderSmile();
      } smilePosition += 5;
      newCellSmilePosition = document.querySelector(`.cell[data-coordinate="${smilePosition}"]`);
      newCellSmilePosition.className = "smile";
      break;
    case 'ArrowRight':
      oldCellSmilePosition = document.querySelector(`.smile[data-coordinate="${smilePosition}"]`);
      oldCellSmilePosition.className = "cell";
      if (smilePosition % 5 == 0) {
        alert('Вы проиграли');
        flag = 0;
        smilePosition = 1;
        renderSmile();
      } smilePosition++;
      newCellSmilePosition = document.querySelector(`.cell[data-coordinate="${smilePosition}"]`);
      newCellSmilePosition.className = "smile";
      break;
    case 'ArrowLeft':
      oldCellSmilePosition = document.querySelector(`.smile[data-coordinate="${smilePosition}"]`);
      oldCellSmilePosition.className = "cell";
      if ((smilePosition - 1) % 5 == 0) {
        alert('Вы проиграли');
        flag = 0;
        smilePosition = 1;
        renderSmile();
      } smilePosition--;
      newCellSmilePosition = document.querySelector(`.cell[data-coordinate="${smilePosition}"]`);
      newCellSmilePosition.className = "smile";
      break;
    default:
      return;
  }
  // if (flag != 0) {
  //   let newPosition = smilePosition;
  //   let newCellSmilePosition = document.querySelector(`.cell[data-coordinate="${newPosition}"]`);
  //   newCellSmilePosition.className = "smile";
  // }

});




  //   function renderItems(recentCoordinate, className) {
  //   const cells = document.getElementsByClassName('cell');

  //   for (let cell of cells) {
  //     cell.classList.remove(className);
  //   }
  //   const newCell = document.querySelector(`.cell[data-coordinate="${recentCoordinate}"]`);
  //   newCell.classList.add(className);
  // };



