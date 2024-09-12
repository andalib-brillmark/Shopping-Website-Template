// import Splide from '@splidejs/splide';
// new Splide( '.splide' ).mount();
// new Splide('.splide', {
//     type       : 'loop',
//     perPage    : 3,
//     perMove    : 1,
//     focus      : 'center',
//     pagination : false,
//     breakpoints: {
//         950: {
//             perPage: 1,
//         }
//     }
// }).mount();

let clickCount = 0;
document.querySelector(".navbar__button--mobile-nav").addEventListener("click", function (e) {
    console.log("Hello");
    clickCount++;
    document.querySelector(".navbar__mobile-view").classList.toggle("navbar__mobile-view--active");
    document.querySelector(".navbar__mobile-view").classList.toggle("navbar__mobile-view--inactive");
});


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