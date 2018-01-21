var express = require('express'),
    router = express.Router();
    moviesController = require("Movie Name");
var OutputJSON = {
  "isSuccess" : true,
  "data" : result
}
return res.json(OutputJSON);
});
};
exports.addNewMovie = function (req, res, next){
  var db = dbService.database,
  movie = req.body;
  moviesCollections = db.collection("movies");
  moviesCollection.insert(movie).then(function(save_data){
    return res.json({
      "isSuccess" : true,

    })
  }
}
