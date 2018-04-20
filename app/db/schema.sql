\c nba_app_db

DROP TABLE IF EXISTS players;
DROP TABLE IF EXISTS teams;
DROP TABLE IF EXISTS users;


CREATE TABLE players (
  playerId SERIAL PRIMARY KEY,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  fullName VARCHAR(500),
  teamTableId INT REFERENCES nbaTeams(teamTableId),
  customTeamId INT
);

CREATE TABLE users (
  userid SERIAL PRIMARY KEY,
  username VARCHAR(255),
  password TEXT               -- * change for hashing
);

CREATE TABLE teams (
  customTeamId SERIAL PRIMARY KEY,
  customTeamName VARCHAR(255),
  customTeamOwner INT REFERENCES users(userId),

  playerOne INT REFERENCES players(playerId),
  playerTwo INT REFERENCES players(playerId),
  playerThree INT REFERENCES players(playerId),
  playerFour INT REFERENCES players(playerId),
  playerFive INT REFERENCES players(playerId)
);
