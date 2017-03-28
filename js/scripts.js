var maleNames = ['Przemysław', 'Kondrad', 'Piotr' , 'Jakub' , 'Marek'];
var femaleNames = ['Kasia', 'Ala', 'Jola', 'Kasia', 'Marta', 'Beata'];
var allNames = maleNames.concat(femaleNames);

var newName = 'Lola';
if (allNames.indexOf(newName) === -1) {
	allNames.push(newName);
} else {
	alert('Takie imię już istnieje');
}

console.log(allNames);