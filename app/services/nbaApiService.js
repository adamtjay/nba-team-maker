const NBA = require('nba');

//get player API id for api controller, name = req.body.playername
// function getPlayerIdByName(name) {
//   const playerName = NBA.findPlayer(name);
//   return NBA.stats.playerInfo({ PlayerID: playerName.playerId });
// }

function getPlayerObjByName(name) {
    const resPlayer = NBA.findPlayer(name);
    return NBA.stats.playerInfo({ PlayerID: resPlayer.playerId });
}

module.exports = {
  getPlayerObjByName
}
