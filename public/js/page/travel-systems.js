(function($) {
	$(document).ready(function(){
    $("#features .row > div").each(
      function( index ) {
      	//console.log( index + ": " + $( this ).text() );
				//console.log( index + ":: " + $(this).find(".blurb p").length );
				var pCount = $(this).find(".blurb p").length;
				if( pCount > 1){
					$(this).find(".blurb p:not(:first)").hide();
					$(this).find(".blurb").after('<span class="more btn btn-lg c-btn-green c-btn-border-2x c-btn-square c-btn-bold wow animated fadeIn animated center" data-wow-delay="1s">More</span>');
				}

      }
    );

		/// more open close
		$("#features").on('click', '.more', function(){
      if( $(this).text() == "More" ){
        $(this).parent().find(".blurb p:first").nextAll("p").slideDown("300");
        $(this).text("Less");
      }else{
        $(this).parent().find(".blurb p:first").nextAll("p").slideUp("300");
        $(this).text("More");
      }
    });

		//=========
		//=========
		$(".features .row > div").each(
      function( index ) {
      	//console.log( index + ": " + $( this ).text() );
				//console.log( index + ":: " + $(this).find(".blurb p").length );
				var pCount = $(this).find(".blurb p").length;
				if( pCount > 1){
					$(this).find(".blurb p:not(:first)").hide();
					$(this).find(".blurb").after('<span class="more btn btn-lg c-btn-green c-btn-border-2x c-btn-square c-btn-bold wow animated fadeIn animated center" data-wow-delay="1s">More</span>');
				}

      }
    );

		/// more open close
		$(".features").on('click', '.more', function(){
      if( $(this).text() == "More" ){
        $(this).parent().find(".blurb p:first").nextAll("p").slideDown("300");
        $(this).text("Less");
      }else{
        $(this).parent().find(".blurb p:first").nextAll("p").slideUp("300");
        $(this).text("More");
      }
    });

  }); //======END READY
})(jQuery);
