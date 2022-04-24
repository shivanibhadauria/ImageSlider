let sliderContainer = document.querySelector(".slider-container")
let leftSlide = document.querySelector(".left-side")
let rightSlide = document.querySelector(".right-slide")
let downButton = document.querySelector(".down-button")
let upButton = document.querySelector(".up-button")
let slidesLength = rightSlide.querySelectorAll('div').length;


let activeSlideIndex = 0;

leftSlide.style.top = `-${(slidesLength-1)*100}vh`


upButton.addEventListener('click' ,()=> changeSlide('up'))
downButton.addEventListener('click' ,()=> changeSlide('down'))

let changeSlide = (direction)=>{

    let slideHeight = sliderContainer.clientHeight
    if (direction === 'up') 
    {
        activeSlideIndex++
        if (activeSlideIndex> slidesLength-1) {
            activeSlideIndex=0
            
        }
       
        } 

        else if(direction==='down'){
            activeSlideIndex--
            if(activeSlideIndex<0){
                activeSlideIndex=slidesLength-1

            }
        
    }

    rightSlide.style.transform = `translateY(-${activeSlideIndex*slideHeight}px)`
    leftSlide.style.transform = `translateY(${activeSlideIndex*slideHeight}px)`
}
