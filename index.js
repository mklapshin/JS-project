 function init() {

    right.addEventListener('click', function () {
        let start = Date.now();
                        
        let timer = setInterval(function() {
            let timePassed = Date.now() - start;
                        
            train.style.right = timePassed / 2 + 'px';
                        
            if (timePassed > 650) clearInterval(timer);
                        
        }, 20);
     });
     
     left.addEventListener('click', function () {
        let start = Date.now();
                        
        let timer = setInterval(function() {
            let timePassed = Date.now() - start;
                        
            train.style.left = timePassed / 2 + 'px';
                        
            if (timePassed > 650) clearInterval(timer);
                        
        }, 20);
     });

/*
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const slides = document.querySelectorAll('.slider__slides');
    const btn = document.querySelectorAll('.types__cars');
    const dots = document.querySelectorAll('.slider__dots')
    let index = 0;
    
    const activeSlide = number =>{
        for(let slide of slides){
            slide.classList.remove("active-slide");
        }
        slides[number].classList.add("active-slide");
    }
    
    const activeBtn = number =>{
        for(let button of btn){
            button.classList.remove("active");
        }
        btn[number].classList.add("active");
    }
    
    const activeDot = number =>{
        for(let dot of dots){
            dot.classList.remove("active-dot");
        }
        dots[number].classList.add("active-dot");
    }
    
    const currentSlide = ind =>{
        activeSlide(ind);
        activeBtn(ind);
        activeDot(ind);
    }
    
    const nextSlide = () => {
        if(index == slides.length - 1){
            index = 0;
            currentSlide(index);
        }else{
            index++;
            currentSlide(index);
        }
    }
    
    const prevSlide = () => {
        if(index == 0){
            index = slides.length - 1;
            currentSlide(index);
        }else{
            index--;
            currentSlide(index);
        }
        
    }
    
    dots.forEach((item , indexDot) => {
        item.addEventListener("click", () => {
            index = indexDot;
            currentSlide(index);
        })
    });
    
    btn.forEach((item , indexBtn) => {
        item.addEventListener("click", () => {
            index = indexBtn;
            currentSlide(index);
        })
    });
    
    next.addEventListener("click", nextSlide);
    prev.addEventListener("click", prevSlide);
    

  let time = 21600;
  const timeCountdown = document.getElementById("demo");
  
*/  
 }

window.addEventListener('load', init);