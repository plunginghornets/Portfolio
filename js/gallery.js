$(document).ready(function() {


	//mouse over
	$('.img_container').mouseenter(function() {
		
		var year = $(this).parent().attr('id');
		var id = $(this).attr('id');
		$('#large_pic' + year).attr("src", "img/thumb_2/"+id+".jpg");		
	
	});
	//mouse out
	$('.img_container').mouseleave(function() {
			var year = $(this).parent().attr('id');
			$('#large_pic'+ year).attr("src", "img/start_gallery"+year+".jpg");
	});

	//gallery height
	var clientHeight = $( window ).height();
		$('.below').css('padding-bottom', clientHeight / 2 - 230);
	
	$(window).resize(function(){
		var clientHeight = $( window ).height();
		$('.below').css('padding-bottom', clientHeight / 2 - 230);
		});
		
		
});