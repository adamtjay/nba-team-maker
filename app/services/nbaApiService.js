const NBA = require('nba');


function getPlayerIdByName(name) {
  const playerName = NBA.findPlayer(name);
  return NBA.stats.playerInfo({ PlayerID: playerName.playerId });
}

module.exports = {
  getPlayerIdByName
}
