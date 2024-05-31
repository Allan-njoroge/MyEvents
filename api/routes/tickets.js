import express from 'express'
import { createTicket } from '../controllers/ticketsController.js';

const router = express.Router()

// Route to create a new ticket
router.post('/generate', createTicket);

export default router;