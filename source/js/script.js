//Slider(jQuery)
$(document).ready(function(){
    $('.slider').slick({
        arrows: true,
        dots: false,
        //adaptiveHeight: true,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 992,
                settings:{
                    slidesToShow: 1,
                }
            }
        ]
    });
});

//Burger-menu(jQuery)
$(document).ready(function(){
    $('.icon-menu').click(function(event){
        $('body, .icon-menu, .menu__body').toggleClass('active');
    });
});

//Catalog-menu(jQuery)
$(document).ready(function(){
    $('.menu__item-catalog').click(function(event){
        $('.submenu__list').toggleClass('active');
    });
});

//info about vaccination in slider(jQuery)
$(document).ready(function(){
    $('.slider__vaccination-evg').click(function(event){
        $('.slider__vaccination-info-evg').toggleClass('active');
    });
});