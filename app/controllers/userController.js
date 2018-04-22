function renderUserProfilePage(req, res, next) {
  res.render('user/user-profile', {
    data: "placeholder data"     //might need change
  })

}

module.exports = {
  renderUserProfilePage
}
