const POPUP = document.getElementById('popup');
const CLOSE = document.getElementById('close');
const MASK = document.getElementById('mask')
const LEFT = document.getElementById('left-arrow');
const RIGHT = document.getElementById('right-arrow');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const slides = [one, two, three, four];
const mobilenav = document.getElementById('mobilenav');
const nav = document.getElementById('nav');
var slide = 0;


const closePopUp = () => {
    POPUP.style.display = "none";
}
CLOSE.addEventListener('click', closePopUp);
setTimeout(()=> {
    MASK.style.fontSize = "1.75rem";
    MASK.style.color = "#6f1d1b";
},5500);

const updateImage = () => {
    for (i=0; i<slides.length; i++) {
        if (i == slide) {
            slides[slide].style.display = "block";
        } else {
            slides[i].style.display = "none";
        }
    }
    
}
const slideRight = () => {
    if (slide == 3) {
        slide = 0;
    } else {
        slide += 1;
    }
    updateImage();
}
const slideLeft = () => {
    if (slide == 0) {
        slide = 2;
    } else {
        slide -= 1;
    }
    updateImage();
}
LEFT.addEventListener('click', slideLeft);
RIGHT.addEventListener('click', slideRight);

mobilenav.addEventListener('click', function() {
    nav.classList.toggle('active');
    mobilenav.classList.toggle('active');
})