$('.slide-one').owlCarousel({
    loop:true,
    margin:10,
    items:4,
    nav:false,
    
    responsive:{
        300:{
            items:1.5
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
    
    var owl=$(".slide-one");
        owl.owlCarousel();
        //$(".next") - находим нашу кнопку
        $(".next-slide").click(function(){
            owl.trigger("next.owl.carousel");
        });
        $(".prev-slide").click(function(){
            owl.trigger("prev.owl.carousel");
        });
    
$("#phone").mask("+7 (999) 99-99-999");

$('.slide-two').owlCarousel({
    loop:true,
    margin:10,
    items:1,
    nav:false,
    
    responsive:{
        300:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
    
// var owl=$(".slide-two");
// owl.owlCarousel();
// //$(".next") - находим нашу кнопку
// $(".next-slide").click(function(){
//     owl.trigger("next.owl.carousel");
// });
// $(".prev-slide").click(function(){
//     owl.trigger("prev.owl.carousel");
// });

    $('.adress-click').click(function() { // Вызываем функцию по нажатию на кнопку 
        var popup_id = $('.popup-adress'); // Связываем rel и popup_id 
        $(popup_id).show(); // Открываем окно
        $('.overlay_popup').show(); // Открываем блок заднего фона
    }) 
    $('.img-close').click(function() { // Обрабатываем клик по заднему фону
        $('.overlay_popup, .popup-adress').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
    })

    $('.main-button').click(function() { 
        var popup_id = $('.popup-info'); 
        $(popup_id).show(); 
        $('.overlay_popup').show(); 
    }) 
    $('.img-close').click(function() { 
        $('.overlay_popup, .popup-info').hide();
    })

    
    $('.choise-button').click(function() { 
        var popup_id = $('.popup-course'); 
        $(popup_id).show(); 
        $('.overlay_popup').show(); 
    }) 
    $('.img-close').click(function() { 
        $('.overlay_popup, .popup-course').hide();
    })

    function burger() {
        var menu = document.querySelector('nav');
        menu.classList.toggle("show");
     }