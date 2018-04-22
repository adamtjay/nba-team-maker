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
  .get(nbaViewController.redirectToHome, sendError)
  .post(sendError);

nbaRouter.get('/home', nbaViewController.renderHome, sendError);

nbaRouter.get('/searchByName', nbaViewController.renderPlayerSearch, sendError);
nbaRouter.post('/searchByName', nbaApiController.getPlayerObjByName, nbaViewController.redirectToPlayerInfo, sendError);

nbaRouter.get('/player/:id', nbaApiController.getPlayerObjById, nbaViewController.renderSearchResults, sendError);

nbaRouter.get('/search', nbaViewController.renderSearch, sendError);

nbaRouter.get('/searchByTeam', nbaController.getNbaTeamsList, nbaViewController.renderTeamSearchForm, sendError);
nbaRouter.post('/searchByTeam', nbaViewController.redirectToTeamInfo, sendError);
// nbaRouter.post('/searchByTeam', nbaApiController.getPlayersFromTeamList, nbaViewController.renderTeamSearchResults, sendError);

nbaRouter.get('/team/:id', nbaApiController.getPlayersFromTeamList, nbaViewController.renderTeamSearchResults, sendError);

nbaRouter.get('/login', nbaViewController.renderLogin, sendError);
nbaRouter.post('/login', nbaViewController.renderHome, sendError); // ( * add auth functions )

//testing
nbaRouter.get('/register', nbaViewController.renderRegister, sendError);
nbaRouter.post('/register', nbaViewController.renderHome, sendError); // ***** add CREATE USER functions

nbaRouter.get('/new', sendError);
nbaRouter.get('/:id/update', sendError);

nbaRouter.route('/:id')
  .get(sendError)
  .put(sendError)
  .delete(sendError);

module.exports = nbaRouter;
