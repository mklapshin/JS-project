import sound from '../assets/sound.mp3';

let workStatus = true;
let interval;
let time = 10;
const audio = new Audio();
audio.src = `${sound}`
let timeInterval = 1000;
    
const audioStartFunc = () => {
  audio.play();     
}

const audioStopFunc = () => {
  audio.pause();     
}

const timeCountdown = document.getElementById("demo");
let hours = Math.floor(time/3600);
let minutes = Math.floor((time - hours * 3600)/ 60);
let seconds = Math.floor((time - hours * 3600 - minutes * 60) % 60);
    
hours = hours <10 ? "0" + hours : hours;
minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0"+ seconds : seconds;

timeCountdown.innerHTML = `${hours}:${minutes}:${seconds}`;
 
shortBreak.addEventListener("click", () => {
  if (workStatus == false) {
    workStatus = true; 
  }
  time = 300;
  let hours = Math.floor(time/3600);
  let minutes = Math.floor((time - hours * 3600)/ 60);
  let seconds = Math.floor((time - hours * 3600 - minutes * 60) % 60);
  hours = hours <10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0"+ seconds : seconds;
  timeCountdown.innerHTML = `${hours}:${minutes}:${seconds}`;    
  startButton.innerHTML = "START";
  mainPomodoro.style.backgroundColor = 'rgb(240, 17, 17)';
  shortBreak.style.backgroundColor = ' rgb(110, 10, 10)';
});   

mainPomodoro.addEventListener("click", () => {
  if (workStatus == false) {
    workStatus = true;; 
  }
  time = 600;
  timeInterval = 80000;
  let hours = Math.floor(time/3600);
  let minutes = Math.floor((time - hours * 3600)/ 60);
  let seconds = Math.floor((time - hours * 3600 - minutes * 60) % 60);
  hours = hours <10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0"+ seconds : seconds;
  timeCountdown.innerHTML = `${hours}:${minutes}:${seconds}`;    
  startButton.innerHTML = "START";
  shortBreak.style.backgroundColor = 'rgb(240, 17, 17)';
  mainPomodoro.style.backgroundColor = ' rgb(110, 10, 10)';
});  

function countTime () {
  if (time >= 0) {
    let hours = Math.floor(time/3600);
    let minutes = Math.floor((time - hours * 3600)/ 60);
    let seconds = Math.floor((time - hours * 3600 - minutes * 60) % 60);
    hours = hours <10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0"+ seconds : seconds;
    timeCountdown.innerHTML = `${hours}:${minutes}:${seconds}`;   
    if(workStatus == false) {
      time--;   
   //   clearInterval(countTime);
    } 
  } else {
  audioStopFunc();
  timeCountdown.innerHTML = 'Time out!';
  startButton.innerHTML = "NEW STEP";
  workStatus = false;
  }
}

startButton.addEventListener("click", () => {
  if (time == -1) {
    time = 100;
    workStatus = false;
    audioStartFunc();
    clearInterval(interval);
    startButton.innerHTML = "STOP";
  }
  if (workStatus == true) {
    audioStartFunc();
    interval = setInterval(countTime, timeInterval);
    startButton.innerHTML = "STOP";
    workStatus = false;
  } else {
    audioStopFunc();
    startButton.innerHTML = "START";
    workStatus = true;
    timeInterval = 800000;
    console.log(time);
  }
});

increaseHours.addEventListener("click", () => {
  time = time + 3600;
  let hours = Math.floor(time/3600);
  let minutes = Math.floor((time - hours * 3600)/ 60);
  let seconds = Math.floor((time - hours * 3600 - minutes * 60) % 60);
  hours = hours <10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0"+ seconds : seconds;
  timeCountdown.innerHTML = `${hours}:${minutes}:${seconds}`;
});

decreaseHours.addEventListener("click", () => {
  if (time > 3600) {
    time = time - 3600;
    let hours = Math.floor(time/3600);
    let minutes = Math.floor((time - hours * 3600)/ 60);
    let seconds = Math.floor((time - hours * 3600 - minutes * 60) % 60);
    hours = hours <10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0"+ seconds : seconds;
    timeCountdown.innerHTML = `${hours}:${minutes}:${seconds}`;    
  }
});
 
increaseMinutes.addEventListener("click", () => {
  time = time + 60;
  let hours = Math.floor(time/3600);
  let minutes = Math.floor((time - hours * 3600)/ 60);
  let seconds = Math.floor((time - hours * 3600 - minutes * 60) % 60);
  hours = hours <10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0"+ seconds : seconds;
  timeCountdown.innerHTML = `${hours}:${minutes}:${seconds}`;
});
 
decreaseMinutes.addEventListener("click", () => {
  if (time > 59) {
    time = time - 60;
    let hours = Math.floor(time/3600);
    let minutes = Math.floor((time - hours * 3600)/ 60);
    let seconds = Math.floor((time - hours * 3600 - minutes * 60) % 60);
    hours = hours <10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0"+ seconds : seconds;
    timeCountdown.innerHTML = `${hours}:${minutes}:${seconds}`;    
  }
});

increaseSeconds.addEventListener("click", () => {
  time = time + 1;
  let hours = Math.floor(time/3600);
  let minutes = Math.floor((time - hours * 3600)/ 60);
  let seconds = Math.floor((time - hours * 3600 - minutes * 60) % 60);
  hours = hours <10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0"+ seconds : seconds;
  timeCountdown.innerHTML = `${hours}:${minutes}:${seconds}`;
});
 
decreaseSeconds.addEventListener("click", () => {
  if (time > 0) {
  time = time - 1;
  let hours = Math.floor(time/3600);
  let minutes = Math.floor((time - hours * 3600)/ 60);
  let seconds = Math.floor((time - hours * 3600 - minutes * 60) % 60);
  hours = hours <10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0"+ seconds : seconds;
  timeCountdown.innerHTML = `${hours}:${minutes}:${seconds}`;    
  }
});