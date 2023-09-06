$(document).ready(function () {
    $('.search_icon').on('click', function () { 
        $('.search_box').toggleClass('show_search');  
    })
    $('.cross_btn').on('click', function () { 
        $('.search_box').toggleClass('show_search');  
    })
});