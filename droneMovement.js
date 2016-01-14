/**
 * Created by Lipman on 1/8/16.
 */
<<<<<<< HEAD

/* This will allow us to move the drone around as we pass sections of the page
 *
 */
var waypoint = new Waypoint({
    element: $('#foo'),
    handler: function() {
        $('#changing-color').css({ 'color': 'red', 'font-size': '150%' });
    }
});

$(document).ready(function () {});
=======

var done = 1;
window.onscroll = function() {scrollHandler()};

var last = 0;


function moveDroneAtPlace(atPlace, toPlaceX, toPlaceY){

    if(done == 0){return;}
    if (last == atPlace){return;}
    done = 0;
    //if ((document.body.scrollTop > atPlace || document.documentElement.scrollTop > atPlace) && (document.body.scrollTop < atPlace || document.documentElement.scrollTop < atPlace)) {
    if (($(document).scrollTop() > atPlace - 50) && ( $(document).scrollTop() < atPlace + 50)) {
        console.log(atPlace);
        $( "#drone" ).animate({
            left: toPlaceX + "%",
            top: toPlaceY + "%"
        }, 1500, function() {
            last = atPlace;
            done = 1;
        });
    }else {
        last = atPlace;
        done = 1;
    }
}

function scrollHandler(){
    console.log($(document).scrollTop());
    moveDroneAtPlace(0, 10, 10);
    moveDroneAtPlace(500, 90, 90);
}
>>>>>>> master
