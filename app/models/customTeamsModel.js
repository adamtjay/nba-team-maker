const db = require('../config/connection');

function getTeamsList() {
  const queryP = db.any(`
    SELECT *
    FROM customTeams
    `).catch(err => console.log(err));
    
    return queryP;
}



module.exports = {
  getTeamsList
}
