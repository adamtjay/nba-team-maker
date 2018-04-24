// Import express to get the router
const customTeamsRouter = require('express').Router()
const nbaViewController = require('../controllers/nbaViewController');
const customTeamsController = require('../controllers/customTeamsController');

function sendError(err, req, res, next) {
  console.log('Sending error');
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}


customTeamsRouter.route('/')
  .get(customTeamsController.getCustomTeamsList, sendError)
  .post(sendError);

customTeamsRouter.get('/:id', customTeamsController.getPlayersOnTeamList, sendError);

customTeamsRouter.get('/removePlayer/:id', customTeamsController.removeCustomPlayer, nbaViewController.redirectToCustomTeams, sendError);


module.exports = customTeamsRouter;
