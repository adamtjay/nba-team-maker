function goToLogin(req, res) {
    res.render('nbaMaker/login', {
    // data: data
    data: "This is where the login goes"
      });
    }

function goToPlayerSearch(req, res) {
  res.render('nbaMaker/searchByName', {
   data: "data placeholder"
    // data: res.locals.playerid
  });
}

function goToSearchResults(req, res, next) {
  res.render('nbaMaker/playerSearchResults', {
    player: res.locals.playerobj
  });
}

function goToTeamSearchForm(req, res, next) {
  res.render('nbaMaker/searchByTeam', {
    data: data     //might need change
  })
}

function goToTeamSearchResults(req, res, next) {
  // console.log('in gototeamsearchresults: ' + data)
  res.render('nbaMaker/teamSearchResults', {
    players: res.locals.playerobjs
    // players: data
  })
}

function redirectToLogin(req, res) {
  console.log('redirecting to /login/');
  res.redirect(`/nba/login`);
}


module.exports = {
  goToLogin,
  goToPlayerSearch,
  goToSearchResults,
  goToTeamSearchForm,
  goToTeamSearchResults,
  redirectToLogin
}
