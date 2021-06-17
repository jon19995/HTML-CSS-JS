


$(function(){

	var introH = $("#intro").innerHeight(),
		header = $("#header"),
		scrollOffset = $(window).scrollTop();

		checkscroll(scrollOffset); 

		/*fixed header*/

	$(window).on("scroll", function() {

		scrollOffset = $(this).scrollTop(); 
		checkscroll(scrollOffset);

	});

	function checkscroll(scrollOffset) {


		if(scrollOffset >= introH){

			header.addClass("fixed");

		}
		else{

			header.removeClass("fixed");

		}

	}

	/*smoof scroll*/

	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll');
			blockOffset = $(blockId).offset().top;

			$("#nav a").removeClass("active");
			$this.addClass("active");

	$("html, body").animate({
		scrollTop: blockOffset
	}, 500)

	});


	/*Menu nav toggle*/

	$("#nav-toggle").on("click", function() {
		event.preventDefault();
		$("nav").toggleClass("active");  
		$(this).toggleClass("active");  

	});

	/* Collapse */

	$("[data-collapse]").on("click", function(event){
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('collapse');

		$(blockId).slideToggle();
		$this.toggleClass("active");
	});

});