// Import dependencies
const path = require('path');

const express = require('express');
const logger = require('morgan');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const PORT = 3000;

const app = express();

const nbaRouter = require('./routes/nbaRouter');


// ***  Middleware
app.use(logger('dev')); // Log request info to console
app.use(bodyParser.urlencoded({extended: false})); // parse urlencoded req bodies (for POST and PUT requests)
app.use(bodyParser.json()); // parse json req bodies (for POST and PUT requests)
app.use(methodOverride('_method'));

// *** View & static asset paths
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))

// *** Root route
app.get('/', (req, res) => {
  res.send('Hi there');
});

// *** Router
app.use('/nba', nbaRouter);

// Listen on PORT
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
