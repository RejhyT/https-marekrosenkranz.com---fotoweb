//Tranform foto by scrolling

$(document).ready(function(){

    $(document).on('scroll', function(){
        var marekActual = $('#marekPortrait');
        var marekHide = $('#marekPortraitHide');
        var scrollDocumentActual = $(document).scrollTop()+$(window).height(),
            marekScrollPosition = marekActual.offset().top+marekActual.height()/2+100;

        if(scrollDocumentActual > marekScrollPosition){
            marekActual.fadeOut(1500);
            marekHide.fadeIn(1300);
        }  
    })

});