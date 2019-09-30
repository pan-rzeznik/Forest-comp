import  SmoothScroll  from "smooth-scroll";
import '../scss/main.scss'

const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 400
});

let navbar = document.querySelector('.navbar');


function checkPosition() {
    if(window.pageYOffset >= 572){
        navbar.classList.add('sticky-nav');
    }else {
        navbar.classList.remove('sticky-nav');
    }
}

window.onscroll = ()=> {
    checkPosition();
}

const damianm = `damian`
console.log(damianm);
