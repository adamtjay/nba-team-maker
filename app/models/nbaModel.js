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

function getTeamName(id) {
  const queryP = db.any(`
    SELECT teamCity, teamName
    FROM nbaTeams
    WHERE nbaTeamId = $1
    `, id);

    console.log(queryP);
    return Promise.resolve(queryP);
}

//add player to team, needs customTeamID attached to body
function addPlayerToTeam(player) {
    // console.log('player: ');
    // console.log(player);
  const queryP = db.one(`
    INSERT INTO players (firstName, lastName, fullName, points, rebounds, assists, impactRating, apiId, customTeamId)
    VALUES ($/firstName/, $/lastName/, $/fullName/, $/points/, $/rebounds/, $/assists/, $/impactRating/, $/apiId/, $/customTeamId/)
    RETURNING *
    `, player
  ).catch(err => console.log(err));
  return queryP;
}



module.exports = {
  getAllPlayers,
  getTeamsList,
  getTeamName,
  addPlayerToTeam
}
