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