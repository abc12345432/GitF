var MongoClient= require('mongodb').MongoClient;

exports.createConnection=function(){
  MongoClient.connect("mongodb://abc:sympo12@ds263847.mlab.com:63847/projector1").then(function(client){;
  console.log("Connected to mongodb");
});


}
