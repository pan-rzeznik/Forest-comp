import  SmoothScroll  from "smooth-scroll";
import '../scss/main.scss'
import './lazyLoadingGallery'

const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 800,
    offset: 77
});

let navbar = document.querySelector('.navbar');
let hero = document.querySelector('.header');

const heroSection = new IntersectionObserver((entries,observe) => {
    if(entries[0].isIntersecting) {
        navbar.classList.remove('sticky-nav');
    } 
    else {
        navbar.classList.add('sticky-nav');
    }
}, {
    rootMargin: "-80px"
})

heroSection.observe(hero);
