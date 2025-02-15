// accordion plus swipper js 

const mySwiper1 = new Swiper('.swiper-container1', {
    effect: 'cube',
    grabCursor: true,
    speed: 1000,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    on: {
        slideChange: function () {
            updateAccordion(mySwiper1.activeIndex);
        }
    }
});

const mySwiper2 = new Swiper('.swiper-container2', {
    effect: 'cube',
    grabCursor: true,
    speed: 1000,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    on: {
        slideChange: function () {
            updateAccordion(mySwiper2.activeIndex);
        }
    }
});

const mySwiper3 = new Swiper('.swiper-container3', {
    effect: 'cube',
    grabCursor: true,
    speed: 1000,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    on: {
        slideChange: function () {
            updateAccordion(mySwiper3.activeIndex);
        }
    }
});

let activeSwiper = mySwiper1;

function updateAccordion(index) {
    const activeTabContent = document.querySelector('.powerful-pos-tabing-content.active');
    if (activeTabContent) {
        const accordionItems = activeTabContent.querySelectorAll('.accordion-item');
        accordionItems.forEach((item, i) => {
            const icon = item.querySelector('.accor-icon');
            if (i === index) {
                item.classList.add('active');
                icon.classList.remove('fa-plus');
                icon.classList.add('fa-minus');
            } else {
                item.classList.remove('active');
                icon.classList.remove('fa-minus');
                icon.classList.add('fa-plus');
            }
        });
    }
}

document.querySelectorAll('.accordion-item').forEach(item => {
    item.addEventListener('click', function () {
        let index = parseInt(this.getAttribute('data-index')); // Ensure index is a number

        if (activeSwiper) {
            activeSwiper.slideTo(index);
        }

        updateAccordion(index);
    });
});

const posTabs = document.querySelectorAll("[data-view]");

posTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        posTabs.forEach((tab) => tab.classList.remove("active"));

        document.querySelectorAll(".powerful-pos-tabing-content").forEach(content => content.classList.remove("active"));

        document.querySelectorAll(".swipper-container-area").forEach(slider => slider.classList.remove("active"));

        let activeContent = document.querySelector(`[data-content="${tab.dataset.view}"]`);
        activeContent.classList.add("active");
        tab.classList.add("active");

        let activeSlider = document.querySelector(`.swipper-container-area[data-content="${tab.dataset.view}"]`);
        activeSlider.classList.add("active");

        if (tab.dataset.view === "Restaurants") {
            activeSwiper = mySwiper1;
        } else if (tab.dataset.view === "Retail") {
            activeSwiper = mySwiper2;
        } else if (tab.dataset.view === "Service_Businesses") {
            activeSwiper = mySwiper3;
        }

        setTimeout(() => {
            activeSwiper.update();
            updateAccordion(activeSwiper.activeIndex);
        }, 300);
    });
});

updateAccordion(activeSwiper.activeIndex);



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



// scroll images js 

// banner scroll js

gsap.matchMedia().add("(min-width: 992px)", () => {
    gsap.to(".banner-video-area", {
        yPercent: -200,
        ease: "none",
        scrollTrigger: {
            trigger: ".home-banner",
            start: "top top",
            end: "80% top",
            scrub: 1
        }
    });

    gsap.set(".banner-text", {
        transform: "translateY(-50%)",
        opacity: 1,
        color: "#fff"
    });

    gsap.to(".banner-text", {
        opacity: 1,
        scrollTrigger: {
            trigger: ".home-banner",
            start: "top 50%",
            end: "bottom top",
            scrub: 1
        }
    });

    gsap.to(".banner-text", {
        opacity: 1,
        y: -700,
        scrollTrigger: {
            trigger: ".home-banner",
            start: "bottom 80%",
            end: "90% top",
            scrub: 1
        }
    });

    gsap.to(".banner-text .banner-title", {
        color: "#000", // Changes to Black
        scrollTrigger: {
            trigger: ".home-banner",
            start: "50% 50%",
            end: "bottom 20%",
            scrub: 1
        }
    });
});



// custom POS scroll js

gsap.registerPlugin(ScrollTrigger);

gsap.set(".cus-pos-img-area", {
    xPercent: 0,
    yPercent: 0,
    scale: 2,
    opacity: 0,
}),
    gsap.to(".cus-pos-img-area", {
        scale: 1,
        opacity: 1,
        ease: "power1.inOut",
        scrollTrigger: {
            trigger: ".cus-pos-img-area",
            start: "top 90%",
            end: "top 0",
            scrub: 1,
            scale: true
        }
    });

gsap.to(".left-img img", {
    rotateY: 900,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
    }
});

gsap.to(".right-img img", {
    rotateY: 900,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "body",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
    }
});




// Accordion js


// $(".powerful-pos-accordion-area.active").each(function () {
//     $(this).find(".powerful-pos-accordion-bottom").show();
//     $(this).find(".accor-icon").removeClass("fa-plus").addClass("fa-minus");
// });

// $(".pow-pos-accordion-btn").click(function () {
//     var $currentFaqBox = $(this).closest(".powerful-pos-accordion-area");
//     var $accordionIcon = $(this).find(".accor-icon");

//     if (!$currentFaqBox.hasClass("active")) {
//         $(".powerful-pos-accordion-bottom").slideUp();
//         $(".powerful-pos-accordion-area").removeClass("active");
//         $(".pow-pos-accordion-btn .accor-icon").removeClass("fa-minus").addClass("fa-plus");

//         $currentFaqBox.addClass("active");
//         $currentFaqBox.find(".powerful-pos-accordion-bottom").slideDown();
//         $accordionIcon.removeClass("fa-plus").addClass("fa-minus");
//     } else {
//         $currentFaqBox.removeClass("active");
//         $currentFaqBox.find(".powerful-pos-accordion-bottom").slideUp();
//         $accordionIcon.removeClass("fa-minus").addClass("fa-plus");
//     }
// });

// powerful pos tabing js
// const posTabs = document.querySelectorAll("[data-view]");

// posTabs.forEach((tab) => {
//     tab.addEventListener("click", () => {
//         posTabs.forEach((tab) => {
//             tab.classList.remove("active");
//         });
//         $("[data-content]").removeClass("active");
//         $(`[data-content="${tab.dataset.view}"]`).addClass("active");
//         tab.classList.add("active");

//         const $firstAccordion = $(`[data-content="${tab.dataset.view}"] .powerful-pos-accordion-area`).first();
//         $(".powerful-pos-accordion-bottom").hide();
//         $(".powerful-pos-accordion-area").removeClass("active");
//         $(".pow-pos-accordion-btn .accor-icon").removeClass("fa-minus").addClass("fa-plus");

//         $firstAccordion.addClass("active");
//         $firstAccordion.find(".powerful-pos-accordion-bottom").show();
//         $firstAccordion.find(".accor-icon").removeClass("fa-plus").addClass("fa-minus");
//     });
// });



// $(".powerful-pos-accordion-bottom").hide();

// document.addEventListener("DOMContentLoaded", function () {
//     const sections = document.querySelectorAll(".powerful-pos-img");
//     const buttons = document.querySelectorAll(".pow-pos-accordion-btn");

//     let currentIndex = 0;

//     const observerOptions = {
//         root: null,
//         rootMargin: "100px 0px 0px 0px",
//         threshold: 0.9,
//     };

//     function updateActiveButton(index) {
//         buttons.forEach((btn, idx) => {
//             const accordionBottom = btn.closest(".powerful-pos-accordion-area").querySelector(".powerful-pos-accordion-bottom");
//             if (idx === index) {
//                 btn.classList.add("active");
//                 $(accordionBottom).stop().slideDown();
//             } else {
//                 btn.classList.remove("active");
//                 $(accordionBottom).stop().slideUp();
//             }
//         });

//         currentIndex = index;
//     }

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//                 const index = Array.from(sections).indexOf(entry.target);
//                 if (index !== -1) {
//                     updateActiveButton(index);
//                 }
//             }
//         });
//     }, observerOptions);

//     sections.forEach((section) => observer.observe(section));

//     buttons.forEach((button, index) => {
//         button.addEventListener("click", (event) => {
//             event.preventDefault();
//             updateActiveButton(index);
//             sections[index].scrollIntoView({
//                 behavior: "smooth",
//                 block: "start",
//             });
//         });
//     });
// });