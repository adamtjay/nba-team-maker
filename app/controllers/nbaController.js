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

function getNbaTeamsList(req, res, next) {
  nbaDb.getTeamsList()
  .then(data => {
    console.log('* getTeamsList *');
    // console.log(data);

    //**** show the Search by Team form
    res.render('./nbaMaker/searchByTeam', {
      data: data
    });

    next();

  })
}

function addToTeam(req, res, next) {
  // console.log('playerobj: ');
  // console.log(res.locals.playerobj.commonPlayerInfo[0].firstName);

  const playerObject = {
    firstName: res.locals.playerobj.commonPlayerInfo[0].firstName,
    lastName: res.locals.playerobj.commonPlayerInfo[0].lastName,
    fullName: res.locals.playerobj.playerHeadlineStats[0].playerName,
    points: res.locals.playerobj.playerHeadlineStats[0].playerName,
    rebounds: res.locals.playerobj.playerHeadlineStats[0].playerName,
    assists: res.locals.playerobj.playerHeadlineStats[0].playerName,
    impactRating: res.locals.playerobj.playerHeadlineStats[0].playerName,
    customTeamId: res.locals.playerobj.customTeamId
  }

  // console.log('playerobject2: ' + res.locals.playerobj.commonPlayerInfo[0].firstName);

  res.locals.playerobj.customTeamId = 1;   // TEMPORARILY set custom team ID

  nbaDb.addPlayerToTeam(playerObject)
    .then(data => {
      console.log(' * addToTeam * ');

      // res.locals.playerobj = data;
      next();

    })
}

module.exports = {
  getPlayers,
  getNbaTeamsList,
  addToTeam
}
