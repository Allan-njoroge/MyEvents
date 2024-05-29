const router = require('express').Router();
const eventsController = require('../controllers/eventsController');

// Routes to handle events
router.get('/', eventsController.getAllEvents);
router.get('/:id', eventsController.getEventById);
router.get('/:title', eventsController.getEventByTitle);
router.post('/create-event', eventsController.createEvent);
router.delete('/delete/:id', eventsController.deleteEvent);

module.exports = router;