

const swiper = new Swiper('.image-slider',{
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,

    },
    grabCursor: true,
    slidesPerView: 3,
    speed: 400,

    keyboard: {
        onlyInViewport: true,
    },


    breakpoints: {
        300: {
            slidesPerView: 1,
            effect: 'fade',
            fadeEffect: {
                crossFade: true,
            },
        },
    }
});