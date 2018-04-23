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

  res.locals.customTeamId = 1;   // TEMPORARILY set custom team ID

  // console.log(res.locals.playerobj.commonPlayerInfo[0].personId);

      //custom object for passing to sql
      const playerObject = {
        firstName: res.locals.playerobj.commonPlayerInfo[0].firstName,
        lastName: res.locals.playerobj.commonPlayerInfo[0].lastName,
        fullName: res.locals.playerobj.commonPlayerInfo[0].displayFirstLast,
        points: res.locals.playerobj.playerHeadlineStats[0].pts,
        rebounds: res.locals.playerobj.playerHeadlineStats[0].reb,
        assists: res.locals.playerobj.playerHeadlineStats[0].ast,
        impactRating: res.locals.playerobj.playerHeadlineStats[0].pie,
        apiId: res.locals.playerobj.commonPlayerInfo[0].personId,
        customTeamId: res.locals.customTeamId
      }

  // console.log('playerobject2: ' + res.locals.playerobj.commonPlayerInfo[0].firstName);


    nbaDb.addPlayerToTeam(playerObject) //send custom player obj to sql
      .then(data => {
        console.log(' * addToTeam * ');

        console.log(data);
        // res.locals.playerobj = data;
        next();

      })
  }

module.exports = {
  getPlayers,
  getNbaTeamsList,
  addToTeam
}
