/**
 * Created by nathanSfriendly on 2/21/15.
 */
var Cylon = require('cylon');
//var Sound = require('node-mpg123');
var path = "/media/sdcard/";
//var AudioController = require('./AudioController.js');

//AudioController.play(path);

function writeToScreen(screen, message, message2) {
    screen.setCursor(0,0);
    screen.write(message);
    screen.setCursor(1,0);
    screen.write(message2 + "         ");
}



var year = 1985;


Cylon.robot({
    connections: {
        edison: { adaptor: 'intel-iot' }
    },

    devices: {
        led: { driver: 'led', pin: 13 },
        rotary: { driver: 'analogSensor', pin: 0, connection: 'edison'},
        button1: { driver: 'button', pin: 8, connection: 'edison' },
        button2: { driver: 'button', pin: 9, connection: 'edison' },
        screen: { driver: 'upm-jhd1313m1', connection: 'edison' }
    },

    work: function(my) {
        var analogValue = 0;
        var prevState = false;
        year = 2015;

        every((1).second(), my.led.toggle);
        every((1).second(), function() {
            analogValue = my.rotary.analogRead();
            writeToScreen(my.screen, "Year: " + year, "Volume: " + (1023 - analogValue)); //, year, "\nVolume: " + analogValue);

            console.log("Read: ", analogValue);
            console.log("Year: ", year);
        });


        my.button1.on('push', function() {
            if (my.button2.isPressed()) {
                year--;
                if (year < 2015) {
                    year++;
                }
            } else if (year > 1920) {
                year--;
            }
            console.log(year);
        });


    }

}).start();
