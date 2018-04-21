// Import express to get the router
const nbaRouter = require('express').Router()
const nbaController = require('../controllers/nbaController');
const nbaViewController = require('../controllers/nbaViewController');
const nbaApiController = require('../controllers/nbaApiController');

// Import the model
// const nbaDb = require('../models/nbaModel');

function sendError(err, req, res, next) {
  console.log('Sending error');
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}


nbaRouter.route('/')
  .get(nbaViewController.redirectToLogin, sendError)
  .post(sendError);

nbaRouter.get('/searchByName', nbaViewController.goToPlayerSearch, sendError);
nbaRouter.post('/searchByName', nbaApiController.getPlayerObj, nbaViewController.goToSearchResults, sendError);

nbaRouter.get ('/searchByTeam', nbaController.getNbaTeamsList, nbaViewController.goToTeamSearchForm, sendError);
nbaRouter.post ('/searchByTeam', nbaApiController.getPlayersFromTeamList, nbaViewController.goToTeamSearchResults, sendError);

nbaRouter.get('/login', nbaViewController.goToLogin, sendError);
nbaRouter.get('/new', sendError);
nbaRouter.get('/:id/update', sendError);

nbaRouter.route('/:id')
  .get(sendError)
  .put(sendError)
  .delete(sendError);

module.exports = nbaRouter;
