let sec = 0;
let min = 0;
let hr = 0;
let interval;

function start() {
    watch()
    interval = setInterval(watch,1000);
}

function pause() {
    clearInterval(interval);
}

function stop() {
    clearInterval(interval);
    sec = 0;
    min = 0;
    document.getElementById('watch').innerHTML = '00:00:00'
}

function twoDigits(digit) {
    if(digit<10){
        return('0' + digit)
    }else {
        return digit
    }
}

function watch() {
    sec++;

    if(sec === 60) {
        min++;
        sec = 0;
        if(min === 60) {
            hr++;
            min = 0;
        }
    }
    document.getElementById('watch').innerHTML = twoDigits(hr) + ':' + twoDigits(min) + ':' + twoDigits(sec)
}