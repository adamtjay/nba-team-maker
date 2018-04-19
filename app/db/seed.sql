\c nba_app_db

DELETE FROM players;

--for testing
DROP TABLE IF EXISTS players;
CREATE TABLE players (
  playerId SERIAL PRIMARY KEY,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  teamTableId INT REFERENCES nbaTeams(teamTableId),
  customTeamId INT
);


-- Players

INSERT INTO players (firstName, lastName, teamTableId, customTeamId)
VALUES ('Stephen', 'Curry', 10, 1);

INSERT INTO players (firstName, lastName, teamTableId, customTeamId)
VALUES ('Kristaps', 'Porzingis', 20, 1);

INSERT INTO players (firstName, lastName, teamTableId, customTeamId)
VALUES ('LeBron', 'James', 6, 1);

INSERT INTO players (firstName, lastName, teamTableId, customTeamId)
VALUES ('Ben', 'Simmons', 23, 1);

INSERT INTO players (firstName, lastName, teamTableId, customTeamId)
VALUES ('Chris', 'Paul', 13, 35);
