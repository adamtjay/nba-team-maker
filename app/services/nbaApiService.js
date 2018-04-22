const NBA = require('nba');

// function getPlayerObjByName(name) {
//     const resPlayer = NBA.findPlayer(name);
//     return NBA.stats.playerInfo({ PlayerID: resPlayer.playerId });
// }

function getPlayerObjByNameServ(name) {
    const resPlayer = NBA.findPlayer(name);
    return NBA.stats.playerInfo({ PlayerID: resPlayer.playerId, Season: '2017-18' });
}

function getPlayerObjByIdServ(id) {
  const resId = parseInt(id);
  return NBA.stats.playerInfo({ PlayerID: resId });
}

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

function queryPlayersList(playersobj) {
    // console.log('playersobj length: ' + playersobj.length);
    let newPlayerInfo = [];

    for (let i=0; i < playersobj.length; i++) {
    // playersobj.forEach((obj) => {
      // console.log('obj name: ' + obj.firstName + ' ' + obj.lastName);

      // if (playersobj[i].hasOwnProperty('playerId') === 'false') { continue };

      let playersName = `${playersobj[i].firstName} ${playersobj[i].lastName}`;
      let newName = playersName.toString();
      console.log('players name: ' + newName);

      let resPlayer = NBA.findPlayer(newName);
      console.log('resplayer id: ' + resPlayer);
      let statsRes = NBA.stats.playerInfo({ PlayerID: resPlayer.playerId, Season: '2017-18' });

      newPlayerInfo.push(statsRes);

    // }
    }
    console.log('newplayer arr: ' + newPlayerInfo);
    return newPlayerInfo;
}

module.exports = {
  getPlayerObjByNameServ,
  getPlayerObjsByTeam,
  getPlayerObjByIdServ
}
