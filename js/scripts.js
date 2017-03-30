var allSpans = $("span");
    allSpans.each(function(index, element) {
    	$("span:even").css('color', 'red');
});

var paragraphs = $("p:even");
	paragraphs.each(function(index, element) {
		var newButton = '<button class="btn" data-tmp="' + index + '">Click me</button>'
		$(element).append(newButton)
	});

$("button").click(function() {
	alert($(this).attr("data-tmp"));
});