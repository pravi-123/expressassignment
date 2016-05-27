var fs = require('fs');
module.exports=function(fields,files){
  var img = files.image[0];
  //Keep old file if user not choosen any file
  if (files.image[0].size > 0) {
      fs.readFile(img.path, function(err, data) {
          var path = './public/images/' + fields.title[0] + '.jpg';
          fs.writeFile(path, data, function(error) {return err;})
      });
  }
  var content = JSON.parse(fs.readFileSync("./public/movie.json"));

  for (i = 0; i < content.length; i++) {
    //Find object in JSON array and update values
      if (content[i].title === fields.title[0]) {
          console.log(files.image[0].size);
          content[i].date = fields.date[0];
          content[i].director = fields.director[0];
          content[i].actors = fields.actors[0];
          content[i].about = fields.about[0];
          content[i].rating = fields.rating[0];
          content[i].wins = fields.wins[0];
          content[i].nominations = fields.nominations[0];
          content[i].file = 'images/' + fields.title[0] + '.jpg';
          content[i].ytlink = fields.ytlink[0];
          break;
      }
  }

  fs.writeFile("./public/movie.json", JSON.stringify(content, null, 4), function(err) {
      if (err) {
        return err;
      }
  });
}
