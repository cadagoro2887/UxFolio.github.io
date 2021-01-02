$(document).ready(function () {
    //    SCROLL NAVBAR
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }

    });

    // SLIDE-UP SCRIPT
    $('.scroll-up-btn').click(function () {
        $('html').animate({
            scrollTop: 0
        });
    });

    // TOGGLE MENU / NAVBAR SCRIPT
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // TYPING ANIMATION SCRIPT
    var typed = new Typed(".typing", {
        strings: ["YouTube", "Developer", "Freelancer", "Designer", "Ecommerce"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing_2", {
        strings: ["YouTube", "Developer", "Freelancer", "Designer", "Ecommerce"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    // OWL CAROUSEL SCRIPT
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});