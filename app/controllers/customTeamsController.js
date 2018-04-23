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
        console.log('getAll catch error detected');
        next(err);

    })
}

module.exports = {
  getCustomTeamsList

}
