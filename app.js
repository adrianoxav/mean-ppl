var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport');
var book = require('./routes/book');
var app = express();
var api = require('./routes/api');
var config = require('./config/database');
const cors = require('cors');
var DataTable = require('mongoose-datatable');


var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect(config.database, { promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
  DataTable.configure({ verbose: true, debug : true });
  mongoose.plugin(DataTable.init);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(passport.initialize());

var originsWhitelist = [
  'http://aprendizajeactivo.espol.edu.ec'
];

app.use(bodyParser.json());

var originsWhitelist = [
  'http://aprendizajeactivo.espol.edu.ec'
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

//here is the magic

//app.options('*',cors()); // se puso esto 27 de Abril
//api.use(cors(corsOptions)); //se quito esto 27 de Abril
////app.use(bodyParser.urlencoded({ extended: false }));
//app.use(cookieParser());


// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

///////////////////////////////////////////// se agregaron estas 6 lineas el 27 de abril
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Content-Length, X-Requested-With, Content-Type, Accept, Authorization, x-access-token, X-HTTP-Method-Override");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  next();
});

api.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin, Content-Length, X-Requested-With, Content-Type, Accept, Authorization, x-access-token, X-HTTP-Method-Override");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
  res.header('token', '$0m3-U/1qu3-K3Y');

  next();
});
require('./routes/index.js')(app);

// Catch all other routes and return the index file
app.get('*', function(req, res){
  res.json({title: "Error 404 - Route not found", message: "The specified path doesn`t exist."})
});

app.use('/api', api);
app.options('*', cors());


//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
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
