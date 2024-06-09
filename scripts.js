// scripts.js
let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-item"); //slides = array[0, 1, 2]
const dots = document.getElementsByClassName("dot");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex].style.display = "block";
    dots[slideIndex].className += " active";
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length; 
    // modulo operator to ensure that if slideIndex exceeds the number of slides 
    // (i.e., it tries to go beyond the last slide: 2+1=3, slides[3] does not exist), 
    // it wraps around to 0 (the first slide, sildes[0]).
    showSlides();
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    // if there are 3 slides and the current slideIndex is 0 (the first slide), 
    // then slideIndex - 1 equals -1. 
    // Adding slides.length (which is 3) results in -1 + 3 equals 2, 
    // so the previous slide index is set to 2 (the last slide slides[2]).

    // modulo ensures that the index stays within the bounds of the available slides, 
    // similar to the nextSlide function.
    showSlides();
}

function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, 5000); // Change image every 5 seconds
}

document.addEventListener("DOMContentLoaded", () => {
    showSlides();
    setTimeout(autoSlide, 5000);
});
