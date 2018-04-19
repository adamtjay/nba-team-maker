const nbaApiService = require('../services/nbaApiService');


function getPlayerObj(req, res, next) {
  console.log('req: ' + req.body.playername)
  nbaApiService.getPlayerObjByName(req.body.playername)   //player's name
    .then(data => {
      console.log(data);
      // res.send(data);

      res.locals.playerobj = data;
      next();
    })
    .catch(err => console.log(err));
}


module.exports = {
  getPlayerObj
}
