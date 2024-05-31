import express from 'express'
import { getAllEvents, getEventsByCategory, getEventById, getEventByTitle, createEvent, updateEvent, deleteEvent } from '../controllers/eventsController.js';

const router = express.Router()

// Routes to handle events
router.get('/', getAllEvents);
router.get('/:id', getEventById);
router.get('/:title', getEventByTitle);
router.post('/create-event', createEvent);
router.delete('/delete/:id', deleteEvent);

export default router;