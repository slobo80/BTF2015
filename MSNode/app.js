﻿var Main = require('./main.js');

Main.init();
//var api = new AzureMedia(myconfig);
//api.init(function (err) {
    
//    api.rest.asset.list(function (err, results) {
//        console.log(err);

//        results.forEach(function (result) {
//            api.rest.asset.get(result.Id, function (err, asset) {
//                console.log(err);
//                var path = 'audio/' + asset.Name;
//                console.log(path);
//                api.media.downloadStream(asset.Id, fs.createWriteStream(path, function (err) {
                    
//                    console.log(err);
//                }));


//            });
//            //api.rest.asset.Files(result.Id, function (errrawd) {
//            //    console.log(rawd.Name);
//            //});

//            //api.media.getDownloadURL(result.Id, function (err, url) {
//            //    console.log(err);
//            //});

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

//    console.log(err);
//});

//console.log('Done');
