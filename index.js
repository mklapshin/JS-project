 function init() {


const courusel = () => {
    let start = Date.now();
                        
    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
                    
        train.style.right = timePassed / 0.8 + 'px';
        
           
        if (timePassed > 5000) clearInterval(timer);
                    
    }, 20);
}

const courusel2 = () => {
    let start = Date.now();
                        
    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
                    
        train.style.left = timePassed / 0.8 + 'px';
                    
        if (timePassed > 5000) clearInterval(timer);
                    
    }, 20);
}

const courusel4 = () => {
    let start = Date.now();
                        
    let timer = setInterval(function() {
        let timePassed = Date.now() - start;
                    
        train3.style.left = timePassed / 0.8 + 'px';
                    
        if (timePassed > 5000) clearInterval(timer);
                    
    }, 20);
}


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
    
    const nextSlide1 = () => {
        
        if(index == slides.length - 1){
            index = 0;
            currentSlide(index);
        }else{
            index++;
            currentSlide(index);
        }

        const move = document.querySelector('.active-slide');
        let start = Date.now();
                        
        let timer = setInterval(function() {
            let timePassed = Date.now() - start;
                        
            move.style.right = timePassed / 0.8 + 'px';
            
               
            if (timePassed > 5000) clearInterval(timer);
                        
        }, 20);
    
    
    }
    
    const prevSlide1 = () => { 
        if(index == 0){
            index = slides.length - 1;
            currentSlide(index);            
        }else{
            index--;
            
            currentSlide(index);           
        }     

    }

    const prevSlide = () => {
        courusel();
        setTimeout(prevSlide1, 700)
        console.log('sdfsdf')
    }

    const nextSlide = () => {
        courusel2();
        setTimeout(nextSlide1, 700)
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
    
    
 }


window.addEventListener('load', init);





/*
    item2.addEventListener('click', function (event) {
        totalPrice = totalPrice + 20;
        let item = document.createElement("div");
        item.innerHTML = "<p>Хлеб 20 рублей</p>";
        basket.appendChild(item);
        newTotalPrice.innerHTML = totalPrice;
        priceFinal.appendChild(newTotalPrice);
    });

    item3.addEventListener('click', function (event) {
        totalPrice = totalPrice + 15;
        let item = document.createElement("div");
        item.innerHTML = "<p>Вода 15 рублей</p>";
        basket.appendChild(item);
        newTotalPrice.innerHTML = totalPrice;
        priceFinal.appendChild(newTotalPrice);
    });

}


window.addEventListener('load', init);


    $('#button_1').click(function(){
        $("#block_1").css("display", "none");
      });
    $('#button_2').click(function(){
        $("#block_2").css("display", "none");
      });
    $('#button_3').click(function(){
        $("#block_1").css("display", "none");
        $("#block_2").css("display", "none");
      });

      $('#add_2').click(function(){
          alert('ok')
      });

})

*/