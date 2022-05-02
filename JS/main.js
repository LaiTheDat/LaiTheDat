new WOW().init();
$("#vehicles-list").mCustomScrollbar({
    theme: "dark",
});
var swiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        clickable: true,
        el: '.swiper-pagination',
    },
});

//Hide-Show Vehicles list
var count = "";
$("#navbar > a").click(function () {
    if ($(this).attr('id') === 'nav-home') {
        return
    }
    if (count === "") {
        count = $(this).attr('id');
        $(this).addClass("active");
        if ($(this).attr('id') === "nav-vehicles") {
            InVeHicle();
        }
    } else if (count === $(this).attr('id')) {
        $(this).removeClass('active');
        OutVeHicle();
        count = "";
    } else if (count !== $(this).attr('id')) {
        $("#navbar > a").removeClass('active');
        $(this).addClass("active");
        count = $(this).attr('id');
        if (count != "nav-vehicles") {
            OutVeHicle();
        } else {
            InVeHicle();
        }
    }
})
$("#vehicles-close").click(function () {
    OutVeHicle();
    $("#nav-vehicles").removeClass('active');
    count = ""
})
function OutVeHicle() {
    $(".vehicles-nav").removeClass("fadeInDown");
    $(".vehicles-nav").addClass("fadeOutUp");

    $("#vehicles-list").removeClass("fadeInUp");
    $("#vehicles-list").addClass("fadeOutDown");

    $("#vehicles-close").removeClass("fadeInRight");
    $("#vehicles-close").addClass("fadeOutRight");
    setTimeout(function () {
        $("#vehicles").addClass("hide-vehicle");
    }, 600)
}
function InVeHicle() {
    $("#vehicles").removeClass("hide-vehicle")

    $(".vehicles-nav").addClass("fadeInDown");
    $(".vehicles-nav").removeClass("fadeOutUp");

    $("#vehicles-list").addClass("fadeInUp");
    $("#vehicles-list").removeClass("fadeOutDown");


    $("#vehicles-close").addClass("fadeInRight");
    $("#vehicles-close").removeClass("fadeOutRight");


}
$('.vehicle-product').addClass("animated fadeInUp")

//Active carousel
$('.carousel-indicators-config li').click(function () {
    $('.carousel-indicators-config li').removeClass('active');
    $(this).addClass('active')
});
//auto
$('.carousel').each(function () {
    $(this).carousel({
        interval: false
    });
});

$('.indicators-xs-header').click(function () {
    $('.carousel-indicatior-xs ol').slideToggle();
    if ($('.indicators-xs-header i').hasClass('transform-rotate')) {
        $('.indicators-xs-header i').removeClass('transform-rotate');
    } else {
        $('.indicators-xs-header i').addClass('transform-rotate');
    }
});
$('.carousel-indicatior-xs ol li').click(function () {
    $('.indicators-title span').html($(this).html())
    $('.carousel-indicatior-xs ol').slideUp();
    $('.indicators-xs-header i').removeClass('transform-rotate');
});
//slider
var count = 0;
$('.carousel-control-prev').click(function () {
    $('.carousel-indicators-config li').removeClass('active');
    if (count == 0) {
        count = 4;
    } else {
        count--;
    }
    $('.carousel-indicators-config li').each(function (i) {
        console.log(i)
        if (i == count) {
            $(this).addClass('active');
            $('.indicators-title span').html($(this).html())
        }
    })
})
$('.carousel-control-next').click(function () {
    $('.carousel-indicators-config li').removeClass('active');
    if (count == 4) {
        count = 0;
    } else {
        count++;
    }
    $('.carousel-indicators-config li').each(function (i) {
        if (i == count) {
            $(this).addClass('active');
            $('.indicators-title span').html($(this).html())
        }
    })
})
// $('.back-to-top').click(function() {
//     $('body,html').animate({scrollTop:1000});
// });

$(window).resize(function () {
    collapse();
})
function collapse() {
    var width = $(window).width();
    if (width >= 768) {
        $('.collapse-ul').removeClass('collapse');
    } else {
        $('.collapse-ul').addClass('collapse');
    }
}
$(document).ready(function () {
    collapse();
})
