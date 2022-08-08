"use stric"

// dom elements
const coinImage = document.querySelector(".coin");
const doButton = document.getElementById("doButton");

// variables
let headCoin = {
    url: './public/img/head.png',
    display: true
}
let tailCoin = {
    url: './public/img/tail.png',
    display: false
}

// event
doButton.addEventListener("click", runCoin);

// functions
// run coin function
function runCoin() {
    const times = randomNumber(5, 15);
    let incrementor = 1000;
    for(let repeat = 0; repeat < times; repeat++) {
        timeInterval(incrementor);
        incrementor += 500;
    }
}

// random number function
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// change background function
function changeBackground() {
    if(headCoin.display === true) {
        coinImage.style.backgroundImage = `url(${tailCoin.url})`;
        headCoin.display = false;
        return;
    }
    if(headCoin.display === false) {
        coinImage.style.backgroundImage = `url(${headCoin.url})`;
        headCoin.display = true;
        return;
    }
}

// time interval function
function timeInterval(incrementor) {
    setTimeout(changeBackground, incrementor);
}
