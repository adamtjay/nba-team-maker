// Import express to get the router
const userRouter = require('express').Router()
const userController = require('../controllers/userController');
const nbaViewController = require('../controllers/nbaViewController');

function sendError(err, req, res, next) {
  console.log('Sending error');
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}


userRouter.route('/')
  .get(userController.renderUserProfilePage, sendError)
  .post(sendError);

userRouter.get('/profile', userController.renderUserProfilePage, sendError);

//later should use authRouter for login & register instead
userRouter.get('/login', userController.renderLogin, sendError);
userRouter.post('/login', nbaViewController.redirectToHome, sendError); // ( * add auth functions )

userRouter.get('/register', userController.renderRegister, sendError);
userRouter.post('/register', userController.createNewUser, nbaViewController.redirectToHome, sendError); // ***** add CREATE USER functions

userRouter.get('/changeUsername', userController.renderUpdate, sendError);
userRouter.put('/changeUsername/:id', userController.updateUsername, nbaViewController.redirectToHome, sendError);

module.exports = userRouter;
