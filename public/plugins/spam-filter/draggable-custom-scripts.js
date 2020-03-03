(function($) {
	$(document).ready(function() {
	
		$("#SurnameHolder_Holder").slideUp(100);
		$("#DateTimeHolder_Holder").slideUp(100);

		var formTimer = 0;
		$("body").on("focus", "form", function(){
			
			if( formTimer == 0 ){
				console.log("Timer started");
				var storeTimeInterval = setInterval(function(){

					++formTimer;
	
					//console.log(formTimer);
	
					if(formTimer == 60){
						clearInterval(storeTimeInterval);
						console.log("stop timer, one minute reached.");
					}
	
				}, 1000);
			}			

		});
		
		
		$("body").on("click", "form .Actions input[type=submit]", function(e){
			e.preventDefault();
			//put timer value in the hidden timer field -- and submit
			$("#DateTimeHolder_Holder").find("input").val(formTimer);
			$("#UserForm_Form").submit();		
		});

		// set timer value?
		var durations = {
			'start': null,
			'end': null,
			'elapsed': null
		};

		function TimeDrag(){
			durations.elapsed = durations.end - durations.start;
		}

		$(".drag-dot").on("mousedown", function(){
			durations.start = new Date().getTime();
			console.log(durations.start);
		});

		// DRAGGABLE
		$('.drag-dot').draggable({
			revert: true,
			placeholder: true,
			droptarget: '.dropzone',
			drop: function(evt, droptarget) {
				$(this).appendTo(droptarget).draggable('destroy');
				// then create a new hidden field on the end of the form?
				//console.log(evt);
				durations.end = new Date().getTime();
				console.log(durations.end);
				TimeDrag();
				console.log(durations.elapsed);
				if( durations.elapsed >= 500 ){
					console.log("good time, create field");
					//
					$('<input>').attr({
						type: 'hidden',
						id: 'slide-check',
						name: 'dot-slide',
						value: 'good'
					}).appendTo('form');
				}else{
					//too fast
				}
			}
		});


	}); //======END READY
})(jQuery);