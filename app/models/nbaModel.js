const db = require('../config/connection');

function getAllPlayers() {
  const queryP = db.any(`
    SELECT players.playerId, players.firstName, players.lastName, nbaTeams.teamCity, nbaTeams.teamName, nbaTeams.nbaTeamId
    FROM players
    JOIN nbaTeams
    ON players.teamTableId = nbaTeams.teamTableId
    ORDER BY players.playerId
    `
  );
  return queryP;
}

function getTeamsList() {
  const queryP = db.any(`
    SELECT *
    FROM nbaTeams
    `);
    return queryP;
}


module.exports = {
  getAllPlayers,
  getTeamsList
}
