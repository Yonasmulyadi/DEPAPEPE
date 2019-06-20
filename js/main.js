//hamburger menu (to reveal nav-menu)
let hamburgerButton = document.getElementById ('hamburger-icon');

hamburgerButton.addEventListener('click', () => {
    document.querySelector('.bar1').classList.toggle('change');
    document.querySelector('.bar2').classList.toggle('change');
    document.getElementById('navbar-menu').classList.toggle('active');

    if( document.getElementById('navbar-menu').classList.contains('active')){
    var navbarAnimation = new TimelineLite();
    navbarAnimation.staggerFrom('#navbar-menu ul li', .7, {y:70, opacity: 0}, .1);
    }
})

//arrow-button(pointing to #about section) 
let arrowButton = document.getElementById('arrow-button')
const aboutSection = document.getElementById('about')
arrowButton.addEventListener('click', ()=>{
    aboutSection.scrollIntoView();
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

    //navbar animation onscroll

    var navbarScroll = new TimelineLite();
        navbarScroll.to('#navbar', 2.5, {opacity:0})

    var navbarController = new ScrollMagic.Controller();    

    var navbarScene = new ScrollMagic.Scene({
            triggerElement: "#about a",
            triggerHook: "onEnter",
            duration: "100%"
        })
            .setTween(navbarScroll)
            .addTo(navbarController); 


if(screen.width >= 1024){
    //animation onload
    var tlOnLoad = new TimelineLite();
    tlOnLoad.from('#navbar h1', 2.5, {opacity:0});
    tlOnLoad.from('#headline img', 3.5, {x:50, opacity: 0},.5)
    tlOnLoad.from('#headline #title h2', 2.5, {y:-70, opacity: 0}, 1);
    tlOnLoad.from('#headline #title p', 2.5, {y:-70, opacity: 0}, 1.5);
    tlOnLoad.from('#headline #social-media', 2.5, {x:-50, opacity: 0}, 2);


    //animation onscroll (about-section)
    var tlScroll_1 = new TimelineLite();
        tlScroll_1.from("#about div", 6, {x:50, opacity: 0});

    var controller_1 = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        triggerElement: "#about h2",
        triggerHook: "onEnter",
        duration: "100%"
    })
        .setTween(tlScroll_1)
        .addTo(controller_1);

    //animation onscroll (albums and gallery section)
    var tlScroll_2 = new TimelineLite();
        tlScroll_2.from("#albums img:nth-of-type(1)", 10, {x:-100, opacity: 0});
        tlScroll_2.from("#albums div:nth-of-type(1) h3", 10, {y:-100, opacity: 0}, 3);
        tlScroll_2.from("#albums div:nth-of-type(1) p", 10, { opacity: 0}, 6);

    var tlScroll_3 = new TimelineLite();
        tlScroll_3.from("#albums div:nth-of-type(2)", 20, {x:50, opacity: 0});
            
    var tlScroll_4 = new TimelineLite();
        tlScroll_4.from('#albums div:nth-of-type(3)', 20, {x:-200, opacity: 0});

    var tlScroll_5 = new TimelineLite();
        tlScroll_5.from('#gallery', 50, {opacity: 0});    

    var controller = new ScrollMagic.Controller();

    var scene_2 = new ScrollMagic.Scene({
        triggerElement: "#albums div:nth-of-type(1)",
        triggerHook: "onEnter",
        duration: "100%"
    })
        .setTween(tlScroll_2)
        .addTo(controller);

    var scene_3 = new ScrollMagic.Scene({
            triggerElement: "#albums div:nth-of-type(2) h3",
            triggerHook: "onEnter",
            duration: "100%"
        })
            .setTween(tlScroll_3)
            .addTo(controller);  
            
    var scene_4 = new ScrollMagic.Scene({
            triggerElement: "#albums div:nth-of-type(3) h3",
            triggerHook: "onEnter",
            duration: "100%"
        })
            .setTween(tlScroll_4)
            .addTo(controller);          

    var scene_5 = new ScrollMagic.Scene({
            triggerElement: "#gallery",
            triggerHook: "onEnter",
            duration: "100%"
        })
            .setTween(tlScroll_5)
            .addTo(controller);

}  



