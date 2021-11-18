$(document).ready(function(){
    $('.slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1069,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
  
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
          }
        }]
    });
  })