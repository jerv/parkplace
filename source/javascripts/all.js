//= require jquery
//= require_tree .

$(function() {
  var body = $('body');

  $('.nav-trigger').on('click', function() {
  	$(body).toggleClass('open');
  });
});