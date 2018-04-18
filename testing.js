// *** API LINK: https://github.com/bttmly/nba

const NBA = require("nba");


/* logs the following:
{
  firstName: 'Stephen',
  lastName: 'Curry',
  playerId: 201939,
  teamId: 1610612744,
  fullName: 'Stephen Curry',
  downcaseName: 'stephen curry'
}
*/

// const curry = NBA.findPlayer('Stephen Curry');
// NBA.stats.playerInfo({ PlayerID: curry.playerId }).then(console.log);
//
// const lbj = NBA.findPlayer('LeBron James');
// NBA.stats.playerInfo({ PlayerID: lbj.playerId }).then(data => console.log(data));

// console.log(NBA.stats);
//
// const porzingis = NBA.findPlayer('Kristaps Porzingis');
// NBA.stats.playerInfo({ PlayerID: porzingis.playerId }).then(data => console.log(data));

//NBA.stats.forEach((obj) => {console.log})

//console.log(NBA.stats);

console.log(Object.getOwnPropertyNames( NBA.findPlayer ));

console.log(NBA);

// * Shows stats for a team's season (teamId filter)
// NBA.stats.teamStats({ Season: '2012-13' })
//   .then(data => {
//       for (let i=0; i < 31; i++) {console.log(data[i].teamName + ' - ' + data[i].teamId)};
//           // const res = data.filter(player => ( player.teamId === 1610612752 )); // * Knicks teamId
//           // console.log(res);
//     }).catch(err => console.log);

// NBA.stats.teamStats({ Season: '2012-13' })
    // .then(data => {
    //         const res = data.filter(player => ( player.teamId === 1610612752 )); // * Knicks teamId
    //         console.log(res);
    //   }).catch(err => console.log);

//NBA.stats. .then(data => console.log(data));




  /*const mitch = NBA.findPlayer('Donovan Mitchell');
  NBA.stats.playerInfo({ PlayerID: mitch.playerId })
    .then(data => {
      const p = document.createElement('p');
      p.innerHtml = data;
      document.body.appendChild(p);
    })
    .catch(err => console.log(err));*/
