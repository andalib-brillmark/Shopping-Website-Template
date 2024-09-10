// import Splide from '@splidejs/splide';
// new Splide( '.splide' ).mount();
new Splide('.splide', {
    type       : 'loop',
    perPage    : 3,
    perMove    : 1,
    focus      : 'center',
    pagination : false,
    breakpoints: {
        950: {
            perPage: 1,
        }
    }
}).mount();