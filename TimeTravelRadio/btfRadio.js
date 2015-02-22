var Azure = require("./Azure.js");
var Sound = require('node-mpg123');
var Cylon = require('cylon');

// get Azure data
Azure.init();


console.log("done");
// fire and forget:

new Sound('/media/sdcard/azure/anthem2.mp3').play();