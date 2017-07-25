'use strict';

console.warn('work');

var _$ = document;

var stage = _$.getElementById('stage');
var playButton = document.getElementById('playButton');
var frame1 = _$.getElementById('frame1');
var frame2 = _$.getElementById('frame2');

playButton.addEventListener('click', function() {
    frame1ToFrame2(frame1, frame2);
}, false);

function frame1ToFrame2(elem) {
    frame1.style.opacity = 1;
    frame2.style.opacity = 0; 
    let step1 = () => {
        let timer = setInterval(function() {
            if (frame1.style.opacity != 0) {
                frame1.style.opacity = (frame1.style.opacity*100 - 4)/100;
            } else {
                clearInterval(timer);
                step2();
                frame1.style.display = 'none';
            }
        }, 50);
    };
    let step2 = () => {
        let timer2 = setInterval(function() {
            if (frame2.style.opacity != 1) {
                frame2.style.opacity = (frame2.style.opacity*100 + 4)/100;
            } else {
                clearInterval(timer2);
            }
        }, 30);
    };
    step1();
    return 0;
}

function launchFullScreen(stage) {
    if (stage.requestFullScreen) {
        //console.log('norm', stage.requestFullScreen);
        stage.requestFullScreen();
    } else if (stage.webkitRequestFullScreen) {
        //console.log('webkit', stage.webkitRequestFullScreen);
        stage.webkitRequestFullScreen();
    } else if (stage.mozRequestFullScreen) {
        //console.log('moz', stage.mozRequestFullScreen);
        stage.mozRequestFullScreen();
    }
}