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

document.querySelector(".navbar__button--mobile-nav").addEventListener("click", function (e) {
    console.log("Hello");
    document.querySelector(".navbar__mobile-view").classList.toggle("navbar__mobile-view--active");
    document.querySelector(".navbar__mobile-view").classList.toggle("navbar__mobile-view--inactive");
});

window.addEventListener("resize", function (e) {
    document.querySelector(".navbar__mobile-view").classList.remove("navbar__mobile-view--active");
    document.querySelector(".navbar__mobile-view").classList.add("navbar__mobile-view--inactive");
});