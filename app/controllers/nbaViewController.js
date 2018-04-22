function renderHome(req, res) {
    res.render('nbaMaker/home', {
      data: "placeholder data"
    });
}

function renderSearch(req, res) {
  res.render('nbaMaker/search', {
    data: "placeholder data"
  });
}

function renderPlayerSearch(req, res) {
  res.render('nbaMaker/searchByName', {
   data: "data placeholder"
    // data: res.locals.playerid
  });
}

function renderSearchResults(req, res, next) {
  res.render('nbaMaker/playerSearchResults', {
    player: res.locals.playerobj
  });
}

function renderTeamSearchForm(req, res, next) {
  res.render('nbaMaker/searchByTeam', {
    data: data     //might need change
  })
}

function renderTeamSearchResults(req, res, next) {
  // console.log('in renderteamsearchresults: ' + data)
  res.render('nbaMaker/teamSearchResults', {
    players: res.locals.playerobjs,
    team: res.locals.teamname
    // players: data
  })
}

//redirects

function redirectToHome(req, res) {
  console.log('redirecting to /home/');
  res.redirect(`/nba/home`);
}

function redirectToLogin(req, res) {
  console.log('redirecting to /login/');
  res.redirect(`/nba/login`);
}

function redirectToPlayerInfo(req, res) {
  console.log('redirecting to /player/' + res.locals.playerobj.commonPlayerInfo[0].personId);
  res.redirect(`/nba/player/${res.locals.playerobj.commonPlayerInfo[0].personId}`)
}

function redirectToTeamInfo(req, res) {
  console.log('redirecting to /team/' + req.body.nbateamselect);
  res.redirect(`/nba/team/${req.body.nbateamselect}`)
}


module.exports = {
  renderPlayerSearch,
  renderSearchResults,
  renderTeamSearchForm,
  renderTeamSearchResults,
  redirectToLogin,
  redirectToPlayerInfo,
  redirectToTeamInfo,
  redirectToHome,
  renderSearch,
  renderHome
}
