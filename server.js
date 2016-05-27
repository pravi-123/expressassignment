var express = require("express");
var fs = require('fs');//For file streams
var path = require("path");
var create=require("./modules/create");
var del=require("./modules/delete");
var read=require("./modules/read");
var update=require("./modules/update");
var multiparty = require('multiparty');//To access form data and input files
var app = express();
app.use(express.static(path.join(__dirname, '/public')));
//Render index.html
app.get('/index.html', function(request, response) {
    response.render('index.html');
});

//Ajax request to get json data
app.get('/getJSON', function(request, response) {
    response.json(read());
});
//Post request to add new movie
app.post('/addMovie', function(request, response) {
    var form = new multiparty.Form();
    //parse form using multiparty module to get files and fields
    form.parse(request, function(err, fields, files) {
        create(fields,files);
    });
    //redirect to home page
    response.redirect('/index.html');

});
//To update movie details
app.post('/updateMovie', function(request, response) {


    var form = new multiparty.Form();
    form.parse(request, function(err, fields, files) {
      update(fields,files);
    });
    response.redirect('/index.html');
});
//delete movie from json array
app.get("/deleteMovie", function(request, response) {

    delete(request.param('title'));
    response.redirect('/index.html');
});
app.listen(8080);
