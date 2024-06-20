let time = 15;
let level = window.location.search;
let timeLevel = 0;
level = level.replace('?', '');

// changes mosquito spawn time based on difficulty
switch(level) {
    case 'facil':
        timeLevel = 1500;
        break;
    case 'normal':
        timeLevel = 1000;
        break;
    case 'dificil':
        timeLevel = 750;
        break;
}

const spanTime = document.querySelector('#time');
spanTime.innerHTML = time;

// calls functions from the game.js file
adjustGameStageSize()
randomMosquito()

// breeds mosquitoes
let createMosquito = setInterval(() => randomMosquito(), timeLevel)

// manipulates game time and checks if the player has won
let stopwatch = setInterval(() => {
    time--

    if (time < 0) {
        clearInterval(stopwatch)
        clearInterval(createMosquito)
        window.location.href = 'game_win.html'
    } else {
        spanTime.innerHTML = time;
    }
}, 1000)
