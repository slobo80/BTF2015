var fs = require('fs');
var AzureMedia = require('azure-media');
var myconfig = require('./myconfig');

var api = new AzureMedia(myconfig);

var Main = function () {
    init = function () {
        api.init(function (err) {
            
            api.rest.asset.list(function (err, results) {
                console.log(err);
                
                results.forEach(function (result) {
                    api.rest.asset.get(result.Id, function (err, asset) {
                        console.log(err);
                        var path = 'audio/' + asset.Name;
                        console.log(path);
                        api.media.downloadStream(asset.Id, fs.createWriteStream(path, function (err) {
                            
                            console.log(err);
                        }));


                    });
                });
            },
    { '$filter': "endswith(Name, '.mp3')" });
            
            console.log(err);
        })
    };
    
    return {
        init: init
    };
}();

module.exports = Main;

