/* Expand navigation on icon click / close nav on click outside icons */


$(document).click(function() {
  if ($('.nav_labels').is(":visible")) {
    $('#container_left').toggleClass('expand');
    $('#container_right').toggleClass('move_over');
    $('.nav_labels').toggleClass('nav_labels_show');
  }
});

$('.nav_box').click(function(event) {
  $('#container_left').toggleClass('expand');
  $('#container_right').toggleClass('move_over');
  $('.nav_labels').toggleClass('nav_labels_show');
  event.stopPropagation();
});