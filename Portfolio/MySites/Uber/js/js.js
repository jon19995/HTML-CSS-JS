$(function(){
    $("#nav-toggle").on("click", function(e) {
		e.preventDefault();
		$(".menu").toggleClass("menu_active");  
		$(this).toggleClass("burger_active");  
	});
});