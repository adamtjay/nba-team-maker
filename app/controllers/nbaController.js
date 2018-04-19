const nbaDb = require('../models/nbaModel');

function getPlayers(req, res, next) {
  console.log('Querying the DB');
  nbaDb.getAllPlayers()
  .then(data => {
    // console.log('Queried the DB and got ' + data.length + ' results');
    console.log(data);
    // res.locals.nba = data;

    //**** temp, replace w viewController
    res.render('./nbaMaker/loginSignup', {
      data: data
    });

    next();
  })
  .catch(err => {
    console.log('getAll catch error');
    next(err);
  });
}

module.exports = {
  getPlayers
}
