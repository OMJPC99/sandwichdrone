/**
 * Created by theodoreando on 1/15/16.
 */

$(document).ready(function () {
    $('.navbar').hide()

    $(function () {
        $(window).scroll(function () {
            if($(this).scrollTop() > 100) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        })
    })
});