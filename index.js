let hr = document.querySelector('#hr');

let mn = document.querySelector('#mn');

let sc = document.querySelector('#sc');

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * 6;
    let ss = day.getSecond() * 6;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    hr.style.transform = `rotateZ(${mm}deg)`;
    hr.style.transform = `rotateZ(${ss}deg)`;
})