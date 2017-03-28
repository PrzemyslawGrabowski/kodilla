var buttonNames = document.getElementsByClassName('button');
var buttonNamesLength = buttonNames.length;
console.log(buttonNames);
console.log(buttonNamesLength);

for (i = 0; i < buttonNamesLength; i++) {
	alert( buttonNames[i].innerHTML);
}