/* Toggles Nav when icons clicked. When Nav expanded, any click outside element will close nav */

$(document).click(function() {
  if ($('.nav_labels').is(":visible")) {
    $('.nav_labels').hide('nav_labels_show');
    $('#container_right').css("transform","translateX(0%)");
  }
});

$('.nav_box').click(function(event) {
  $('#container_left').show('expand');
  $('#container_right').css("transform","translateX(10%)");
  $('.nav_labels').show('nav_labels_show');
  event.stopPropagation();
});

