function init() {

      
    let counter = 2;
    let interval = 1000;
    let flag = true;
    let time = 1500;
    const timeCountdown = document.getElementById("demo");
    let hours = Math.floor(time/3600);
    let minutes = Math.floor((time - hours * 3600)/ 60);
    let seconds = Math.floor((time - hours * 3600 - minutes * 60) % 60);
    timeCountdown.innerHTML = `0${hours}:${minutes}:0${seconds}`;

   // time = prompt('Введите время в формате ЧЧ:ММ:СС')
    

    function countTime (){
     
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
    }

    startButton.addEventListener("click", () => {
        if (counter % 2 == 0) {
            setInterval(countTime, interval);
            startButton.innerHTML = "STOP";
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
       timeCountdown.innerHTML = `0${hours}:${minutes}:0${seconds}`;
    });

    decreaseHours.addEventListener("click", () => {
        if (time > 3600) {
            time = time - 3600;
           let hours = Math.floor(time/3600);
           let minutes = Math.floor((time - hours * 3600)/ 60);
          let seconds = Math.floor((time - hours * 3600 - minutes * 60) % 60);
           timeCountdown.innerHTML = `0${hours}:${minutes}:0${seconds}`;    
        }
    });   
 
     increaseMinutes.addEventListener("click", () => {
        time = time + 60;
        let hours = Math.floor(time/3600);
        let minutes = Math.floor((time - hours * 3600)/ 60);
        let seconds = Math.floor((time - hours * 3600 - minutes * 60) % 60);
        timeCountdown.innerHTML = `0${hours}:${minutes}:${seconds}`;
     });
 
     decreaseMinutes.addEventListener("click", () => {
         time = time - 60;
         let hours = Math.floor(time/3600);
         let minutes = Math.floor((time - hours * 3600)/ 60);
         let seconds = Math.floor((time - hours * 3600 - minutes * 60) % 60);
         timeCountdown.innerHTML = `0${hours}:${minutes}:${seconds}`;    
      }); 

      increaseSeconds.addEventListener("click", () => {
        time = time + 1;
        let hours = Math.floor(time/3600);
        let minutes = Math.floor((time - hours * 3600)/ 60);
        let seconds = Math.floor((time - hours * 3600 - minutes * 60) % 60);
        timeCountdown.innerHTML = `0${hours}:${minutes}:${seconds}`;
     });
 
     decreaseSeconds.addEventListener("click", () => {
         time = time - 1;
         let hours = Math.floor(time/3600);
         let minutes = Math.floor((time - hours * 3600)/ 60);
         let seconds = Math.floor((time - hours * 3600 - minutes * 60) % 60);
         timeCountdown.innerHTML = `0${hours}:${minutes}:${seconds}`;    
      }); 



   }
  
  
  window.addEventListener('load', init);
  