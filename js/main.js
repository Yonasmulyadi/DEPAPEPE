let hamburgerButton = document.getElementById ('hamburger-icon');

hamburgerButton.addEventListener('click', () => {
    document.querySelector('.bar1').classList.toggle('change');
    document.querySelector('.bar2').classList.toggle('change');
    document.getElementById('navbar-menu').classList.toggle('active');
})


//carousel-images

let carouselIndex = 0;
let slides = document.querySelectorAll('.mySlides img');
let endIndex = slides.length-1;
slides[carouselIndex].style.display = 'block';
document.querySelector('.next').addEventListener('click', () => {
    if (carouselIndex < endIndex){
    carouselIndex += 1
    slides[carouselIndex-1].style.display = 'none'; 
    slides[carouselIndex].style.display = 'block';
    }
    else if (carouselIndex === endIndex) {
        carouselIndex = 0;
        slides[endIndex].style.display = 'none'; 
        slides[carouselIndex].style.display = 'block';
    } 
})

document.querySelector('.prev').addEventListener('click', () => {
    if (carouselIndex > 0){
        carouselIndex -= 1
        slides[carouselIndex+1].style.display = 'none'; 
        slides[carouselIndex].style.display = 'block';
        }
    else if (carouselIndex === 0){
            carouselIndex = endIndex
            slides[0].style.display = 'none'; 
            slides[carouselIndex].style.display = 'block';
            }    
    
})

//animation onload
if(screen.width >= 1024){
    var tlOnLoad = new TimelineLite();
    tlOnLoad.from('#navbar h1', 2.5, {opacity:0});
    tlOnLoad.from('#headline img', 3.5, {x:400, opacity: 0},.5)
    tlOnLoad.from('#headline #title h2', 2.5, {y:-70, opacity: 0}, 1);
    tlOnLoad.from('#headline #title p', 2.5, {y:-70, opacity: 0}, 1.5);
    tlOnLoad.from('#headline #social-media', 2.5, {x:-50, opacity: 0}, 2);
}


