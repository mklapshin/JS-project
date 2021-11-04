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

let oldCellSmilePosition = 1;
let newCellSmilePosition = 1;
let smilePosition = 1;
let foodItems = [1];
let food = 1;
let problems = 1;
const config = {
  size: 5
}
const board = document.getElementById('board');


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


function renderFoodAndProblems() {
  food = getRandomNumber(1, config.size ** 2);
  // foodItems.push(food);

  // for (let i = 0; i < 2; i++) {
  //   let newCellFood = document.querySelector(`.cell[data-coordinate="${food}"]`);
  //   newCellFood.className = "food";
  // }
  const newCellFood = document.querySelector(`.cell[data-coordinate="${food}"]`);
  newCellFood.className = "food";
  problems = getRandomNumber(1, config.size ** 2);
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
        alert('Вы проиграли')
        renderSmile();
        return;
      } else {
        smilePosition -= 5;
        if (smilePosition == food) {
          alert('Вы выиграли');
          renderFoodAndProblems();

          newCellSmilePosition = document.querySelector(`.food[data-coordinate="${smilePosition}"]`);
          newCellSmilePosition.className = "smile";
          return;
        }
        else if (smilePosition == problems) {
          alert('Вы проиграли');
          renderSmile();
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
        alert('Вы проиграли')
        renderSmile();
        return;
      } else {
        smilePosition += 5;
        if (smilePosition == food) {
          alert('Вы выиграли');
          renderFoodAndProblems();

          newCellSmilePosition = document.querySelector(`.food[data-coordinate="${smilePosition}"]`);
          newCellSmilePosition.className = "smile";
          return;
        }
        else if (smilePosition == problems) {
          alert('Вы проиграли');
          renderSmile();
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
        alert('Вы проиграли')
        renderSmile();
        return;
      } else {
        smilePosition++;
        if (smilePosition == food) {
          alert('Вы выиграли');
          renderFoodAndProblems();

          newCellSmilePosition = document.querySelector(`.food[data-coordinate="${smilePosition}"]`);
          newCellSmilePosition.className = "smile";
          return;
        }
        else if (smilePosition == problems) {
          alert('Вы проиграли');
          renderSmile();
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
        alert('Вы проиграли')
        renderSmile();
        return;
      } else {
        smilePosition--;
        if (smilePosition == food) {
          alert('Вы выиграли');
          renderFoodAndProblems();

          newCellSmilePosition = document.querySelector(`.food[data-coordinate="${smilePosition}"]`);
          newCellSmilePosition.className = "smile";
          return;
        }
        else if (smilePosition == problems) {
          alert('Вы проиграли');
          renderSmile();
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

// function gameOver() {
//   alert('Вы проиграли');
//   renderSmile();
//   smilePosition = 1;
// };


// this.itemsProblem.push(newProblem);


//   render() {
//     cells.renderItems(this.itemsProblem, 'problems');
//   }
// };


  //   function renderItems(recentCoordinate, className) {
  //   const cells = document.getElementsByClassName('cell');

  //   for (let cell of cells) {
  //     cell.classList.remove(className);
  //   }
  //   const newCell = document.querySelector(`.cell[data-coordinate="${recentCoordinate}"]`);
  //   newCell.classList.add(className);
  // };



