// *** API LINK: https://github.com/bttmly/nba

const NBA = require("nba");

// const curry = NBA.findPlayer('Stephen Curry');
// NBA.stats.playerInfo({ PlayerID: curry.playerId }).then(console.log);

// const lbj = NBA.findPlayer('LeBron James');
// NBA.stats.playerInfo({ PlayerID: lbj.playerId }).then(data => console.log(data));

// const porzingis = NBA.findPlayer('Kristaps Porzingis');
// NBA.stats.playerInfo({ PlayerID: porzingis.playerId }).then(data => console.log(data));

// console.log(NBA.stats);

//NBA.stats.forEach((obj) => {console.log})

// console.log(Object.getOwnPropertyNames( NBA.findPlayer ));

// console.log(NBA);

// **  get Players, based on Season & Team
NBA.stats.playersInfo({ Season: '2017-18' })
  .then(data => {
      const res = data.filter(player => player.teamId === 1610612752); // * Knicks teamId
      console.log(res);
});

// ** get Team Stats, based on Season
NBA.stats.teamStats({ Season: '2012-13' })
  .then(data => {
      const res = data.filter(player => player.teamId === 1610612752); // * Knicks teamId
      console.log(res);
});


//NBA.stats. .then(data => console.log(data));



  /*const mitch = NBA.findPlayer('Donovan Mitchell');
  NBA.stats.playerInfo({ PlayerID: mitch.playerId })
    .then(data => {
      const p = document.createElement('p');
      p.innerHtml = data;
      document.body.appendChild(p);
    })
    .catch(err => console.log(err));*/
