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
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
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
        nextArrow:"<button type='button' class='slick-next pull-right'><box-icon name='chevron-right' ></box-icon></button>"
    })
})

