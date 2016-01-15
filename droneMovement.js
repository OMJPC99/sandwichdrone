/**
 * Created by Lipman on 1/8/16.
 */

var done = 1;
window.onscroll = function () {
    scrollHandler()
};

var last = 0;


function moveDroneAtPlace(atPlace, toPlaceX, toPlaceY, size) {

    if (done == 0) {
        return;
    }
    if (last == atPlace) {
        return;
    }
    done = 0;

    //if ($("#drone").offset().top > toPlaceY - 20 || $("#drone").offset().top < toPlaceY + 20){return;}//put in range

    if (($(document).scrollTop() > atPlace - 75) && ($(document).scrollTop() < atPlace + 75)) {
        $("#drone").animate({
            left: toPlaceX + "%",
            top: toPlaceY + "%",
            width: size + "%"
        }, 1300, function () {
            last = atPlace;
            done = 1;
        });
    } else {
        last = atPlace;
        done = 1;
    }
}

function scrollHandler() {
    moveDroneAtPlace(200, 25, 30, 50);
    moveDroneAtPlace(50, 25, 30, 50);
}