$(document).ready(function(){
    $('.slick__product').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 3,
        speed: 500,
        draggable: false,
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
        autoplaySpeed: 1000,
        fade: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><box-icon name='chevron-left'></box-icon></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    })
})

