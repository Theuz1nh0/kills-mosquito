// start variables for screen size
let screenWidth = 0;
let screenHeight = 0;
let life = 3;

// adds the actual size of the window to its respective variables
function adjustGameStageSize() {
    screenWidth = window.innerWidth
    screenHeight = window.innerHeight
}

// creates a random position based on screen size
function randomPosition() {
    let positionX = Math.floor(Math.random() * screenWidth) - 90
    let positionY = Math.floor(Math.random() * screenHeight) - 90

    // checks if the random number is less than 0
    positionX = positionX < 0 ? 0 : positionX;
    positionY = positionY < 0 ? 0 : positionY;

    // return an object with the values ​​of random numbers
    return { x: positionX, y: positionY }
}

function randomMosquito() {
    //  remove the previous mosquito if it exists
    const MOSQUITO_CONTAINER = document.querySelector('#mosquito');

    if (MOSQUITO_CONTAINER) {
        MOSQUITO_CONTAINER.remove();

        lostHeart()

        if (life === 0) {
            gameOver();
            return;
        }
    }

    // get the random position
    const POSITION = randomPosition()
    // create a mosquito
    const MOSQUITO = document.createElement('img')

    // set the mosquito attributes and styles
    MOSQUITO.src = './img/mosca.png';
    MOSQUITO.className = `${randomSize()} ${randomSide()}`;
    MOSQUITO.style.position = 'absolute';
    MOSQUITO.style.left = `${POSITION.x}px`;
    MOSQUITO.style.top = `${POSITION.y}px`;
    MOSQUITO.id = 'mosquito';
    MOSQUITO.onclick = function () { this.remove() }


    document.body.appendChild(MOSQUITO)
}

// creates a random size
function randomSize() {
    let mosquitoClass = Math.floor(Math.random() * 3)

    // return a random class
    switch (mosquitoClass) {
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    }
}

function randomSide() {
    let mosquitoClass = Math.floor(Math.random() * 2)

    switch (mosquitoClass) {
        case 0:
            return 'sideA';
        case 1:
            return 'sideB';
    }
}

// takes a heart from the player's life and decreases the life variable by 1
function lostHeart() {
    const MOSQUITO_HEARTS = document.querySelectorAll('.hearts');

    for (let heart of MOSQUITO_HEARTS) {
        if (heart.src.indexOf('coracao_cheio') != -1) {
            heart.src = './img/coracao_vazio.png'
            life--
            break;
        }
    }
}

function gameOver() {
    window.location.href = 'game_over.html'
}