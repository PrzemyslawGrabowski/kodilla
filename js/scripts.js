//Chyba to wszystko co mogę zrobić. Chciałem się pobawić w wyświetlenie jak w zadaniu dla chętnych, ale chyba to nie jest do zrobinia
//na tym etapie kształcenia, albo zajęłoby mi to kilka dni. Bo nie wiem jak wyświetlać oddzielnie każde państwo i jak wyświetlić "key" z JSON
//W ogóle to mają błąd bo w wersji v1 nie ma możliwości wyświetlenia flagi...

var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');
var countriesCapital = $('#capital');
var countriesCode = $('#alpha2Code');
var countriesTimeZone = $('#timeZone') 

$('#search').click(searchCountries);

function searchCountries() {
	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
}

function showCountriesList(resp) {
	countriesList.empty();
	countriesCapital.empty();
	countriesCode.empty();
	countriesTimeZone.empty();
	resp.forEach(function(item) {
		$('<img>').attr('src', item.flag).addClass('img').appendTo(countriesList);
		$('<th>').text(item.name).appendTo(countriesList);
		$('<td>').text(item.capital).appendTo(countriesCapital);
		$('<td>').text(item.alpha2Code).appendTo(countriesCode);
		$('<td>').text(item.timezones).appendTo(countriesTimeZone);
	});
}


