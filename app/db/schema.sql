\c nba_app_db

DROP TABLE IF EXISTS customTeams CASCADE;
DROP TABLE IF EXISTS users CASCADE;

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
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);
