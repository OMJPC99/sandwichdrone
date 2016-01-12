/**
 * Created by Lipman on 1/8/16.
 */

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
