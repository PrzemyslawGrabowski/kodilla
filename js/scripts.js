function Button(text) {
	this.text = text || 'Fill in with text';
}

Button.prototype = {
	create: function() {
		var self = this;
		this.$element = $('<button>');
		this.$element.text(this.text);
		this.$element.click(function() {
			alert(self.text);
		});
		
		this.$element.appendTo($('body'));
	}
}

var btn1 = new Button('Cześć!');
var btn2 = new Button('Żegnaj!');

btn1.create();
btn2.create();
