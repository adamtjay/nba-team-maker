const nbaApiService = require('../services/nbaApiService');

// function parsePlayerName(req, res, next) {
//   console.log(req.body);
//   const nameString = req.body.playername
// }

function getPlayerId(req, res, next) {
  console.log('req: ' + req.body.playername)
  nbaApiService.getPlayerIdByName(req.body.playername)   //player's name
    .then(data => {
      console.log(data);
      res.json(data);
      next();
    })
    .catch(err => console.log(err));
}


module.exports = {
  getPlayerId
}
