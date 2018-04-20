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

module.exports = {
  goToLogin,
  goToPlayerSearch,
  goToSearchResults,
  goToTeamSearchForm
}
