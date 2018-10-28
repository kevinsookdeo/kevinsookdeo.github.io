//Make Your Own Music Video
//Modified version of The Coding Train tutorial 17.11: https://www.youtube.com/watch?v=2O3nm0Nvbi4

/*Variables*/
var song;
var fft;
var w;
var on = false;
var randnumR = Math.floor(Math.random() * 256);
var randnumG = Math.floor(Math.random() * 256);
var randnumB = Math.floor(Math.random() * 256);

/*Preload*/
function preload() {
  song = loadSound('../media/audio/background.wav');
}

/*Setup*/
function setup() {
    createCanvas(outerWidth, outerHeight);
    colorMode(RGB);
    angleMode(DEGREES);
    song.play();
    fft = new p5.FFT(0, 64);
    w = width / 48;
}

/*Draw*/
function draw() {
    background (0, 0, 0, 0);
    var spectrum = fft.analyze();
    console.log(spectrum);
    noStroke();
    for (var i = 0; i < spectrum.length; i++) {
        var amp = spectrum[i];
        var y = map(amp * 1.25, 0, 256, height, 0);
        if (on) {
            rect(i * w, y, w - 2, height - y);
            fill(randnumR, randnumG, randnumB);}
        else {
            clear();
            }
        }
}

function mousePressed() {
    on = !on;
}