// aos Animation 
AOS.init();

// hamburger toggle 
$(document).ready(function() {
    $(".hamburger-toggle ").click(function() {
        $(".responsive-navbar ").slideToggle(500);
    });
});

// loader
$(window).on('load', function() {
    setTimeout(function() {
        $('.loaderMain').addClass('hideLoader');
    }, 3000);
    $(".loaderMain").fadeOut(2000);

});

// 3d hover 
let el = document.getElementById('tilt')

/* Get the height and width of the element */
const height = el.clientHeight
const width = el.clientWidth

/*
 * Add a listener for mousemove event
 * Which will trigger function 'handleMove'
 * On mousemove
 */
el.addEventListener('mousemove', handleMove)

/* Define function a */
function handleMove(e) {
    /*
     * Get position of mouse cursor
     * With respect to the element
     * On mouseover
     */
    /* Store the x position */
    const xVal = e.layerX
        /* Store the y position */
    const yVal = e.layerY

    /*
     * Calculate rotation valuee along the Y-axis
     * Here the multiplier 20 is to
     * Control the rotation
     * You can change the value and see the results
     */
    const yRotation = 20 * ((xVal - width / 2) / width)

    /* Calculate the rotation along the X-axis */
    const xRotation = -20 * ((yVal - height / 2) / height)

    /* Generate string for CSS transform property */
    const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'

    /* Apply the calculated transformation */
    el.style.transform = string
}

/* Add listener for mouseout event, remove the rotation */
el.addEventListener('mouseout', function() {
    el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
})

/* Add listener for mousedown event, to simulate click */
el.addEventListener('mousedown', function() {
    el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
})

/* Add listener for mouseup, simulate release of mouse click */
el.addEventListener('mouseup', function() {
    el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
})


// portfolio jQuery

// button add remove 
$(document).ready(function() {
    $('.fifth-container-button-1,.fifth-container-button-2,.fifth-container-button-3,.fifth-container-button-4,.fifth-container-button-5').on('click', function() {
        $(this).addClass('active-fifth-container');
        $('.fifth-container-button-1,.fifth-container-button-2,.fifth-container-button-3,.fifth-container-button-4,.fifth-container-button-5').removeClass('active-fifth-container');
        $(this).addClass('active-fifth-container');
    });
    // fade out fade in  
    $(".fifth-container-button-1,.fifth-container-button-2,.fifth-container-button-3,.fifth-container-button-4,.fifth-container-button-5").click(function() {
        $(".fifth-container-portfolio-box-3-images").fadeOut();
        $(".fifth-container-portfolio-box-3-images").fadeIn();
    });

    // hide and show box
    $(".fifth-container-button-1").click(function() {
        $(".box-3-images-1").show();
        $(".box-3-images-3").show();
        $(".box-3-images-5").show();
        $(".box-3-images-2").show();
        $(".box-3-images-4").show();
        $(".box-3-images-6").show();
    });
    $(".fifth-container-button-2").click(function() {
        $(".box-3-images-2").hide();
        $(".box-3-images-4").hide();
        $(".box-3-images-6").hide();
        $(".box-3-images-1").show();
        $(".box-3-images-3").show();
        $(".box-3-images-5").show();
    });
    $(".fifth-container-button-3").click(function() {
        $(".box-3-images-1").hide();
        $(".box-3-images-3").hide();
        $(".box-3-images-4").hide();
        $(".box-3-images-5").hide();
        $(".box-3-images-2").show();
        $(".box-3-images-6").show();
    });
    $(".fifth-container-button-4").click(function() {
        $(".box-3-images-3").hide();
        $(".box-3-images-4").hide();
        $(".box-3-images-5").hide();
        $(".box-3-images-6").hide();
        $(".box-3-images-1").show();
        $(".box-3-images-2").show();
    });
    $(".fifth-container-button-5").click(function() {
        $(".box-3-images-1").hide();
        $(".box-3-images-5").hide();
        $(".box-3-images-6").hide();
        $(".box-3-images-2").show();
        $(".box-3-images-3").show();
        $(".box-3-images-4").show();
    });
});

// slick slider
$(document).ready(function() {
    $('#testimonial-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 1000,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: false,
        responsive: [{
            breakpoint: 990,
            settings: {
                slidesToShow: 2,
            }
        }, {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        }]
    });
});

// slick slider
$(document).ready(function() {
    $('.main-container-company-logo-image').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        speed: 1000,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                },
            }
        ]
    });
});

// button navbar container 
$("#about").click(function() {
    $('html, body').animate({
        scrollTop: $("#about-container").offset().top
    }, 1000);
});
$("#portfolio").click(function() {
    $('html, body').animate({
        scrollTop: $("#portfolio-container").offset().top
    }, 1000);
});

$("#service").click(function() {
    $('html, body').animate({
        scrollTop: $("#service-container").offset().top
    }, 1000);
});
$("#testimonial").click(function() {
    $('html, body').animate({
        scrollTop: $("#testimonial-container").offset().top
    }, 1000);
});
$("#blog").click(function() {
    $('html, body').animate({
        scrollTop: $("#blog-container").offset().top
    }, 1000);
});

$("#contect").click(function() {
    $('html, body').animate({
        scrollTop: $("#contect-container").offset().top
    }, 1000);
});

$(".back-to-top").click(function() {
    $('html, body').animate({
        scrollTop: $(".main-header").offset().top
    }, 1000);
});
// // back to top button
// var btn = $('#button');

// $(window).scroll(function() {
//     if ($(window).scrollTop() < 8000) {
//         btn.addClass('show');
//     } else {
//         btn.removeClass('show');
//     }
// });

// btn.on('click', function(e) {
//     e.preventDefault();
//     $('html, body').animate({
//         scrollTop: 0
//     }, '300');
// });