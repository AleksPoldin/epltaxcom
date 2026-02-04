
$(function() {
  var b = $("#collapse_button");
  var w = $("#toggle_expand");
  var l = $("#collapse_box");

  b.click(function() {
  
    if(w.hasClass('open')) {
      w.removeClass('open');
      w.height(0);
    } else {
      w.addClass('open');
      w.height(l.outerHeight(true));
    }
  
  });
});


$('.gn-icon-menu').click(function(){
  $('.gn-menu-wrapper').toggleClass('gn-open-all');
  $('body').toggleClass('margin-all');
});


$('.burger-wrapper').on('click.mobileNav', function(){
  $('.burger-wrapper .burger-menu-link').toggleClass('menu-trigger-open');
});
