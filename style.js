$(document).ready(function(){

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [  "Designer","Developer"],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true
    });
    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
$('.navbar .menu li a').click(function(){
    $('html').css("scrollBehavior", "smooth");
});

   $(window).scroll(function(){
       if(this.scrollY > 20){
           $('.navbar').addClass('sticky')
       }
       else{
           $('.navbar').removeClass('sticky')
       }
   })

