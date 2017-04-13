//$(function() { //Po co kodilla każe to robić skoro, skrypty są podlinkowane na końcu?
	function randomString() {
		var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
		var str = '';
		for (i = 0; i < 10; i++) {
			str += chars[Math.floor(Math.random() * chars.length)];
		}
		return str;
	}

	
	function Column(name) { // klasa Column
		var self = this; //????????? tworzenie zmniennej, by mieć dostęp do this? vide utrata konetentu
		
		this.id = randomString();
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
				self.removeColumn();
			});

			$columnAddCard.click(function() { // zdarzenie na click dodania karty
				
				var cardName = prompt('Wpisz nazwę karty');
				if (cardName === null) {
					return;
				} 
				else if (cardName === ''){ // if prompt -->  empty
				var cardName = prompt('Proszę wpisz nazwę karty') //??????????? deklaracja zmiennej
						if (cardName === '') { // if prompt -->  empty
							alert('Nazwa karty jest wymagana!')
							return;
						}
						else if (cardName === null) { //if prompt --> cancel
							return;
						}
						else { // prompt == ok --> creating a Card
							self.addCard(new Card(cardName));
						};

				} else {
					self.addCard(new Card(cardName));
				}


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
		removeColumn: function() { // metoda .remove usunie $element poprzez <button> z nasłuchaniem na click
			this.$element.remove();
		}

	}

	function Card(description) {
		var self = this;

		this.id = randomString();
		this.description = description;
		this.$element = createCard();
		// Elementy składowe kart
		function createCard() {
			var $card = $('<li>').addClass('card');
			var $cardDescription = $('<p>').addClass('card-description').text(self.description); //????????? dlaczego traci kontent
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
			this.$element.remove();
		}
	}

	var board = {
		name: 'Tablica Kanban',
		addColumn: function(column) {
			this.$element.append(column.$element),
			initSortable();
		},
		$element: $('#board .column-container')
	}

	// Funkacja drag'n'drop
	function initSortable() {
		$('.column-card-list').sortable({
			connectWith: '.column-card-list',
			placeholder: 'card-placeholder'
		}).disableSelection();
	}

	// Funkcja do tworzenia kolumn
	$('.create-column')
		.click(function(){
			var columnName = prompt('Wpisz nazwę kolumny');
			if (columnName === null) { //if prompt --> cancel
				return;
			} else if (columnName === ''){ // if prompt -->  empty
				var columnName = prompt('Proszę wpisz nazwę kolumny'); //??????????? deklaracja zmiennej
				if (columnName === '') { // if prompt -->  empty
					alert('Nazwa kolumny jest wymagana!')
					return;
				}
				else if (columnName === null) { //if prompt --> cancel
					return;
				}
				else { // prompt == ok --> creating a column
					var column = new Column(columnName);
					board.addColumn(column);
				}
			} else { // prompt == ok --> creating a column
				var column = new Column(columnName);
				board.addColumn(column);
			}

			
		});
	 

	//DOMYŚLNE ELEMENTY
	// Tworzenie kolumn
	var todoColumn = new Column('Do zrobienia');
	var doingColumn = new Column('W trakcie');
	var doneColumn = new Column('Skończone');

	// Dodawanie kolumn do tablicy
	board.addColumn(todoColumn);
	board.addColumn(doingColumn);
	board.addColumn(doneColumn);

	// Tworzenie nowych kart
	var card1 = new Card('Powtórzyć CCS.');
	var card2 = new Card('Stworzyć tablice kanban');
	var card3 = new Card('Nie oszaleć');
	var card4 = new Card('Nie robić z siebie debila.')

	// Dodawanie kart do kolumny
	todoColumn.addCard(card1);
	todoColumn.addCard(card3);
	todoColumn.addCard(card4); // ???? Jak skrócić ten zapis? Dlaczego cała tablica znika przy ujęciu todoColumn w klamrowe nawiasy?
	doingColumn.addCard(card2);

//})
