//function init() {

      
    let counter = 2;
    let interval = 1000;
    let flag = true;
    let time = 600;
    let finishCounter = 999;
    let counterBreak = 2;


    const timeCountdown = document.getElementById("demo");
    let hours = Math.floor(time/3600);
    let minutes = Math.floor((time - hours * 3600)/ 60);
    let seconds = Math.floor((time - hours * 3600 - minutes * 60) % 60);
    
    hours = hours <10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0"+ seconds : seconds;

    timeCountdown.innerHTML = `${hours}:${minutes}:${seconds}`;
 

   // time = prompt('Введите время в формате ЧЧ:ММ:СС')
    
   shortBreak.addEventListener("click", () => {
    if (counter % 2 != 0) {
        counter ++; 
        console.log(counter);
    }
    console.log(counter);
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
    if (counter % 2 != 0) {
        counter ++; 
        console.log(counter);
    }
    time = 600;
    interval = 80000;
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


    function countTime (){
     
        if (time >= 0) {

            let hours = Math.floor(time/3600);
            let minutes = Math.floor((time - hours * 3600)/ 60);
            let seconds = Math.floor((time - hours * 3600 - minutes * 60) % 60);
            hours = hours <10 ? "0" + hours : hours;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0"+ seconds : seconds;
            timeCountdown.innerHTML = `${hours}:${minutes}:${seconds}`;   
            if(counter % 2 != 0) {
                time--;   
            } 
        } else {
            timeCountdown.innerHTML = 'Time out!';
            counter = finishCounter;
            startButton.innerHTML = "NEW STEP";
       //     time = 1500;
        }
    }

    startButton.addEventListener("click", () => {
        if (counter % 2 == 0) {
            setInterval(countTime, interval);
            startButton.innerHTML = "STOP";
            counter ++;
            console.log(counter);
         } else if (counter == finishCounter) {
            time = 600;
            counter = 2;
            startButton.innerHTML = "STOP";
            interval = 30000;
            setInterval(countTime, interval);
            interval = 800000;
            counter ++;
            console.log(counter);
         } else {
            startButton.innerHTML = "START";
            // let currentTime = time;
            // setTimeout(() => { clearInterval(countTime); console.log('stop'); }, 5000);
            // timeCountdown.innerHTML = currentTime;
            counter ++;
            interval = 800000;
            console.log(counter);
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


//   }
  
  
 // window.addEventListener('load', init);
  