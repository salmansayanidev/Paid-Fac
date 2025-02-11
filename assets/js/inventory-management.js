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



// accordion js

$(".accordion-content").hide();


$(".accordion-item.active").each(function () {
    $(this).find(".accordion-content").show();
    $(this).find(".accor-icon").removeClass("fa-plus").addClass("fa-minus");
});

$(".accordion-btn").click(function () {
    var $currentFaqBox = $(this).closest(".accordion-item");
    var $accordionIcon = $(this).find(".accor-icon");

    if (!$currentFaqBox.hasClass("active")) {
        $(".accordion-content").slideUp();
        $(".accordion-item").removeClass("active");
        $(".accordion-btn .accor-icon").removeClass("fa-minus").addClass("fa-plus");

        $currentFaqBox.addClass("active");
        $currentFaqBox.find(".accordion-content").slideDown();
        $accordionIcon.removeClass("fa-plus").addClass("fa-minus");
    } else {
        $currentFaqBox.removeClass("active");
        $currentFaqBox.find(".accordion-content").slideUp();
        $accordionIcon.removeClass("fa-minus").addClass("fa-plus");
    }
});