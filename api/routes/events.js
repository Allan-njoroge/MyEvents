import express from 'express'
import { getAllEvents, getEventByTitle, deleteEvent, myEvents, addEvent, getEventById } from '../controllers/eventsController.js';

const router = express.Router()

// Routes to handle events
router.get('/', getAllEvents);
router.get('/title/:title', getEventByTitle);
router.get('/id/:id', getEventById);
router.delete('/delete/:id', deleteEvent);
router.get('/my-events', myEvents);
router.post('/add-event', addEvent);

export default router;