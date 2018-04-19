function goToLogin(req, res) {
    res.render('nbaMaker/login', {
    // data: data
    data: "This is where the login goes"
      });
    }

function goToPlayerSearch(req, res) {
  res.render('nbaMaker/searchByPlayerName', {
    data: "data placeholder"
  });
}

module.exports = {
  goToLogin,
  goToPlayerSearch
}
