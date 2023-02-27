$(document).ready(function(){
    var dropDownMenu = $('.dropdown');

    //'Engine' for dropdown menu
    if(dropDownMenu.is(':visible')){
        let dropTitle = dropDownMenu.find('.dropdownTitle')
        dropTitle.on('click', function(){
            let dropContent = $('.dropdownContent');
            dropContent.slideToggle(300);
        })
    }
});