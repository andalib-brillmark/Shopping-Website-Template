///////////////// Brand Slider ///////////////////
document.addEventListener("DOMContentLoaded", function (e) {
    new Splide('.splide', {
        type       : 'loop',
        perPage    : 6,
        perMove    : 1,
        pagination : false,
        breakpoints: {
            990: {
                perPage: 4,
            },
    
            768: {
                perPage: 2,
            }
        }
    }).mount();
});



////////////////////// Mobile Menu ///////////////////////////
let clickCount = 0;
document.querySelector(".navbar__button--mobile-nav").addEventListener("click", function (e) {
    console.log("Hello");
    clickCount++;
    document.querySelector(".navbar__mobile-view").classList.toggle("navbar__mobile-view--active");
    document.querySelector(".navbar__mobile-view").classList.toggle("navbar__mobile-view--inactive");
});

//////////////////// When window is resized with menu open  ////////////////////
window.addEventListener("resize", function (e) {
    let width = window.innerWidth;
    console.log(width);

    if(width >= 768)
    {
        document.querySelector(".navbar__mobile-view").classList.remove("navbar__mobile-view--active");
        document.querySelector(".navbar__mobile-view").classList.add("navbar__mobile-view--inactive");
    }
    else if(clickCount % 2 == 1) // if the mobile view was active
    {
        document.querySelector(".navbar__mobile-view").classList.remove("navbar__mobile-view--inactive");
        document.querySelector(".navbar__mobile-view").classList.add("navbar__mobile-view--active");
    }
    else
    {
        document.querySelector(".navbar__mobile-view").classList.remove("navbar__mobile-view--active");
        document.querySelector(".navbar__mobile-view").classList.add("navbar__mobile-view--inactive");
    }
});