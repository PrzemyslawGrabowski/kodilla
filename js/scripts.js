var carouselList = $("#carousel ul");
	setInterval(changeSlideNext, 2000);
	
	function changeSlideNext() {
		carouselList.animate({'marginLeft': -400}, 1500, moveFirstSlide);
	};
	
	function moveFirstSlide () {
		var firstItem = carouselList.find("li:first"); // Czy te zmienne można deklarować na początku, 
		var lastItem = carouselList.find("li:last");// czy trzeba w funkcji?
		
		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	};

	