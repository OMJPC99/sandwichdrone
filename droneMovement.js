/**
 * Created by Lipman on 1/8/16.
 */
//$( document ).ready(function() {
//    var waypoints = $('#foo').waypoint({
//        handler: function(direction) {
//            $('#changing-color').css({ 'color': 'red', 'font-size': '150%' });
//        }
//    });
//});


var waypoint = new Waypoint({
    element: $('#foo'),
    handler: function() {
        $('#changing-color').css({ 'color': 'red', 'font-size': '150%' });
    }
});