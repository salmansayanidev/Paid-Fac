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

$(".faq-area.active").each(function() {
    $(this).find(".faq-bottom").show();
    $(this).find(".accor-icon").removeClass("fa-plus").addClass("fa-minus");
});

$(".faq-btn").click(function() {
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