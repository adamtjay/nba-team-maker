const NBA = require('nba');

// function getPlayerObjByName(name) {
//     const resPlayer = NBA.findPlayer(name);
//     return NBA.stats.playerInfo({ PlayerID: resPlayer.playerId });
// }

function getPlayerObjByName(name) {
    const resPlayer = NBA.findPlayer(name);
    return NBA.stats.playerInfo({ PlayerID: resPlayer.playerId, Season: '2017-18' });
}

// function getPlayerObjsByTeam(teamid) {
//       const resPlayers = [];
//
//       NBA.stats.playersInfo({ Season: '2017-18' })
//         .then(data => {
//           data.forEach(player => {
//             if (player.teamId === parseInt(teamid)) { resPlayers.push(player)};
//             });
//           console.log('resPlayers: ' + resPlayers[0].firstName);
//           return resPlayers;
//       })
//       .catch(err => console.log(err));
//     }

function getPlayerObjsByTeam() {
          // return NBA.stats.playersInfo({ Season: '2017-18' });
          const resPlayers = NBA.stats.playersInfo({ Season: '2017-18' });

          // const tempArr = [];
          // for (let i=0; i < resPlayers.length; i++) {
          //   console.log('resplayer ' + resPlayer[i]);
          //   tempArr.push(resPlayer[i]);
          // }

          // console.log('vals:' + Object.values(NBA.stats.playersInfo({ Season: '2017-18' })));

          return NBA.stats.playersInfo({ Season: '2017-18' });

}


module.exports = {
  getPlayerObjByName,
  getPlayerObjsByTeam
}
