/* Author: 
    
*/

$( document ).ready(function() {

  if($('.submenu-d').css('display') == "block"){
    $('.submenu-d').css({"height" : $('.submenu-d').css('height'), "background-color" : "#913764"});
    $('.menu-primary-navigation').css({"background-size" : "180px 528px"});
  }

  if($('.wwd_bullets').text() == ""){
    $('.wwd_bullets').hide();
    $('.wwd_quote').width($('.wwd_quote').width() * 1.5);
  }

  if($('.wwd_quote').text() == ""){
    $('.wwd_quote').hide();
    $('.wwd_bullets').width($('.wwd_bullets').width() * 1.5);
    $('.wwd_bullets').css({"margin-right" : "12px"});
  }

  if($('.active').hasClass("dropdown")){
    $('.active .dropdown-menu').addClass('submenu-d');
  }

  $('.entry-summary p a').before("<br />").addClass("read-more").text("Read More >>");

  $('.next-page-link a').text(">");
  $('.prev-page-link a').text("<");

  // Add this social links in footer
  jQuery.ajaxSettings.cache = true;
  if ($(".addthis").length > 0) {
    $(".addthis").html("<div class=\"addthis_toolbox addthis_default_style\">\n<a class=\"addthis_button_facebook_like\"></a>\n<a class=\"addthis_button_tweet\" ></a>\n<a class=\"addthis_button_google_plusone\" g:plusone:size=\"small\" g:plusone:annotation=\"none\"></a>\n<a class=\"addthis_button_compact\"></a>\n</div>\n<script>var addthis_config = {\"data_track_addressbar\":false};</script>\n<script src=\"//s7.addthis.com/js/250/addthis_widget.js#pubid=ra-4e8b2aef0579d06c\"></script>");
  }
  return jQuery.ajaxSettings.cache = false;


  if($('span.nxt-prv').width() == 42){
    $('span.nxt-prv').hide();
  }
  
});

