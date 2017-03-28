var lista = document.getElementById('lista');
var add = document.getElementById('addElem');
var list = document.getElementsByTagName('li');

add.addEventListener('click', function(e) {
	console.log(e);
	var numer = list.length;
	lista.innerHTML += '<li>item ' + numer + '</li>';
});


