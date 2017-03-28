var text ='Świnki koszą trawę, unosząc się nad ziemią 15 centrymetrów, na czerwonych dywanach';
var animal = 'Zielone słonie';
var animalUpperCased = animal.toUpperCase();
var firstWord = text.split(' ');
var textReplaced = text.replace(firstWord[0], 'ZIELONE SŁONIE');

console.log(textReplaced.substr(0,textReplaced.length/2));