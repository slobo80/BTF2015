/**
 * Created by nathanSfriendly on 2/22/15.
 */


    //mpg123 -R --fifo fifoFile.tmp > /dev/null 2>1 &

var cp = require('child_process'),
    events = require('events'),
    util = require('util');

var proc = {};
var fifoPath = 'fifoFile.tmp';
var fs = require('fs');

var AudioController = function () {
    //var process = {},

    var play = function(path) {
        //proc = cp.spawn('mpg123',  ['-R', '--fifo', fifoPath]);
        //    proc = cp.spawn('echo', ['load', '/media/sdcard/1985.mp3'], {stdio: ['pipe', 'stream', 'pipe']}>', 'fifoFile.tmp']);
        //fs.writeFile(fifoPath, 'silence', function(err) {
        //    if (err) return console.log(err);
        //});

        //fs.open(fifoPath, 'w', 0666, function(error, fd) {
        //    if (error) {
        //        if (fd) {
        //            fs.close(fd);
        //        }
        //        console.log('error');
        //        return;
        //    }
        //
        //    var command = 'load /media/sdcard/1985.mp3';
        //    fs.write(fd, command, 0, command.length, null, function (error, written, buffer) {
        //        if (fd) {
        //            fs.close(fd);
        //        }
        //        if (error) {
        //            console.log('Error writing');
        //        }
        //    });
        //});

        //    fd.write('load /media/sdcard/1985.mp3', 'utf8');
        //    fd = fs.creatWriteStream(fifoPath);
        //
        //    , 'load /media/sdcard/1985.mp3', function(err) {
        //    if (err) return console.log(err);
        //});

        //    proc = spawn('bash');
        //spawn.stdin.write('mpg123 -C /media/sdcard/1985.mp3');
        //var terminal = cp.spawn('bash');
            //terminal.stdin.write('mpg123 -C /media/sdcard/1985.mp3' + '\n');
            //terminal.stdin.end();
            //process = spawn('cat');
        //process = spawn('mpg123', [ "-vC", path + "*.mp3"]);
        //TODO: handle end of song
        //proc.stdout.on('data', function (data) {
        //    console.log(data);
        //});
        //
        //proc.stderr.on('data', function (data) {
        //    console.log(data);
        //});
    },

    nextSong = function() {
        console.log("skip");
        //console.log(proc.stdin.write('f' + '\n'));
        fs.writeFile(fifoPath, 'STOP', function(err) {
            if (err) return console.log(err);
        });
        //console.log(process);
    };

    return {
        play: play,
        nextSong: nextSong
    };
}();

module.exports = AudioController;