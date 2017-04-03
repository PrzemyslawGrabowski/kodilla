//var allSpansEven = $("span:even");
//    allSpansEven.each(function(index, element) {
//    	$(allSpansEven).css('color', 'red');
//});

//var allSpansEven = $("span:even");
//    $(allSpansEven).css('color', 'red');

var span = $("span");
	span.each(function(index, element) {
		if(index % 2 == 0) {
		$(element).css('color', 'red');
	};
});

var paragraphs = $("p:even");
	paragraphs.each(function(index, element) {
		var newButton = '<button class="btn" data-tmp="' + index + '">Click me</button>'
		$(element).append(newButton)
	});

$("button").click(function() {
	alert($(this).attr("data-tmp"));
});