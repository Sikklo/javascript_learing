
const slideClass = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;
// initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);
function initializeSlider() {
    if (slideClass.length > 0) {
        slideClass[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }

}

function showSlide(index) {
    if (index >= slideClass.length) {
        slideIndex = 0;
    }
    else if (index < 0) {
        slideIndex = slideClass.length - 1;
    }

    slideClass.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slideClass[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}
