const slides = document.querySelectorAll('#image-container img');
const buttons = document.querySelectorAll('#image-container #image-nav-buttons a');
let currentSlideIndex = 0;
let isTimerOn = true

function nextSlide() {
    [slides, buttons].forEach((elem) => elem[currentSlideIndex].classList.remove('active'));
    currentSlideIndex = ++currentSlideIndex % slides.length;
    [slides, buttons].forEach((elem) => elem[currentSlideIndex].classList.add('active'));
}

function prevSlide() {
    [slides, buttons].forEach((elem) => elem[currentSlideIndex].classList.remove('active'));
    currentSlideIndex = currentSlideIndex == 0 ? slides.length - 1 : --currentSlideIndex % slides.length;
    [slides, buttons].forEach((elem) => elem[currentSlideIndex].classList.add('active'));
}

function changeSlide(index) {
    currentSlideIndex = index % slides.length;
    [slides, buttons].forEach(arr => arr.forEach((elem, i) => i === index ? elem.classList.add('active') : elem.classList.remove('active')));
}

function showNextSlide() {
    changeSlide(++currentSlideIndex % slides.length);
}

if (isTimerOn)
    setInterval(showNextSlide, 2500);