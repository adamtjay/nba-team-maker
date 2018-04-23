const db = require('../config/connection');

function getTeamsList() {
  const queryP = db.any(`
    SELECT *
    FROM customTeams
    `).catch(err => console.log(err));

    return queryP;
}

// function getPlayersList(id) {
//   const queryP = db.any(`
//     SELECT players.apiId AS apiId
//     FROM customTeams
//     JOIN players
//     ON customTeams.playerOne = players.playerid
//     WHERE customteamid = $1
//     `, id).catch(err => console.log(err));
//
//     return queryP;
// }

function getPlayersList(id) {
  const queryP = db.any(`
    SELECT *
    FROM players
    WHERE customteamid = $1
    `, id).catch(err => console.log(err));

    return queryP;
}

module.exports = {
  getTeamsList,
  getPlayersList
}
