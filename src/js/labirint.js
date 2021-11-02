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


function render() {
  const board = document.getElementById('board');

  for (let i = 0; i < config.size ** 2; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.dataset.coordinate = i;
    board.appendChild(cell);
  }
};

buttonStart.addEventListener("click", () => {
  render();
  const timeCountdown = document.getElementById("scoreValue");
  timeCountdown.innerHTML = 'Счет: 0';
});


function generateItem() {
  const newItem = getRandomNumber(0, config.size * config.size - 1)
}

function generateProblem() {
  let newProblem = getRandomNumber(0, config.size * config.size - 1)
};


// function renderItems(recentCoordinate, className) {
//   const cells = document.getElementsByClassName('cell');

//   for (let cell of cells) {
//     cell.classList.remove(className);
//   }
//   const newCell = document.querySelector(`.cell[data-coordinate="${recentCoordinate}"]`);
//   newCell.classList.add(className);
// }


// renderItems(2, 'food');








//   move(event) {
//     let direction = null;
//     switch (event.keyCode) {
//       case 38:
//         direction = SNAKE_DIRECTION_UP;
//         break;
//       case 40:
//         direction = SNAKE_DIRECTION_DOWN;
//         break;
//       case 37:
//         direction = SNAKE_DIRECTION_LEFT;
//         break;
//       case 39:
//         direction = SNAKE_DIRECTION_RIGHT;
//         break;
//       default:
//         return;
//     }

