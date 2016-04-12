$(document).ready(function() {



	$("#title").click(function(){
		$("#title").fadeOut(400)
		$("#subheading").fadeOut(400)
	});
	
	
		$(".signup").hover(function(){
		$(this).addClass("hover");
		}, function() {
		$(this).removeClass("hover");
		});

	$(".signup").click(function(){
		$(".signupsheet").addClass("signup-show")
	});
	
	$("#close").click(function(){
		if ($(".signupsheet").hasClass("signup-show")){
			$(".signupsheet").removeClass("signup-show", {duration:500});
		}
	});
})