NBA Team Maker - Mix & Compare Player Stats

- Wireframe: /misc/wireframe-plan.jpg
- Table Schema: /misc/table-schema.jpg
- Game & view flow: /misc/game-view-flow.jpg

Overview:

- Pick 5 players - from any SEASON or team
    - add each player (or a representation of their stats that yr) into a new "team"
    - ** compare the custom team's stats against any other team's stats from any season

Flow:

- Create (name) a new custom team
- View any player/team/season combination (using form, Team > Season > Player)
- Add 5 players to the team
- Combine/average the stats of those 5 players (all, or just main stats?)
- ** Choose another team to compare against
- ** Compares the stats of custom team vs. other team


Main form (Search Players) details:

- Choose: Team, Season(yr)
- Shows list of players who were on the team that year (& # points/rebs/ast?)
- Selecting a player from the list shows their more in depth stats (?)
- 'Add to Team' button on bottom adds that player to your team

Accessing the API:

- Module used: https://github.com/bttmly/nba
- (Issue: API endpoints don't seem accessible when the app is hosted on a cloud service, such as Heroku)
- Example API call functions used:
```Find Player by Name (see nbaApiService.js for more)
function getPlayerObjByNameServ(name) {
    const resPlayer = NBA.findPlayer(name);
    return NBA.stats.playerInfo({ PlayerID: resPlayer.playerId, Season: '2017-18' });
}
```
```Get Players List by Team  (see nbaApiController.js for more)
function getPlayersFromTeamList(req, res, next) {
  const resPlayers = [];
  console.log('req: ' + req.params.id);
  // nbaApiService.getPlayerObjsByTeam(req.body.nbateamselect.data-api-id)
  nbaApiService.getPlayerObjsByTeam(req.params.id)
          .then(data => {
            data.forEach(player => {
              if (player.teamId === parseInt(req.params.id)) {
                resPlayers.push(player);
                    };
              });
            res.locals.playerobjs = resPlayers; //change

            // getting the team name from db, based on id
            res.locals.teamname = nbaModel.getTeamName(req.params.id).then(data => res.send(data)).catch(err => console.log(err));

            next();
        }).catch(err => console.log(err));
      }
```      
