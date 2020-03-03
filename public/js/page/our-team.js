(function($) {
	$(document).ready(function() {

    $(".team-content p").nextAll("p").hide();

    $(".team-content .more").on('click', function(){
      if( $(this).text() == "More" ){
        $(this).parent().find("p:first-of-type").nextAll("p").slideDown("300");
        $(this).text("Less");
      }else{
        $(this).parent().find("p:first-of-type").nextAll("p").slideUp("300");
        $(this).text("More");
      }
    });

  }); //======END READY
})(jQuery);
