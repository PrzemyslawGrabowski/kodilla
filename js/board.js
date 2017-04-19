var board = {
	name: 'Tablica Kanban',
	addColumn: function(column) {
		this.$element.append(column.$element),
		initSortable();
	},
	$element: $('#board .column-container')
}
// Funkcja do tworzenia kolumn
$('.create-column').click(function(){
		// ewentualnie 2 sposób przy większych ilościach.
		// var = config = {
		//	firstWarning: 'Wpisz nazwę kolumny',
		//	secondWarning: 'Nazwa kolumny jest wymagana! Proszę wpisz nazwę kolumny'
		//}
	var columnName = validate({
		firstWarning: 'Wpisz nazwę kolumny',
		secondWarning: 'Nazwa kolumny jest wymagana! Proszę wpisz nazwę kolumny'
	});
	//if (columnName) {
	//	var column  = new Column(columnName);
	//	board.addColumn(column);
	//}
	 $.ajax({
		url: baseUrl + '/column',
		method: 'POST',
		data: {
			name: columnName
		},
		success: function(response){
			var column = new Column(response.id, columnName);
			board.addColumn(column);
		}
	});

});

// funkcja sprawdzająca wypełnienie prompt
function validate(config) {
	var cardName = prompt(config.firstWarning);
	if (cardName === null) {
		return;
	}
	while (cardName === '') {
		cardName = prompt(config.secondWarning);
	}
	return cardName
}

// Funkacja drag'n'drop
function initSortable() {
	$('.column-card-list').sortable({
		connectWith: '.column-card-list',
		placeholder: 'card-placeholder'
	}).disableSelection();
}