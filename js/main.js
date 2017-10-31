$(window).scroll(function () {
    if ($(this).scrollTop() > 5) {
        $(".navbar-me").addClass("fixed-me");
    } else {
        $(".navbar-me").removeClass("fixed-me");
    }
});

// auto collapse navbar
$('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
});

// smooth scrolling snippet
$('a[href*="#"]:not([href="#"]):not([href="#myCarousel-1"]):not([href="#myCarousel-2"]):not([data-toggle])').click(function () {

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;

        }
    }


});

// ScrollReveal animations 
window.sr = ScrollReveal({
    reset: false

});



sr.reveal('.second_section_numbers', {
    beforeReveal: function (second_section_numbers) {

        $('.number42').animationCounter({
            start: 0,
            end: 42,
            step: 1,
            delay: 80
        });
        $('.number123').animationCounter({
            start: 0,
            end: 132,
            step: 1,
            delay: 30
        });

        $('.number15').animationCounter({
            start: 0,
            end: 15,
            step: 1,
            delay: 90
        });
        $('.number99').animationCounter({
            start: 0,
            end: 99,
            step: 1,
            delay: 60
        });
        $('.number24').animationCounter({
            start: 0,
            end: 24,
            step: 1,
            delay: 100
        });
    }

})
sr.reveal('.first_section_info');


sr.reveal('.third_section_element', 50)
sr.reveal('.people_container', 50)
sr.reveal('.blog_post', 50)
sr.reveal('.blog_date', {
    delay: 400
}, 50)


sr.reveal('.bottom-tablet', {
    duration: 700,
    origin: 'left',

});
sr.reveal('.bottom-phone', {
    duration: 1000,
    origin: 'right'
})

sr.reveal('.animation-from-left', {
    origin: 'left'
})

sr.reveal('.animation-from-right', {
    origin: 'right'
})

sr.reveal('.animation-from-top', {
    origin: 'top'
}, 50)

sr.reveal('.companies_logos', {
    origin: 'bottom',
    duration: 800,
    delay: 100
})

sr.reveal('.open_map_icon', {
    viewFactor: 1,
    rotate: {
        y: 615
    },
    reset: true
})