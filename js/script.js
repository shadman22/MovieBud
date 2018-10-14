var map;
function navbaranimation (){
  $(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 20) {
      $(".navbar-inverse").css("background" , "#002741");
    }

    else if (scroll < 10){
      $(".navbar-inverse").css("background" , "transparent");   
    }
  })
})
}

function scrollsmooth(){
	$('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
        });
      }
    }
  });
}
$(document).ready(function(){
    $("#about_us_details").hide();
});
$(document).ready(function(){
    $("#about_us_here").click(function(){
      $("#about_us_details").show();
      $("#about_us_here").hide();
    });
});
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 23.748943, lng: 90.374528},
    zoom: 15
  });

  var marker = new google.maps.Marker({
          position: {lat: 23.748943, lng: 90.374528},
          map: map,
          title: 'Contact Us!!'
        });
}
function content_animation(){
  $(document).ready(function() {

  //window and animation items
  var animation_elements = $.find('.animation-element');
  var web_window = $(window);

  //check to see if any animation containers are currently in view
  function check_if_in_view() {
    //get current window information
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    //iterate through elements to see if its in view
    $.each(animation_elements, function() {

      //get the element sinformation
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      } else {
        element.removeClass('in-view');
      }
    });

  }

  //on or scroll, detect elements in view
  $(window).on('scroll resize', function() {
      check_if_in_view()
    })
    //trigger our scroll event on initial load
  $(window).trigger('scroll');

});
}

function navbaranimation2(){
  $(document).ready(function(){
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if (scroll > 20) {
      $(".navbar-inverse").css("background" , "#34495E");
    }

    else if (scroll < 10){
      $(".navbar-inverse").css("background" , "transparent");   
    }
  })
})
}


