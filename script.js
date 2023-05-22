let hour = document.querySelector('.hour'),
    minute = document.querySelector('.minute'),
    seconds = document.querySelector('.second');

function getCurrentHour() {
    let today = new Date();
    let currentHour = today.getHours();
    let currentMinute = today.getMinutes();
    let currentSecond = today.getSeconds();

    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    hour.innerHTML = getZero(currentHour) + ':';
    minute.innerHTML = getZero(currentMinute) + ':';
    seconds.innerHTML = getZero(currentSecond);


    let body = document.querySelector("body");
    let username = document.querySelector(".username")
    let clock = document.querySelector(".clock")
    if (currentHour >= 6 && currentHour < 8) {
        body.style.background = 'white';
        body.style.color = 'black';
        username.style.color = 'black'
        clock.style.color = 'black'
    } else {
        body.style.background = 'black';
        body.style.color = 'white';
        username.style.color = 'white'
        clock.style.color = 'white'
    }
}

getCurrentHour();

let dateToday = new Date().getDate(),
    monthToday = new Date().getMonth(),
    yearToday = new Date().getFullYear();

document.querySelector('.today-date').innerHTML = `${dateToday}.${monthToday + 1}.${yearToday}`;

setInterval(getCurrentHour, 1000);

let today = new Date();
let currentHour = today.getHours();

let greeting = currentHour < 12 ? 'Good Morning, sir' : 'Good afternoon';

document.querySelector('.user-name').innerHTML = greeting;


