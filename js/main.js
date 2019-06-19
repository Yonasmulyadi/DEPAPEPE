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


