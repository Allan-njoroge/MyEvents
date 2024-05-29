const router = require('express').Router();
const ticketsController = require('../controllers/ticketsController');

// Route to create a new ticket
router.post('/generate', ticketsController.createTicket);

module.exports = router;
