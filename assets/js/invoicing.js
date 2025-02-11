$('.slider-single').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 800,
    asNavFor: '.slider-single',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    nextArrow: '.pro-slider-btn.next',
    prevArrow: '.pro-slider-btn.pre',
    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 1,
        }
    },]
});

$('.slider-single').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var nextTitle = $('.slider-single .paidfac-portable-left-area').eq(nextSlide).find('.section-title').text();
    $('.next-slider-name').text(nextTitle);
});

