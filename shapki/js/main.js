$(document).ready(function(){
    $(".slide-one").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 1,
        dots: true,
        responsive:{
          0:{
            nav: false,
            dots: false
          },
          950:{
            nav: true,
            dots: true
          }
        }
        });
    $(".slide-two").owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items: 4,
        dots: false,
        responsive:{
          0:{
            items: 1
          },
          950:{
            items: 4,
            nav:true
          }
        }
    });
    $(".slide-three").owlCarousel({
      loop:false,
      nav:true,
      dots: false,
      items: 8,
      mouseDrag: false,
      responsive:{
        0:{
          items: 8,
          nav: true,
          mouseDrag: true,
          loop: true
        },
        950:{
          items: 27,
          nav: false,
          mouseDrag: false
        }
      }
      });
  });



$(function () {
  $('div.tabs_caption').on('click', 'div:not(.active)', function () {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('section.tabs').find('div.tabs_content').removeClass('active').eq($(this).index()).addClass('active');
  });
});

$(function () {

  $('div.season-toggle').on('click', 'div:not(.active)', function () {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('section.seasons').find('div.seasons-content').removeClass('active').eq($(this).index()).addClass('active');
  });
});

$(document).ready(function () {

  $('.toggle-text').click(function () {
      $(this).toggleClass('rotate-text').next().slideToggle();
      $('.toggle-text').not(this).removeClass('rotate-text').next().slideUp();
  });

});
