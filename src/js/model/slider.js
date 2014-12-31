'use strict';

var self;

function Slider(slides, slideCount){
    this.slides = slides;
    this.slideCount = slideCount;
    this.slideWrapper = document.getElementsByClassName('sliderWrapper')[0] || null;
    self = this;
}

function getSlide(index){
    var slide = null;

    for(var i = 0, l = self.slides.length; i < l; i++){
        if(parseInt(self.slides[i].getAttribute('data-slide')) === index){
            slide = self.slides[i];
            break;
        }
    }
    return slide;
}

function validDirection(direction, index){
    if(direction === "right" && index < self.slides.length - 1){
        return true;
    } else{
        return (direction === "left" && index > 0);
    }
}

Slider.prototype.moveSlide = function(activeSlide, currentIndex, direction){
    var nextSlide;

    if(direction === "right" && validDirection(direction, currentIndex)){
        this.slideWrapper.style.transform = "translateX("+ (currentIndex + 1) * -100 +"%)";
        nextSlide = getSlide(currentIndex + 1);
        activeSlide.classList.remove('active');
        nextSlide.classList.add('active');
    } 

    if(direction === "left" && validDirection(direction, currentIndex)){
        this.slideWrapper.style.transform = "translateX("+ (currentIndex - 1) * -100 +"%)";
        nextSlide = getSlide(currentIndex - 1);
        activeSlide.classList.remove('active');
        nextSlide.classList.add('active');
    }

};

module.exports = Slider;
