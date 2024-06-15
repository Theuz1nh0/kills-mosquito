let time = 5;

const spanTime = document.querySelector('#time');
spanTime.innerHTML = time;

// calls functions from the game.js file
adjustGameStageSize()
randomMosquito()

let createMosquito = setInterval(() => randomMosquito(), 1000)

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
