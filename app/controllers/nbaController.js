const nbaDb = require('../models/nbaModel');


//get All
function getPlayers(req, res, next) {
  console.log('Querying the DB');
  nbaDb.getAllPlayers()
  .then(data => {
    console.log('* getPlayers: *')
    console.log(data);
    // res.locals.nba = data;

    //**** temp main route, replace w viewController
    res.render('./nbaMaker/teamSearchResults', {
      data: data
    });

    next();
  })
  .catch(err => {
    console.log('getAll catch error detected');
    next(err);
  });
}

module.exports = {
  getPlayers
}
