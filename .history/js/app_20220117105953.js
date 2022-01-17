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
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        draggable: false,
        autoplay: true,
        fade: true
    })
})
