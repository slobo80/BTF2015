var myKey = '67ef6acb8895b29b';
var Temp = require('./Temp.js');
var Wunderground = require('wunderground-api');

Temp.init(function (err, data) {
    if (err) {
        throw err
    }            
    else {
        console.log(data.temp_f);
    }
});

Temp.current("Seattle", "WA");

