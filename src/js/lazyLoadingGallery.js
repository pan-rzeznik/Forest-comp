const crew = document.querySelector('.crew');
const GalleryObserer = new IntersectionObserver((entires, observer) => {
    entires.forEach( entry => {
        if(entry.isIntersecting) {
            const imgs = document.querySelectorAll('.img__box > img');
            imgs.forEach(element => {
                if(element.getAttribute('data-src')){
                    const src = element.getAttribute('data-src');
                    element.setAttribute('src', src); 
                }
            });
            GalleryObserer.unobserve(crew);
        }
    })
}, {threshold: 0.25})

GalleryObserer.observe(crew);