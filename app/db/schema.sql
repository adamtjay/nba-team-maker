\c nba_app_db

DROP TABLE IF EXISTS players CASCADE;
DROP TABLE IF EXISTS teams CASCADE;
DROP TABLE IF EXISTS customTeams CASCADE;
DROP TABLE IF EXISTS users CASCADE;


CREATE TABLE players (
  playerId SERIAL PRIMARY KEY,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  fullName VARCHAR(500),
  points INT,
  rebounds INT,
  assists INT,
  impactRating INT,
  -- teamTableId INT REFERENCES nbaTeams(teamTableId),
  customTeamId INT
);

CREATE TABLE users (
  userid SERIAL PRIMARY KEY,
  username VARCHAR(255) UNIQUE NOT NULL,
  password TEXT NOT NULL,                 --     ***  hashed password digest
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE TABLE customTeams (
  customTeamId SERIAL PRIMARY KEY,
  customTeamName VARCHAR(255),
  customTeamOwner INT REFERENCES users(userId),
  date_created TIMESTAMP NOT NULL DEFAULT NOW(),

  playerOne INT REFERENCES players(playerId),
  playerTwo INT REFERENCES players(playerId),
  playerThree INT REFERENCES players(playerId),
  playerFour INT REFERENCES players(playerId),
  playerFive INT REFERENCES players(playerId)
);
