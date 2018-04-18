NBA Team Maker - Mix & Compare

Wireframe: /misc/wireframe-plan.jpg
Table Schema: /misc/table-schema.jpg

Overview:

- ** Pick 5 players - from any SEASON or team
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

Tables:

- NBA Teams & teamId (Knicks: 1610612752 , etc)
- Created team (players & their stats)
- (Users)
