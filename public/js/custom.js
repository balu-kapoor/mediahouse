/* =================================
   LOADER
=================================== */
// makes sure the whole site is loaded
jQuery(window).load(function() {
        // will first fade out the loading animation
	jQuery(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
	jQuery(".preloader").delay(1000).fadeOut("slow");
})

/* =================================
===  RESPONSIVE VIDEO           ====
=================================== */

if($(".video-container").length){
  $(".video-container").fitVids();
}


/* =================================
===  STICKY NAV                 ====
=================================== */



/*
//if large screen hide nav until scroll
if (($('.HomePage .sticky-navigation').length)) {
    function mainNav() {
          var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
          //alert('Top = ' + top);
          if (top > 40){ 
            //alert('smaller than 60');
            $('.sticky-navigation').stop().animate({"top": '0'});
          }
          else{ 
            //alert('hide nav'); 
            $('.sticky-navigation').stop().animate({"top": '-60'});
          }
      }
  //}
}
else{
  function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) $('.sticky-navigation').stop().animate({"top": '0'});

        else $('.sticky-navigation').stop().animate({"top": '0'});
    }
}
*/

/* NAVIGATION VISIBLE ON SCROLL */
// var body = document.querySelector('.HomePage');
function homeNav() {
    //show nav when you scroll past 40
    var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
    //alert('Top = ' + top);
    var hasVerticalScrollbar = $(document).height() > $(window).height() + 40;    
    if(!hasVerticalScrollbar) {
      $('.sticky-navigation').stop().animate({"top": '0'});
      setInterval(() => {
        document.querySelector('body.HomePage').setAttribute('style', 'padding-top:60px !important');
      }, 1200);
      
      return; 
    }
    if (top > 40){ 
      $('.sticky-navigation').stop().animate({"top": '0'});
    }
    else{ 
      $('.sticky-navigation').stop().animate({"top": '-60'});
    }
}
function normalNav() {
    //always show top nav
    $('.sticky-navigation').css({"top": '0'});
}


//on load, load the correct nav animation
$(window).on( 'load',function () {
    if (($('.HomePage .sticky-navigation').length)) {
      homeNav();
    }
    else{
      normalNav();
    }
});

$(window).scroll(function () {
    if (($('.HomePage .sticky-navigation').length)) {
      homeNav();
    }
    else{
      normalNav();
    }
});



//keep nav visible if small screen
/*if (matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
  function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) $('.sticky-navigation').stop().animate({"top": '0'});

        else $('.sticky-navigation').stop().animate({"top": '-60'});
    }
}*/



/* =================================
===  FULL SCREEN HEADER         ====
=================================== */
function alturaMaxima() {
  var altura = $(window).height();
  $(".full-screen").css('min-height',altura);

}

$(document).ready(function() {
  alturaMaxima();
  $(window).bind('resize', alturaMaxima);
});


/* =================================
===  SMOOTH SCROLL             ====
=================================== */
var scrollAnimationTime = 1200,
    scrollAnimation = 'easeInOutExpo';
$('a.scrollto').bind('click.smoothscroll', function (event) {
    event.preventDefault();
    var target = this.hash;
    $('html, body').stop().animate({
        'scrollTop': $(target).offset().top
    }, scrollAnimationTime, scrollAnimation, function () {
        window.location.hash = target;
    });
});


/* =================================
===  WOW ANIMATION             ====
=================================== */

wow = new WOW(
  {
    mobile: false
  });
wow.init();



/* =================================
===  STELLAR                    ====
=================================== */
/*$(window).stellar({
horizontalScrolling: false
});*/


/* =================================
===  IE10 ON WINDOWS 8 FIX      ====
=================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}


// BEGIN: OwlCarousel
var ContentOwlcarousel = function () {

  var _initInstances = function () {
    $("[data-slider='owl'] .owl-carousel").each(function () {

      var parent = $(this);

      var items;
      var itemsDesktop;
      var itemsDesktopSmall;
      var itemsTablet;
      var itemsTabletSmall;
      var itemsMobile;

      var rtl_mode = (parent.attr('data-rtl')) ? parent.data('rtl') : false ; 
      var items_loop = (parent.attr('data-loop')) ? parent.data('loop') : true ; 
      var items_nav_dots = (parent.attr('data-navigation-dots')) ? parent.data('navigation-dots') : true ; 
      var items_nav_label = (parent.attr('data-navigation-label')) ? parent.data('navigation-label') : false ; 

      if (parent.data("single-item") == true) {
        items = 1;
        itemsDesktop = 1;
        itemsDesktopSmall = 1;
        itemsTablet = 1;
        itemsTabletSmall = 1;
        itemsMobile = 1;
      } else {
        items = parent.data('items');
        itemsDesktop = [1199, parent.data('desktop-items') ? parent.data('desktop-items') : items];
        itemsDesktopSmall = [979, parent.data('desktop-small-items') ? parent.data('desktop-small-items') : 3];
        itemsTablet = [768, parent.data('tablet-items') ? parent.data('tablet-items') : 2];
        itemsMobile = [479, parent.data('mobile-items') ? parent.data('mobile-items') : 1];
      }

      $(this).owlCarousel({

        rtl: rtl_mode,
        loop: items_loop,
        items: items,
        responsive: {
          0:{
            items: parent.data('mobile-items') ? parent.data('mobile-items') : 1
          },
          480:{
            items: parent.data('mobile-items') ? parent.data('mobile-items') : 1
          },
          768:{
            items: parent.data('tablet-items') ? parent.data('tablet-items') : 2
          },
          980:{
            items: parent.data('desktop-small-items') ? parent.data('desktop-small-items') : 3
          },
          1200:{
            items: parent.data('desktop-items') ? parent.data('desktop-items') : items
          }
        },

        dots: items_nav_dots,
        nav: items_nav_label,
        navText: false,
        autoplay: (parent.data("auto-play")) ? parent.data("auto-play") : true,
        autoplaySpeed: parent.data('auto-play-speed') ? parent.data("auto-play-speed") : false,
        autoplayTimeout: parent.data('auto-play-timeout') ? parent.data("auto-play-timeout") : 5000,
        autoplayHoverPause: (parent.data('auto-play-hover-pause')) ? parent.data('auto-play-hover-pause') : false,
        smartSpeed: (parent.data('smartspeed')) ? parent.data('smartspeed') : 250
        /*dotsSpeed: parent.data('slide-speed'),    */    
      });
    });
  };

  return {

    //main function to initiate the module
    init: function () {

      _initInstances();
    }

  };
}();
// END: OwlCarousel

/**************************/
/* move banner according to nav height */
/****************************/

var width = $(window).width();
var height = $(window).height();

/* on load and resize */
$(window).on("load", function () {
    // get nav heights
    var navHeight = $('.navbar-fixed-top').height();

    // offset body to same height as nav
    $('body').css('padding-top', navHeight);
});

var resizeId;
$(window).on("resize", function () {
  //alert('hello');

  clearTimeout(resizeId);
  resizeId = setTimeout(doneResizing, 500);


  function doneResizing(){
      // get nav heights
      var navHeight = $('.navbar-fixed-top').height();

      //console.log("nav height:: " + navHeight);
      //alert("nav height:: " + navHeight);

      // offset body to same height as nav
      $('body').css('padding-top', navHeight);
  }

});

// BEGIN: Twitter
var ContentTwitter = function () {

  var _initInstances = function () {
    // init twitter
    if ($(".twitter-timeline")[0]) {
      !function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0], p = /^http:/.test(d.location) ? 'http' : 'https';
        if (!d.getElementById(id)) {
          js = d.createElement(s);
          js.id = id;
          js.src = p + "://platform.twitter.com/widgets.js";
          fjs.parentNode.insertBefore(js, fjs);
        }
      }(document, "script", "twitter-wjs");
    }
  };

  return {

    //main function to initiate the module
    init: function () {
      _initInstances();
    }

  };
}();
// END: Twitter


//initialise functions listed above
$(document).ready(function() {

  if($('.owl-carousel').length){
    ContentOwlcarousel.init();

  }

  ContentTwitter.init();


});



/* =================================
===  TWITTER FOOTER FIX         ====
================================= */
(function($) {
	$(document).ready(function() {
		//set twitter check function
		setTimeout(check_twitter, 300);
		//check for twitter
		function check_twitter(){
			if( $("#twitter-widget-0").length > 0 ){
/*
				console.log("twitter loaded");
				var iframe = $("#twitter-widget-0");
				iframe.contents().html();
	*/			
			}else{
				setTimeout(check_twitter, 300);
			}
		}
		//apply STYLES

  }); //======END READY
})(jQuery);


/* =================================
===  REDIRECT PORTFOLIOS         ====
================================= */
$(document).ready(function() {
    //convert something like http://www.ee.sites.local:81/portfolio/show/1 to http://www.ee.sites.local:81/portfolio/#cbp=/portfolio/show/1
    portfolioRegex = new RegExp("\/portfolio\/show\/[0-9]");
    urlPath = window.location.pathname

    if(portfolioRegex.test(urlPath)){
      //alert('success');
      window.location.href = "/portfolio/#cbp=" + urlPath;
    }


    $('#Form_ShowNewsletterForm fieldset').each(function(){
        $(this).next('.Actions').andSelf().wrapAll('<div class="form-wrapper"/>');
    });

    /*******************/
    // AJAX NEWSLETTER FORM
    /*******************/
    $("#Form_ShowNewsletterForm").on('submit', function(e) {
      e.preventDefault();

      var form = $('#Form_ShowNewsletterForm'),
        formMessages = $('.message');

      $.ajax({
        type: 'POST',
        dataType: 'json',
        url: '/home/SignupAction',
        // url: form.attr('action'),
        data: form.serialize(),
      })
      .done(function(data) {
        formMessages.removeClass('alert-danger alert-success');

        if(data.status == 'good') {
          formMessages.addClass('alert-success');
          //hide form 
          form.find('fieldset').slideUp();
          form.find('.Actions').slideUp();
        }
        else if(data.status == 'bad') {
          formMessages.addClass('alert-danger');
        }
        $('#Form_ShowNewsletterForm_error').text(data.message).slideDown();
      });

    });

}); //======END READY

