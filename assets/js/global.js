AOS.init();

const scrollToTopBtn = document.querySelector('.top-bottom-btn');
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// faqs js

$(".faq-bottom").hide();

$(".faq-area.active").each(function () {
    $(this).find(".faq-bottom").show();
    $(this).find(".accor-icon").removeClass("fa-plus").addClass("fa-minus");
});

$(".faq-btn").click(function () {
    var $currentFaqBox = $(this).closest(".faq-area");
    var $accordionIcon = $(this).find(".accor-icon");

    if (!$currentFaqBox.hasClass("active")) {
        $(".faq-bottom").slideUp();
        $(".faq-area").removeClass("active");
        $(".faq-btn .accor-icon").removeClass("fa-minus").addClass("fa-plus");

        $currentFaqBox.addClass("active");
        $currentFaqBox.find(".faq-bottom").slideDown();
        $accordionIcon.removeClass("fa-plus").addClass("fa-minus");
    } else {
        $currentFaqBox.removeClass("active");
        $currentFaqBox.find(".faq-bottom").slideUp();
        $accordionIcon.removeClass("fa-minus").addClass("fa-plus");
    }
});

// mobile menu js 
$(".hamburger-btn").click(function () {
    $(".mobile-navigation").addClass("active");
});

$(".mobile-nav-close-btn").click(function () {
    $(".mobile-navigation").removeClass("active");
});


$(document).ready(function () {
    $(".mobile-sub-menu-list").hide();

    $(".mobile-nav-list-item.active").each(function () {
        $(this).find(".mobile-sub-menu-list").show();
        $(this).find(".angle-icon").removeClass("fa-angle-down").addClass("fa-angle-up");
    });

    $(".mobile-dropdown-btn").click(function () {
        var $currentListItem = $(this).closest(".mobile-nav-list-item");

        if (!$currentListItem.hasClass("active")) {
            $(".mobile-sub-menu-list").slideUp();
            $(".mobile-nav-list-item").removeClass("active");
            $(".angle-icon").removeClass("fa-angle-up").addClass("fa-angle-down");
        }

        $currentListItem.toggleClass("active");
        $currentListItem.find(".mobile-sub-menu-list").slideToggle();
        $(this).find(".angle-icon").toggleClass("fa-angle-down fa-angle-up");
    });
});
