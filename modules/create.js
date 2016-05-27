var fs = require('fs');
module.exports=function(fields,files){
  var img = files.image[0];
  //Read input file and store
  fs.readFile(img.path, function(err, data) {
      var path = './public/images/' + fields.title[0] + '.jpg';
      console.log('Writing file...');
      fs.writeFile(path, data, function(error) {return err;})
  });
  //Read Json file to write new object
  var content = JSON.parse(fs.readFileSync("./public/movie.json"));
  var obj = {};
  //Prepare new object
  obj.title = fields.title[0];
  obj.date = fields.date[0];
  obj.director = fields.director[0];
  obj.actors = fields.actors[0];
  obj.about = fields.about[0];
  obj.rating = fields.rating[0];
  obj.wins = fields.wins[0];
  obj.nominations = fields.nominations[0];
  obj.file = 'images/' + fields.title[0] + '.jpg';
  obj.ytlink = fields.ytlink[0];
  //Push to json array
  content.push(obj);
  //Write to file with updated data
  fs.writeFile("./public/movie.json", JSON.stringify(content, null, 4), function(err) {
      if (err) {
          return err;
      }
  });
}
