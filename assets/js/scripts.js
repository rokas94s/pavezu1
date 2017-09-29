/**
 * Created by Rokas on 09/08/2017.
 */

$(".button-collapse").sideNav();

$(document).ready(function(){
    $('.parallax').parallax();
});



$(function(){

    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

});