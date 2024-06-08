import express from 'express'
import { rsvp } from '../controllers/ticketsController.js';

const router = express.Router()

// Route to create a new ticket
router.post('/rsvp/:id', rsvp);

export default router;