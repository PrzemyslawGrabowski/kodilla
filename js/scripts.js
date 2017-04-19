var url = 'https://restcountries.eu/rest/v2/name/';

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
	var createdTable = createNewTable();

	resp.forEach(function(item) {
		var row = document.createElement('tr');
		row.innerHTML = `
			<td><img style="width: 100px; height: 60px; object-fit: cover" src=${item.flag}></img></td>
			<td>${item.name}</td>
			<td>${item.capital}</td>
			<td>${item.alpha2Code}</td>
			<td>${item.timezones}</td>
		`;
		createdTable.appendChild(row);
	});
	
}

function createNewTable() {
	var table = document.getElementsByTagName('table')[0] || document.createElement('table');
	var template = `
		<tr>
			<td>Flag</td>
			<td>Country name</td>
			<td>Capital</td>
			<td>Code</td>
			<td>Time zone</td>
		</tr>
	`;
	table.innerHTML = template;
	document.body.appendChild(table);
	return table;
}