// const GAME_STATUS_STARTED = 'started';
// const GAME_STATUS_PAUSED = 'paused';
// const GAME_STATUS_STOPPED = 'stopped';
// const GAME_STATUS_DEFAULT = 'default';
// const SNAKE_DIRECTION_UP = 'up';
// const SNAKE_DIRECTION_DOWN = 'down';
// const SNAKE_DIRECTION_LEFT = 'left';
// const SNAKE_DIRECTION_RIGHT = 'right';

// const config = {
//   size: 5
// };

// const game = {
//   score: 0,

//   getElement() {
//     return document.getElementById('game');
//   },

//   getScoreValueElement() {
//     return document.getElementById('score-value');
//   },
//   start() {
//     game.setGameStatus(GAME_STATUS_STARTED);
//     board.render();
//     snake.render();
//     food.render();
//     problems.render();
//   },
//   pause() {
//     game.setGameStatus(GAME_STATUS_PAUSED);
//   },

//   stop() {
//     game.setGameStatus(GAME_STATUS_STOPPED);
//     alert('Игра окончена. Количество очков: ' + game.score);
//     board.clean();
//     game.setGameStatus(GAME_STATUS_DEFAULT);
//     game.score = 0;
//     const scoreValueElement = game.getScoreValueElement();
//     scoreValueElement.innerHTML = game.score;
//     snake.parts = [{
//       top: 0,
//       left: 0
//     }
//     ],
//       food.items = [{
//         top: 4,
//         left: 4
//       }]
//     problems.itemsProblem = [{
//       top: 2,
//       left: 2
//     }]
//   },

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

//     snake.setDirection(direction);
//     const nextPosition = snake.getNextPosition();
//     const foundSnake = snake.foundPosition(nextPosition);
//     // const foundProblemPosition = snake.foundPosition(nextPosition);
//     // console.log(foundProblemPosition);
//     // let hf = snake.parts.top;
//     if (foundSnake !== -1) {
//       game.stop();
//       return;
//     };

//     const foundFood = food.foundPosition(nextPosition);
//     const foundProblems = problems.foundPositionProblem(nextPosition);

//     if (foundFood !== -1) {
//       // snake.setPosition(nextPosition, false);
//       game.score += 1;
//       const scoreValueElement = game.getScoreValueElement();
//       scoreValueElement.innerHTML = game.score;
//       problems.generateProblem();
//       problems.render();
//       food.removeItem(foundFood);
//       food.generateItem();
//       // food.checkClass();
//       food.render();
//     } else {
//       //       let hf = snake.foundPosition(nextPosition);
//       snake.setPosition(nextPosition);

//       //        alert(hf);
//     }
//     snake.render();

//     if (foundProblems !== -1) {
//       // snake.setPosition(nextPosition, false);
//       alert('Вы проиграли!')
//       game.stop();
//       return;
//     }
//     if (foundSnake >= 2) {
//       // snake.setPosition(nextPosition, false);
//       alert('Вы проиграли!')
//       game.stop();
//       return;
//     }
//   },

//   setGameStatus(status) {
//     const element = game.getElement();
//     element.classList.remove(GAME_STATUS_STARTED, GAME_STATUS_PAUSED, GAME_STATUS_STOPPED);
//     element.classList.add(status);
//   }
// };

// const board = {

//   getElement() {
//     return document.getElementById('board');
//   },

//   render() {
//     const board = this.getElement();

//     for (let i = 0; i < config.size ** 2; i++) {
//       const cell = document.createElement('div');
//       cell.classList.add('cell');
//       cell.dataset.top = Math.trunc(i / config.size);
//       cell.dataset.left = i % config.size;
//       board.appendChild(cell);
//     }
//   },

//   clean() {
//     const cleaner = document.getElementById('board');
//     cleaner.innerHTML = "";
//   }
// };

// const cells = {

//   getElements() {
//     return document.getElementsByClassName('cell');
//   },

//   renderItems(coordinates, className) {
//     const cells = this.getElements();

//     for (let cell of cells) {
//       cell.classList.remove(className);
//     }

//     for (let coordinate of coordinates) {
//       const cell = document.querySelector(`.cell[data-top="${coordinate.top}"][data-left="${coordinate.left}"]`);
//       cell.classList.add(className);
//     }
//   },

//   checkGetElements() {
//     return document.getElementsByClassName('problems');
//   },

//   // checkPosition() {
//   //   const cellsCheck = this.checkGetElements();
//   //   console.log(cellChecks);
//   // },
// };

// const snake = {
//   direction: SNAKE_DIRECTION_RIGHT,
//   parts: [{
//     top: 0,
//     left: 0
//   }
//   ],

//   setDirection(direction) {

//     this.direction = direction;
//   },

//   foundPosition(snakePosition) {
//     const comparerFunction = function (item) {
//       return item.top === snakePosition.top && item.left === snakePosition.left;
//     };

//     return this.parts.findIndex(comparerFunction);
//   },

//   snakeGameFinish() {
//     alert('Вы проиграли');
//     game.stop();
//     game.start();
//   },

//   getNextPosition() {
//     const position = {
//       ...this.parts[this.parts.length - 1]
//     };
//     console.log(position);

//     switch (this.direction) {
//       case SNAKE_DIRECTION_UP:
//         if (position.top == 0) {
//           snake.snakeGameFinish();
//           // alert('Вы проиграли');
//           // game.stop();
//           //game.start();
//           // вынести 3 строчки в отдельную функцию
//           return;
//         }
//         position.top -= 1;
//         break;
//       case SNAKE_DIRECTION_DOWN:
//         if (position.top == 4) {
//           snake.snakeGameFinish();
//           return;
//         }
//         position.top += 1;
//         break;
//       case SNAKE_DIRECTION_LEFT:
//         if (position.left == 0) {
//           snake.snakeGameFinish();
//           return;
//         }
//         position.left -= 1;
//         break;
//       case SNAKE_DIRECTION_RIGHT:
//         if (position.left == 4) {
//           snake.snakeGameFinish();
//           return;
//         }
//         position.left += 1;
//         break;
//     }

//     if (position.top === -1) {
//       position.top = config.size - 1;
//     } else if (position.top > config.size - 1) {
//       position.top = 0;
//     }
//     if (position.left === -1) {
//       position.left = config.size - 1;
//     } else if (position.left > config.size - 1) {
//       position.left = 0;
//     }

//     return position;
//   },

//   setPosition(position, shift = true) {
//     if (shift) {
//       this.parts.shift();
//     }
//     this.parts.push(position);
//   },

//   render() {
//     cells.renderItems(this.parts, 'snake');
//   }
// };

// const food = {
//   items: [{
//     top: 4,
//     left: 4
//   }],
//   foundPosition(snakePosition) {
//     const comparerFunction = function (item) {
//       return item.top === snakePosition.top && item.left === snakePosition.left;
//     };
//     return this.items.findIndex(comparerFunction);
//   },

//   removeItem(foundPosition) {
//     this.items.splice(foundPosition, 1);
//     alert('Поздравляем! Вы выиграли!')
//   },

//   generateItem() {
//     const newItem = {
//       top: getRandomNumber(0, config.size - 1),
//       left: getRandomNumber(0, config.size - 1),

//     };

//     this.items.splice(0, 2);
//     this.items.push(newItem);
//     let foodVariable1 = newItem.top;
//     let foodVariable2 = newItem.left;
//   },

//   checkClass() {
//     return document.newItem.getElementsByClassName('problems') ? this.generateItem() : this.render();
//   },

//   render() {

//     cells.renderItems(this.items, 'food');
//   }
// };

// const problems = {
//   itemsProblem: [{
//     top: 2,
//     left: 2
//   }],
//   foundPositionProblem(snakePosition) {
//     const comparerFunctionProblem = function (item) {
//       return item.top === snakePosition.top && item.left === snakePosition.left;
//     };
//     return this.itemsProblem.findIndex(comparerFunctionProblem);
//   },

//   removeProblem(foundPosition) {
//     //  this.items.splice(foundPosition, 1);
//     alert('Вы проиграли!')
//   },

//   generateProblem() {
//     let newProblem = {
//       top: getRandomNumber(0, config.size - 1),
//       left: getRandomNumber(0, config.size - 1)
//     };

//     // if (newProblem.top == food.foodVariable1) {
//     //   if (newProblem.left == food.foodVariable2) {
//     //     while (newProblem.top == food.a1 & newProblem.left == food.a2) {
//     //       console.log('newProblem.top', newProblem.top);
//     //       console.log('food.items.top', food.items.top);
//     //       newProblem.top = getRandomNumber(0, config.size - 1);
//     //       newProblem.left = getRandomNumber(0, config.size - 1);
//     //     };
//     //   }
//     // }

//     // while (newProblem.top != food.items.top) {
//     //   console.log('newProblem.top1111111', newProblem.top);
//     //   console.log('food.items.top', food.items.top);
//     //   newProblem.top = getRandomNumber(0, config.size - 1);
//     // };
//     // while (newProblem.left == food.items.left) {
//     //   console.log('newProblem.left111111111', newProblem.left);
//     //   console.log('food.items.left', food.items.left);
//     //   newProblem.left = getRandomNumber(0, config.size - 1);
//     // }
//     this.itemsProblem.push(newProblem);
//   },






//   render() {
//     cells.renderItems(this.itemsProblem, 'problems');
//   }
// };

// function init() {
//   const startButton = document.getElementById('button-start');
//   const pauseButton = document.getElementById('button-pause');
//   const stopButton = document.getElementById('button-stop');
//   startButton.addEventListener('click', game.start);
//   pauseButton.addEventListener('click', game.pause);
//   stopButton.addEventListener('click', game.stop);
//   window.addEventListener('keydown', game.move);
// }

// function getRandomNumber(min, max) {
//   return Math.trunc(Math.random() * (max - min) + min);
// }

// window.addEventListener('load', init);