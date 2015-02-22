
var fs = require('fs');
var AzureMedia = require('azure-media');
var myconfig = require('./myconfig');

var api = new AzureMedia(myconfig);

var Azure = function () {
    init = function() {
        api.init(function (err) {
            api.rest.asset.list(function (err, results) {
                results.forEach(function (result) {
                    api.rest.asset.get(result.Id, function (err, asset) {
                        var path = '/media/sdcard/azure/' + asset.Name;
                        console.log(path);
                        api.media.downloadStream(asset.Id, fs.createWriteStream(path, function (err) {
                            //console.log(err);
                        }));
                    });
                });
                },
                { '$filter': "endswith(Name, '.mp3')" });
        });
    };

    return {
        init: init
    }
}();

module.exports = Azure;

//Azure.prototype.downloadFiles = this.api.init(function (err) {
//        this.api.rest.asset.list(function (err, results) {
//                results.forEach(function (result) {
//                    this.api.rest.asset.get(result.Id, function (err, asset) {
//                        var path = '/media/sdcard/azure/' + asset.Name;
//                        console.log(path);
//                        this.api.media.downloadStream(asset.Id, fs.createWriteStream(path, function (err) {
//
//                            // console.log(err);
//                        }));
//
//
//                    });
//                    //api.rest.asset.Files(result.Id, function (errrawd) {
//                    //    console.log(rawd.Name);
//                    //});
//
//                    //api.media.getDownloadURL(result.Id, function (err, url) {
//                    //    console.log(err);
//                    //});
//
//                    //az.rest.asset.delete(obj.Id, function (err) {
//                    //    idx += 1;
//                    //    if (idx === length) {
//                    //        test.done();
//                    //    }
//                    //});
//                    //});
//                });
//            },
//            {'$filter': "endswith(Name, '.mp3')"});
//    });


//
//var test = new Azure();
//console.log("created");
//
//module.exports = Azure;

//var api = new AzureMedia(myconfig);
//api.init(function (err) {
//
//    api.rest.asset.list(function (err, results) {
//        results.forEach(function (result) {
//            api.rest.asset.get(result.Id, function (err, asset) {
//                var path = '/media/sdcard/azure/' + asset.Name;
//                console.log(path);
//                api.media.downloadStream(asset.Id, fs.createWriteStream(path, function (err) {
//
//                   // console.log(err);
//                }));
//
//
//            });
//            //api.rest.asset.Files(result.Id, function (errrawd) {
//            //    console.log(rawd.Name);
//            //});
//
//            //api.media.getDownloadURL(result.Id, function (err, url) {
//            //    console.log(err);
//            //});
//
//                //az.rest.asset.delete(obj.Id, function (err) {
//                //    idx += 1;
//                //    if (idx === length) {
//                //        test.done();
//                //    }
//                //});
//            //});
//        });
//    },
//    { '$filter': "endswith(Name, '.mp3')" });
//});
//
////console.log('Done');
