\c nba_app_db

--DROP TABLE IF EXISTS players;
--DROP TABLE IF EXISTS nbaTeams;


CREATE TABLE nbaTeams (
  teamTableId SERIAL PRIMARY KEY,
  nbaTeamId INT,
  teamName VARCHAR(255),
  teamCity VARCHAR(255),
  teamAbbreviation VARCHAR(3)
);

CREATE TABLE players (
  playerId SERIAL PRIMARY KEY,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  teamTableId INT REFERENCES nbaTeams(teamTableId),
  customTeamId INT
);
