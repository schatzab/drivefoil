/* Expand navigation on icon click */

$('.nav_box').on('click', function() {
    $('#container_left').toggleClass('expand');
    $('#container_right').toggleClass('move_over');
    $('.nav_labels').toggleClass('nav_labels_show');
});