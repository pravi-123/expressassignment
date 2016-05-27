var fs = require('fs');
module.exports=function(){
    return JSON.parse(fs.readFileSync("./public/movie.json"));
}
