var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var book = require('./routes/book');
var app = express();

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/mean-angular5', { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

app.use(logger('dev'));
app.use(bodyParser.json());

var originsWhitelist = [
  'http://localhost:4200'
];
var corsOptions = {
  origin: function(origin, callback){
    var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
    callback(null, isWhitelisted);
  },
  credentials:true
};
//here is the magic

//app.use(cors(corsOptions)); //se quito esto 27 de Abril
app.options('*',cors()); // se puso esto 27 de Abril

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());



app.use(express.static(path.join(__dirname, 'dist')));
//app.use('/books', express.static(path.join(__dirname, 'dist')));
//app.use('/book', book);
// Set our api routes

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Content-Length, X-Requested-With, Content-Type, Accept, Authorization, x-access-token, X-HTTP-Method-Override");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  next();
});

require('./routes/index.js')(app);

// Catch all other routes and return the index file
app.get('*', function(req, res){
  res.json({title: "Error 404 - Route not found", message: "The specified path doesn`t exist."})
});




//app.engine('html', require('ejs').renderFile);
//app.set('view engine', 'html');
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
