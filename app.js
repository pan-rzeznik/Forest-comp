const scroll = new SmoothScroll('.navbar a[href*="#"]', {
    speed: 400
});

let navbar = document.querySelector('.navbar');


function checkPosition() {
    if(window.pageYOffset >= 580){
        navbar.classList.add('sticky-nav');
    }else {
        navbar.classList.remove('sticky-nav');
    }
}

window.onscroll = ()=> {
    checkPosition();
}