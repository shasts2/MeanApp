let express  = require('express');
let app      = express();                        // create our app w/ express
let mongoose = require('mongoose');              // mongoose for mongodb
let morgan   = require('morgan');                // log requests to the console (express4)
let bodyParser = require('body-parser');         // pull information from HTML POST (express4)
let methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
let database = require('./config/database');
let port     = process.env.PORT || 3000;         // set the port
mongoose.connect(database.url);

app.use(express.static(__dirname + '/src'));                 
app.use(morgan('dev'));                                         
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/src'));                 
app.use(morgan('dev'));                                         
app.use(bodyParser.urlencoded({'extended':'true'}));

require('./express-routes.js')(app);
app.listen(port);
console.log("App listening on port : " + port);