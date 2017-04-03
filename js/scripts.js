var newGameBtn = document.getElementById('js-newGameButton');
var pickRock = document.getElementById('js-playerPick_rock');
var pickPaper = document.getElementById('js-playerPick_paper');
var pickScissors = document.getElementById('js-playerPick_scissors');
var gameState = 'notStarted';
var player = {
    name: '',
    score: 0
};
var computer = {
    score: 0
};
var newGameElem = document.getElementById('js-newGameElement');
var pickElem = document.getElementById('js-playerPickElement');
var resultsElem = document.getElementById('js-resultsTableElement');
var playerPointsElem = document.getElementById('js-playerPoints');
var playerNameElem = document.getElementById('js-playerName');
var computerPointsElem = document.getElementById('js-computerPoints');
var playerPickElem = document.getElementById('js-playerPick');
var computerPickElem = document.getElementById('js-computerPick');
var playerResultElem = document.getElementById('js-playerResult');
var computerResultElem = document.getElementById('js-computerResult');

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });
newGameBtn.addEventListener('click', newGame);

// funkcja elementów gry
function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
      break;
    case 'ended':
        newGameBtn.innerText = 'Jeszcze raz';
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
}

setGameElements();

// funkcja dodawania punktów
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;

    checkGameWinner();
    setGameElements();
}

//funkcja nowej gry
function newGame() {
  player.name = prompt('Graczu, wpisz swoje imię', 'imię gracza');
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';
    setGameElements();

    playerNameElem.innerHTML = player.name;
    setGamePoints();
  }

}

// funkcja wyboru komputera
function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

// funkcja wyboru gracza
function playerPick(playerPick) {
    var computerPick = getComputerPick();
    
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;

    checkRoundWinner(playerPick, computerPick);
    setGamePoints();
}    

// funkcja sprawdzająca wynik rundy 
function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';
        
    if (playerPick === computerPick) {
        return ('');

    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock') 
        ){

        computerResultElem.innerHTML = "Wygrana!";
                computer.score++;
    } else {
        playerResultElem.innerHTML = "Wygrana!";
                player.score++;
    }    
}

// funkcja sprawdzająca wynik gry
function checkGameWinner () {
    if (player.score === 10) {
        alert("Koniec Gry. Wygral gracz " + player.name);
        gameState = 'ended';
    } 

    if (computer.score === 10) {
        alert("Koniec Gry. Wygral komputer");
        gameState = 'ended';
    }
}

/*var winnerIs = 'player';
    if (winnerIs = 'player'){
        playerResultElem.innerHTML = "Wygrana!";
        player.score++;
    }

    else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')
    ) { 
        winnerIs = 'computer';
        computerResultElem.innerHTML = "Wygrana!";
        computer.score++;
    } else if (playerPick == computerPick) {
        winnerIs = 'noone';
    }
  setGameElements();
}
*/

/* function checkGameWinner () {
    if (player.score == 10) {
        gameWinnerIs = 'player'; 
        alert("Koniec Gry. Wygral gracz " + player.name);
        gameState = 'ended';
        
}   else if (computer.score == 10) {
        gameWinnerIs = 'computer';
        alert("Koniec Gry. Wygral komputer");
        gameState = 'ended';
    }
} 
*/

