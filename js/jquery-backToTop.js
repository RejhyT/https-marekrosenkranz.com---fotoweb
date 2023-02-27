$(document).ready(function(){
 
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        // Show button after 200px
        var showAfter = 200;
        if ($(this).scrollTop() > showAfter ) { 
            $('.backToTop').fadeIn();
        } else { 
            $('.backToTop').fadeOut();
        }
    });
 
    //Click event to scroll to top
    $('.backToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
 
});