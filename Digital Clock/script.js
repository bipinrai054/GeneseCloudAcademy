// a program to make a digital clock using Js, HTTM and CSS.

function displayTime(){
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let period = "AM";
    if(hours > 12){
        hours = hours - 12;
        period = 'PM';
    }
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
    let time = hours + ':' + minutes + ':' + seconds + ' ' + period;
    document.getElementById('clock').innerText = time;
}

setInterval(displayTime, 1000);