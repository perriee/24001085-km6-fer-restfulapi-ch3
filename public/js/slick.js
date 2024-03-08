$(document).ready(function () {
    $(".slick-slider").slick({
        centerMode: true,
        centerPadding: "60px",
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
        ],
    });
});
