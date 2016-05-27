var fs = require('fs');
module.exports=function(title){
  var index = -1;
  var content = JSON.parse(fs.readFileSync("./public/movie.json"));
  for (i = 0; i < content.length; i++) {
    //search for movie
      if (content[i].title === title) {
          index = i;
          break;
      }
  }
  //Delete from json array
  content.splice(index, 1);
  fs.writeFile("./public/movie.json", JSON.stringify(content, null, 4), function(err) {
      if (err) {
          console.log(err);
      }
  });
}
