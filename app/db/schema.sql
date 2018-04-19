\c nba_app_db

DROP TABLE IF EXISTS players;


CREATE TABLE players (
  playerId SERIAL PRIMARY KEY,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  fullName VARCHAR(500),
  teamTableId INT REFERENCES nbaTeams(teamTableId),
  customTeamId INT
);
