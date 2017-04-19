var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
	'X-Client-Id': '1702',
	'X-Auth-Token': '50ab853aae92eb524be6796b16c4cc5f'
};

$.ajaxSetup({
  headers: myHeaders
});

$.ajax({
	url: baseUrl + '/board',
	method: 'GET',
	success: function(response) {
		setupColumns(response.columns);
	}
});

function setupColumns(columns) {
	columns.forEach(function (column) {
		var col = new Column(column.id, column.name);
		board.createColumn(col);
		setupCards(col, column.cards);
	});
}

function setupCards(col, cards) {
	cards.forEach(function (card) {
		var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
		col.createCard(card);
	})
}

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
var card4 = new Card('Nadrobić zaległości.')

// Dodawanie kart do kolumny
todoColumn.addCard(card1);
todoColumn.addCard(card3);
todoColumn.addCard(card4); // ???? Jak skrócić ten zapis? Dlaczego cała tablica znika przy ujęciu todoColumn w klamrowe nawiasy?
doingColumn.addCard(card2);