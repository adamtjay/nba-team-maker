\c nba_app_db

DROP TABLE IF EXISTS players CASCADE;

CREATE TABLE players (
  playerId SERIAL PRIMARY KEY,
  firstName VARCHAR(255),
  lastName VARCHAR(255),
  fullName VARCHAR(500),
  points DECIMAL(10, 2),
  rebounds DECIMAL(10, 2),
  assists DECIMAL(10, 2),
  impactRating DECIMAL(10, 2),
  -- teamTableId INT REFERENCES nbaTeams(teamTableId),
  apiId TEXT,
  customTeamId INT
);

-- DELETE FROM players;

-- Players

INSERT INTO players (firstName, lastName, fullName, points, rebounds, assists, impactRating, customTeamId)
VALUES ('Stephen', 'Curry', 'Stephen Curry', 5, 5, 5, 12, 1);

INSERT INTO players (firstName, lastName, fullName, points, rebounds, assists, impactRating, customTeamId)
VALUES ('Kristaps', 'Porzingis', 'Kristaps Porzingis', 5, 5, 5, 12, 1);

INSERT INTO players (firstName, lastName, fullName, points, rebounds, assists, impactRating, customTeamId)
VALUES ('LeBron', 'James', 'LeBron James', 5, 5, 5, 12, 1);

INSERT INTO players (firstName, lastName, fullName, points, rebounds, assists, impactRating, customTeamId)
VALUES ('Ben', 'Simmons', 'Ben Simmons', 5, 5, 5, 12, 1);

INSERT INTO players (firstName, lastName, fullName, points, rebounds, assists, impactRating, customTeamId)
VALUES ('Chris', 'Paul', 'Chris Paul', 5, 5, 5, 12, 1);

INSERT INTO players (firstName, lastName, fullName, points, rebounds, assists, impactRating, customTeamId)
VALUES ('Karl-Anthony', 'Towns', 'Karl-Anthony Towns', 5, 5, 5, 12, 1);

INSERT INTO players (firstName, lastName, fullName, points, rebounds, assists, impactRating, customTeamId)
VALUES ('Nikola', 'Jokic', 'Nikola Jokic', 5, 5, 5, 12, 1);
