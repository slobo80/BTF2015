
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
