console.log("Create!");
$.ajax({
    type : "GET",
    url: "https://api.myjson.com/bins/tls49",
    dataType: "json",
    success:function(response){
      var data= formObject(response);
      constructDOM(data);
      console.log("DATA SUCCESS",response);
      formObject(response);
    },
    error:function(err){
      console.console.log("ERROR IN GET METHORDS",err);
    }
  }
);
    function formObject(response)
    {
      var length=response.length;
      var flags=[],categoryObject=[];
      for (var i = 0; i < response.length; i++) {
        console.log(response[i]);
        console.log(flags);
        movie=response[i];
        var index=flags.indexOf(movie.language);
        if (index>=0) {
          categoryObject[index].movies.push(movie);
          continue
        }
        else {
          flags.push(movie.language);
        }
        var objectSchema={
          "category":movie.language,
          "movies":[]
        }

        objectSchema.movies.push(movie);
        categoryObject.push(objectSchema);
        console.log("objectSchema is",objectSchema);

      }
      console.log(" formObject response",response);
       console.log("Movie reponse",movie.language);
      flags.push(movie.language);
    }
    function constructDOM()
    {
      var data;
      for (var i = 0; i<data.length; i++) {
        var objectSchema=data[i];
        console.log("CONSTRYUCTED DOM",objectSchema);
        var categoryTile=$('<h3> "class categoryName">'+objectSchema).html(categoryContent);
        categoryContent.push(categoryTile);
      }
      $('section.content').html(categoryContent);


    }
