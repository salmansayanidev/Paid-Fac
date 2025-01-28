// Accordion js

$(".powerful-pos-accordion-bottom").hide();

$(".powerful-pos-accordion-area.active").each(function () {
    $(this).find(".powerful-pos-accordion-bottom").show();
    $(this).find(".accor-icon").removeClass("fa-plus").addClass("fa-minus");
});

$(".pow-pos-accordion-btn").click(function () {
    var $currentFaqBox = $(this).closest(".powerful-pos-accordion-area");
    var $accordionIcon = $(this).find(".accor-icon");

    if (!$currentFaqBox.hasClass("active")) {
        $(".powerful-pos-accordion-bottom").slideUp();
        $(".powerful-pos-accordion-area").removeClass("active");
        $(".pow-pos-accordion-btn .accor-icon").removeClass("fa-minus").addClass("fa-plus");

        $currentFaqBox.addClass("active");
        $currentFaqBox.find(".powerful-pos-accordion-bottom").slideDown();
        $accordionIcon.removeClass("fa-plus").addClass("fa-minus");
    } else {
        $currentFaqBox.removeClass("active");
        $currentFaqBox.find(".powerful-pos-accordion-bottom").slideUp();
        $accordionIcon.removeClass("fa-minus").addClass("fa-plus");
    }
});

// powerful pos tabing js
const posTabs = document.querySelectorAll("[data-view]");

posTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        posTabs.forEach((tab) => {
            tab.classList.remove("active");
        });
        $("[data-content]").removeClass("active");
        $(`[data-content="${tab.dataset.view}"]`).addClass("active");
        tab.classList.add("active");

        const $firstAccordion = $(`[data-content="${tab.dataset.view}"] .powerful-pos-accordion-area`).first();
        $(".powerful-pos-accordion-bottom").hide();
        $(".powerful-pos-accordion-area").removeClass("active");
        $(".pow-pos-accordion-btn .accor-icon").removeClass("fa-minus").addClass("fa-plus");

        $firstAccordion.addClass("active");
        $firstAccordion.find(".powerful-pos-accordion-bottom").show();
        $firstAccordion.find(".accor-icon").removeClass("fa-plus").addClass("fa-minus");
    });
});


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