$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        nav:true,
        loop : true,
        autoplay : true,
        autoplayTimeout : 1000,
        autoplayHoverPause : true,

// For Making It Responsive
        responsiveClass : true,
        responsive : {
            0 : {
                items : 1 ,
            },
            600 : {
                items : 2 ,
            }
        }
    });
  });