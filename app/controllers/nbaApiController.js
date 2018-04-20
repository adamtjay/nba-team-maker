const nbaApiService = require('../services/nbaApiService');


function getPlayerObj(req, res, next) {
  console.log('req: ' + req.body.playername);
  // console.log(typeof(req.body.playername));
  nbaApiService.getPlayerObjByName(req.body.playername)   //player's name
    .then(data => {
      console.log(data);
      // res.send(data);

      res.locals.playerobj = data;
      next();
    })
    .catch(err => console.log(err));
}

function getPlayersFromTeamList(req, res, next) {
  const resPlayers = [];
  console.log('req: ' + req.body.nbateamselect);
  // nbaApiService.getPlayerObjsByTeam(req.body.nbateamselect.data-api-id)
  nbaApiService.getPlayerObjsByTeam(req.body.nbateamselect)
          .then(data => {
            data.forEach(player => {
              if (player.teamId === parseInt(req.body.nbateamselect)) { resPlayers.push(player)};
              });
            // console.log('resPlayers: ' + resPlayers[0].firstName);

            // nbaApiService.queryPlayersList(resPlayers);  // *** for querying API

            res.locals.playerobjs = resPlayers; //change
            next();
        })
        .catch(err => console.log(err));
      }



module.exports = {
  getPlayerObj,
  getPlayersFromTeamList
}
