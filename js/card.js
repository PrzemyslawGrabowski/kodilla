function Card(id, name) {
	var self = this;

	this.id = id;
	this.name = name;
	this.$element = createCard();
	
	// Elementy składowe kart
	function createCard() {
		var $card = $('<li>').addClass('card');
		var $cardDescription = $('<p>').addClass('card-description').text(self.name);
		var $cardDelete = $('<button>').addClass('btn-delete-card').text('X');
	// Przypięcie zdarzeń
	$cardDelete.click(function(){
		self.removeCard();
	});
	// Konstruowanie karty
	$card.append($cardDescription)
		.append($cardDelete);
	// Zwracanie karty
	return $card;

	}
}
//Metoda dla klasy Card
Card.prototype = {
	removeCard: function() {
	var self = this;
	$.ajax({
		url: baseUrl + '/card/' + self.id,
		method: 'DELETE',
		success: function(){
			self.$element.remove();
		}
	});
	}
}
