/**
 * Created by nathanSfriendly on 2/21/15.
 */
var Cylon = require('cylon');
var Sound = require('node-mpg123');

function writeToScreen(screen, message, message2) {
    screen.setCursor(0,0);
    screen.write(message);
    screen.setCursor(1,0);
    screen.write(message2);
}

function updateSong(name) {
    nowPlaying.stop();
    var file = path + name + ".mp3";
    console.log(file);
    nowPlaying = new Sound(file);
    nowPlaying.play();
}

var path = "/media/sdcard/";
//var year = 1985;
//var nowPlaying = new Sound(path + 2015 + ".mp3");

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
        var button2State = 0;
        var year = 1984;
        //nowPlaying.play();

        every((1).second(), my.led.toggle);
        every((1).second(), function() {
            analogValue = my.rotary.analogRead();
            writeToScreen(my.screen, "Year: " + year, "Volume: " + analogValue/1000); //, year, "\nVolume: " + analogValue);

            console.log("Read: ", analogValue);
            console.log("Year: ", year);
        });

        my.button1.on('push', function() {
            if (button2State == 1) {
                if (year < 2015) {
                    year++;
                    //updateSong(year);
                }
            } else if (year > 1920) {
                year--;
                //updateSong(year);
            }
        });

        my.button2.on('push', function() {
            button2State = 1;
        });

        my.button2.on('release', function() {
            button2State = 0;
        });

    }

}).start();
