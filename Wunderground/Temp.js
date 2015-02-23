var myKey = '67ef6acb8895b29b';
var Wunderground = require('wunderground-api');

var Temp = function () {
    init = function (cb) {
        callback = cb;
    },
    current = function (city, state) {
        var client = new Wunderground(myKey, city, state);
        
        client.conditions('', callback);
    },
    
    callback = {};
    
    return {
        init: init,
        current: current
    };
}();

module.exports = Temp;