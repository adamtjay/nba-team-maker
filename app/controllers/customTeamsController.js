const teamsModel = require('../models/customTeamsModel');


function getCustomTeamsList(req, res, next) {
  teamsModel.getTeamsList()
    .then(data => {

      res.render('customTeams/customTeams-list', {
        data: data
      });

      next();

      })
      .catch(err => {
        console.log(err);
        next(err);

    })
}

function getPlayersOnTeamList(req, res, next) {
  teamsModel.getPlayersList(req.params.id)
    .then(data => {

        res.render('customTeams/viewCustomTeam', {
          data: data
        })

        next();

    })
    .catch(err => {
      console.log(err);
      next(err);
    })
}

function removeCustomPlayer(req, res, next) {
    teamsModel.removePlayer(req.params.id)
      .then(() => {
        next();
      }).catch(err => console.log(err));
}

module.exports = {
  getCustomTeamsList,
  getPlayersOnTeamList,
  removeCustomPlayer

}
