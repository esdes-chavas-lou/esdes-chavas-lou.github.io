$(document).ready(function() {
   if ($('.owl-carousel').length > 0) {
       $('.owl-carousel').owlCarousel({
           navText: ['<i class="fa fa-chevron-left"/>', '<i class="fa fa-chevron-right"/>'],
           center: true,
           items: 1,
           loop: true,
           margin: 10,
           responsiveClass: true,
           responsive: {
               0:{
                   items:1,
                   nav:true,
                   loop: true
               },
               600:{
                   items:3,
                   nav:false,
                   loop: true
               },
               1000:{
                   items:3,
                   nav:true,
                   loop: true
               }
           }
       });
   }
});
