var Sound = require('node-mpg123');

// fire and forget: 

new Sound('/media/sdcard/azureanthem2.mp3').play();

//// with ability to pause/resume:
//var music = new Sound('/path/to/the/file/filename.mp3');
//music.play();
//
//setTimeout(function () {
//    music.pause(); // pause the music after five seconds
//}, 5000);
//
//setTimeout(function () {
//    music.resume(); // and resume it two seconds after pausing
//}, 7000);
//
//// you can also listen for various callbacks:
//music.on('complete', function () {
//    console.log('Done with playback!');
//});