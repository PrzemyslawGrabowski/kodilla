function Column(id, name) { // klasa Column
	var self = this; 
		
	this.id = id;
	this.name = name;
	this.$element = createColumn();
	//Elementy składowe kolumny
	function createColumn() {
		var $column = $('<div>').addClass('column'); //z mienna w jQ tworzy <div> z klasą .column
		var $columnTitle = $('<h2>').addClass('column-card-list').text(self.name); // tytuł kolumny nagłówek h2 z klasą .column-card-list  wypełniony za pomocą metody text(). Self z powodu utraty kontekstu
		var $columnCardList = $('<ul>').addClass('column-card-list'); // lista nieuporządkowana <ul> z klasą .column-card-list 
		var $columnDelete = $('<button>').addClass('btn-delete-column').text('Usuń kolumnę'); // przycisk do usuwania kolumny
		var $columnAddCard = $('<button>').addClass('add-card').text('Dodaj kartę'); // przycisk do dodania karty
	//Podpięcie zdarzeń
		$columnDelete.click(function(){ // zdarzenie na click usunięcia kolumny 
			self.deleteColumn();
		});

		$columnAddCard.click(function() { // zdarzenie na click dodania karty
		// Nowa karta
			var cardName = validate({
				firstWarning: 'Wpisz nazwę karty',
				secondWarning: 'Nazwa karty jest wymagana! Proszę wpisz nazwę karty'
			});
			//if (cardName) {
			//	self.addCard(new Card(cardName));
			//}
			$.ajax({
				url: baseUrl + '/card',
				method: 'POST',
				data: {
				name: cardName,
				bootcamp_kanban_column_id: self.id
				},
				success: function(response) {
				var card = new Card(response.id, cardName);
				self.addCard(card);
				}
			});
		});

		//Konstruowanie elementów kolumny
		$column.append($columnTitle)
				.append($columnDelete)
				.append($columnAddCard)
				.append($columnCardList);
		//Zwracanie stworzoniej kolumny 
		return $column;
	}
}
//Metoda dla klasy Column
Column.prototype = {
	addCard: function(card) { // Dodanie kolejny kart do <ul> <-- dziecka <div class="column">
		this.$element.children('ul').append(card.$element); 
	},

	deleteColumn: function() {
		var self = this;
		$.ajax({
			url: baseUrl + '/column/' + self.id,
			method: 'DELETE',
			success: function(response){
				self.$element.remove();
			}
		});
	}
}
