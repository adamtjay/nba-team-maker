// Import dependencies
const path = require('path');

const express = require('express');
const logger = require('morgan');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const PORT = process.env.PORT || 3000;

const app = express();

const nbaRouter = require('./routes/nbaRouter');
const userRouter = require('./routes/userRouter');
const customTeamsRouter = require('./routes/customTeamsRouter');

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
  res.send('<div style="text-align:center;padding:20px">Hi there <br/><br/><a href="http://localhost:3000/nba">Go to NBA Maker app</a></div>');
});

// *** Routers
app.use('/nba', nbaRouter);
app.use('/user', userRouter);
app.use('/customTeams', customTeamsRouter);


// Listen on PORT
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
