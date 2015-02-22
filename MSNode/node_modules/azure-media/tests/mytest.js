var config = require('../testconfig');
var Azure = require('../index.js');
var fs = require('fs')

//Azure.getMediaService(config.auth, function(err, mediaService){
//  mediaService.rest.task.get("nb:tid:UUID:dfb52712-b4fc-48c1-a83a-e1b38dba810f", function (err, result) {
//    console.log(result.toJSON())
//  });
//});


var api = new Azure(config.auth); // {client_id: 'your azure media id', client_secret: 'your azure media secret'}
api.init(function (err, token) {
  // do your work here or after this callback
  console.log(err||"got token")

//  api.media.uploadStream('testshit.mp4', fs.createReadStream('/Users/pengchengbi/Desktop/testshit.mp4'), fs.statSync('/Users/pengchengbi/Desktop/testshit.mp4').size,
//    function (err, result){
//      console.log(result);
//  });

    api.media.getUploadUrl("file.mp4", function(err, res){
      console.log(err||res)
    });

//  api.media.getDownloadURL("nb:cid:UUID:1b4508e2-7867-4112-849e-f02b62ebbe7d", function (err, url) {
//    console.log(err||url);
//  });

//    api.media.getOriginURL("nb:cid:UUID:a85998e1-da34-4e59-88f7-7da812dd8cb4", function (err, url) {
//    console.log(url);
//  });

//
//  api.media.encodeVideo("nb:cid:UUID:57d7ef04-e9d3-4d04-b1fc-fd4224da5b06", 'H264 Adaptive Bitrate MP4 Set 720p', function (err, job, asset) {
//    console.log(err || job.toJSON());
//    console.log(asset.toJSON())
////    api.rest.job.listOutputMediaAssets(job.toJSON().Id, function (err, assets){
////      console.log(assets.length)
////      console.log(assets[0].toJSON())
////    })
//    api.rest.job.listTasks(job.toJSON().Id, function (err, assets){
//      console.log(assets.length)
//      console.log(assets[0].toJSON())
//    })
//  });


//  api.rest.job.listTasks('nb:jid:UUID:50706d63-c1a0-d241-9f48-56df44821939', function (err, assets){
//    console.log(assets.length)
//    console.log(assets[0].toJSON())
//  })


//  api.rest.asset.listLocators("nb:cid:UUID:4648457b-b65c-4fed-865d-e1fe03a45de9", function (err, results) {
//    console.log(results.length)
//    results.forEach(function (res){
//      console.log(res.toJSON())
//    });
//  });


//  api.rest.locator.delete("nb:lid:UUID:edbe9a16-dbd7-4df0-8f02-7d6866ca450b", function (err, result) {
//    console.log(err||result.toJSON())
//  });


//  api.rest.asset.get("nb:cid:UUID:4dfecb13-b8bc-4e69-adad-7947356b9c5a", function (err, result) {
//    console.log(err||result.toJSON())
//  });

//    api.rest.task.get("nb:tid:UUID:dfb52712-b4fc-48c1-a83a-e1b38dba810f", function (err, result) {
//    console.log(err||result.toJSON())
//  });

//    api.rest.mediaprocessor.list(function (err, results) {
//    console.log(results.length)
//    results.forEach(function (res){
//      console.log(res.toJSON())
//    });
//  });

//  api.rest.asset.list(function (err, result) {
//    console.log(err||result[0].toJSON())
//  }, {'$filter': "Name eq 'shit.mp4'"});

//  api.rest.asset.listFiles("nb:cid:UUID:e145d2c2-d610-4c03-9933-3ea1b695b5db", function (err, result) {
//    console.log(err||result[0].toJSON())
//  });

//  api.rest.asset.listLocators("nb:cid:UUID:4dfecb13-b8bc-4e69-adad-7947356b9c5a", function (err, results) {
//    console.log(results.length)
//    results.forEach(function (res){
//      console.log(res.toJSON().Path)
//    });
//  });

//  api.rest.assetfile.list(function (err, results) {
//    console.log(results.length)
//    console.log(results[0].toJSON())
////    results.forEach(function (res){
////      console.log(res.toJSON().ParentAssetId)
////    });
//  }, {'$filter': "Name eq 'shit.mp4'"});

//  api.rest.job.get("nb:jid:UUID:05f25bb7-b0b5-e749-b6d6-f81b62ffe66e", function (err, result) {
//    console.log(err||result.toJSON())
//  });

//    api.rest.locator.list(function (err, results) {
//      console.log(results[0].toJSON())
////      results.forEach(function (res){
////        console.log(res.toJSON())
////      });
//    }, {$orderby: 'Created desc'});

});

