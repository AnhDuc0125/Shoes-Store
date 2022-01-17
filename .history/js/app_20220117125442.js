$(document).ready(function(){
    $('.slick__product').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        speed: 500,
        draggable: false,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 1670,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 1080,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    arrows: false,
                    draggable: true,
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false,
                    draggable: true,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    draggable: true,
                }
            }
        ]    
    })
})

$(document).ready(function(){
    $('.main__top').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        draggable: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><box-icon name='chevron-left'></box-icon></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><box-icon name='chevron-right' ></box-icon></button>",
        responsive: [
            {
                breakpoint: 1080,
                settings: {
                    arrows: false,
                    draggable: true,
                    fade: false
                }
            },
            {
                breakpoint: 850,
                settings: {
                    arrows: false,
                    draggable: true,
                    fade: false
                }
            },
            {
                breakpoint: 767,
                settings: {
                    arrows: false,
                    draggable: true,
                    fade: false
                }
            }
        ]    
    })
})

