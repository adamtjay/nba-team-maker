function renderUserProfilePage(req, res, next) {
  res.render('user/user-profile', {
    data: "placeholder data"     //might need change
  })
}

function renderLogin(req, res) {
    res.render('nbaMaker/login', {
    // data: data
    data: "This is where the login goes"
      });
    }

function renderRegister(req, res) {
    res.render('nbaMaker/register', {
      data: "placeholder data"
    });
}


module.exports = {
  renderUserProfilePage,
  renderLogin,
  renderRegister
}
