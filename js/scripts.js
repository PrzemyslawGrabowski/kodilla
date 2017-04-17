var url = 'http://api.icndb.com/jokes/random';
var button = document.getElementById('get-joke');
var paragraph = document.getElementById('joke');

button.addEventListener('click', function(){ //kliknięcie button -> generowanie dowcipu
	getJoke();
});

document.onload = getJoke(); // załafowanie storny -> generowanie dowcipu

function getJoke() {
	var xhr = new XMLHttpRequest(); //xht skrót od XMLHttpRequest
	xhr.open('GET', url);
	xhr.addEventListener('load', function()
	{var response = JSON.parse(xhr.response);
		paragraph.innerHTML = response.value.joke;
	});
	xhr.send();
}