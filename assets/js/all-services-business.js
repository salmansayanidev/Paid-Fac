$(".gallery-slider").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    pauseOnHover: false,
    speed: 1000,
    variableWidth: true,
    slidesToShow: 4,
    arrows: false,
    responsive: [{
        breakpoint: 992,
        settings: {
            slidesToShow: 2,
        },
        breakpoint: 500,
        settings: {
            slidesToShow: 1,
        }
    },
    ]
});


$('.cus-pos-in-min-slider').slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: '.custom-pos-slider-btn.next-arrow',
    prevArrow: '.custom-pos-slider-btn.pre-arrow',
    responsive: [{
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
        }
    },
    {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
        }
    }
    ]
});