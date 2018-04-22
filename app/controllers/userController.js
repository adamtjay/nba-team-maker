const userModel = require('../models/userModel');

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

function renderUpdate(req, res) {
    res.render('user/changeUsername', {
      user: req.params.id
    });
}

function createNewUser(req, res, next) {
  console.log(req.body);
  userModel.createUser(req.body)
  .then(data => {
    console.log(data);
    res.locals.user = data;
    next();
  }).catch(err => next(err));
}

function updateUsername(req, res, next) {
  req.body.userid = req.params.id;
  userModel.updateUserName(req.body)
 .then(data => {
   console.log(data);
   res.locals.user = data;
   next();
 })
 .catch(err => {
   next(err)
 })
}

module.exports = {
  renderUserProfilePage,
  renderLogin,
  renderRegister,
  createNewUser,
  updateUsername,
  renderUpdate
}
