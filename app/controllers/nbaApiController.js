const nbaApiService = require('../services/nbaApiService');
const nbaModel = require('../models/nbaModel');


function getPlayerObjByName(req, res, next) {
  console.log('req: ' + req.body.playername);
  // console.log(typeof(req.body.playername));
  nbaApiService.getPlayerObjByNameServ(req.body.playername)   //player's name
    .then(data => {
      console.log(data);
      // res.send(data);

      res.locals.playerobj = data;
      next();
    })
    .catch(err => console.log(err));
}

function getPlayerObjById(req, res, next) {
  console.log('id req: ' + req.params.id);
  nbaApiService.getPlayerObjByIdServ(req.params.id)
    .then(data => {
      console.log(data);

      res.locals.playerobj = data;
      next();
    })
    .catch(err => console.log(err));
}

function getPlayersFromTeamList(req, res, next) {
  const resPlayers = [];
  console.log('req: ' + req.params.id);
  // nbaApiService.getPlayerObjsByTeam(req.body.nbateamselect.data-api-id)
  nbaApiService.getPlayerObjsByTeam(req.params.id)
          .then(data => {
            data.forEach(player => {
              if (player.teamId === parseInt(req.params.id)) {
                console.log(player);
                resPlayers.push(player);
                    };
              });
            // console.log('resPlayers: ' + resPlayers);

            res.locals.playerobjs = resPlayers; //change

            // getting the team name from db, based on id
            res.locals.teamname = nbaModel.getTeamName(req.params.id).then(data => res.send(data)).catch(err => console.log(err));

            next();
        })
        .catch(err => console.log(err));
      }



module.exports = {
  getPlayerObjByName,
  getPlayersFromTeamList,
  getPlayerObjById
}
