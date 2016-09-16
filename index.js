/*


 */
// start listening for incoming HTTP connections
//app.listen(app.get('port'), function() {
//    console.log('Node app is running on port', app.get('port'));
//});
/*
var express = require('express')
var app = express();

var requestTime = function (req, res, next) {
    req.requestTime = Date.now();
    next();
};
var myLogger = function (req, res, next) {
    console.log('LOGGED');
    next();
};

app.use(requestTime);

app.get('/', function (req, res) {
    var responseText = 'Hello World!<br>';
    responseText += '<small>Requested at: ' + req.requestTime + '</small>';
    res.send(responseText);
});
app.use('/contact',myLogger);
app.get('/contact',function(req, res, next){
    console.log('CONTACTED!');
    res.send('I have been waiting too long');
})

app.listen(3000);

*/

var app = require("express")();
var bodyParser = require("body-parser");
var bookController = require("./controllers/books");
var studentController = require("./controllers/students");
var courseController = require("./controllers/courses");
var completedcourseController = require("./controllers/completedcourse");
var data = require("./models/books");
var studentData = require("./models/students");
var coursesData = require("./models/courses");
var completedcoursesData = require("./models/completedcourse");
app.use(bodyParser.json());
app.get('/', function (req, res) {
    var responseText = 'Hello World!<br>';
    responseText += '<small>Welcome to my course. ' +  '</small>';
    res.send(responseText);
});
app.route('/books')
    .get(bookController.getAll)
    .post(bookController.create);

app.route('/books/:id')
    .get(bookController.getOne)
    .put(bookController.update)
    .delete(bookController.delete);


app.route('/students')
    .get(studentController.getAll)
    .post(studentController.create);

app.route('/students/:id')
    .get(studentController.getOne)
    .put(studentController.update)
    .delete(studentController.delete);


app.route('/courses')
    .get(courseController.getAll)
    .post(courseController.create);

app.route('/courses/:id')
    .get(courseController.getOne)
    .put(courseController.update)
    .delete(courseController.delete);


app.route('/pass')
    .get(completedcourseController.getAll)
    .post(completedcourseController.create);

app.route('/pass/:id')
    .get(completedcourseController.getOne)
    .put(completedcourseController.update)
    .delete(completedcourseController.delete);


app.listen(3333,function () {
    console.log("sucessfull connect")
});
