const NBA = require('nba');

// function getPlayerObjByName(name) {
//     const resPlayer = NBA.findPlayer(name);
//     return NBA.stats.playerInfo({ PlayerID: resPlayer.playerId });
// }

function getPlayerObjByName(name) {
    const resPlayer = NBA.findPlayer(name);
    return NBA.stats.playerInfo({ PlayerID: resPlayer.playerId, Season: '2010-11' });
}

module.exports = {
  getPlayerObjByName
}
