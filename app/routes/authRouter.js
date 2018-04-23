const authRouter     = require('express').Router();
const AuthService    = require('./AuthService');
const userController = require('../controllers/userController');

/* public routes */

// authRouter.route('/login')
//   .get(ViewController.showLoginForm)
//   .post(AuthService.login, ViewController.handleCreateUser);
//
// authRouter.route('/register')
//   .get(ViewController.showRegisterForm)
//   .post(UserController.create, AuthService.login, ViewController.handleCreateUser);
//
// authRouter.get('/logout', AuthService.logout, ViewController.handleLogout);

/* Error handler */
authRouter.use((err, req, res, next) => {
  console.error(err);
  res.json({ error: err });
});
module.exports = authRouter;
