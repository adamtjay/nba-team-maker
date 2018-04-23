const nbaApiService = require('../services/nbaApiService');


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
  console.log('teamlist req: ' + req.body.nbateamselect);
  nbaApiService.getPlayerObjsByTeam(req.body.nbateamselect)
          .then(data => {
            data.forEach(player => {
              if (player.teamId === parseInt(req.body.nbateamselect)) {
                // console.log(player);
                console.log(Promise.resolve(nbaApiService.getPlayerObjByIdServ(player.playerId)));
                let playerdata = nbaApiService.getPlayerObjByIdServ(player.playerId)
                .then(newdata => {
                  resPlayers.push({
                    player: newdata
                  })
                  // console.log(newdata);
                }).catch(err=>console.log(err));
                  // .then(data => {
                  //   console.log(data);
                  //   resPlayers.push(data);
                  // }).catch(err => console.log(err));

                  // resPlayers.push(playerdata);

              };//end if

            });//end forEach
            console.log('resPlayers: ' + resPlayers);

            res.locals.playerobjs = resPlayers; //change
            next();
        })
        .catch(err => console.log(err));
      }



module.exports = {
  getPlayerObjByName,
  getPlayersFromTeamList,
  getPlayerObjById
}
