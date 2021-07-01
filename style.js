$(document).ready(function(){

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [  "Designer","Developer"],
        typeSpeed: 100,
        backSpeed: 80,
        loop: true
    });
   
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky')
        }
        else{
            $('.navbar').removeClass('sticky')
        }
    })
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });
});



