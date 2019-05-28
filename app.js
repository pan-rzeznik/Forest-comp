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