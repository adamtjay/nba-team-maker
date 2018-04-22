// Import express to get the router
const userRouter = require('express').Router()
const userController = require('../controllers/userController');

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




module.exports = userRouter;
