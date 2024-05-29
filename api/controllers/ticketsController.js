const Ticket = require('../models/Tickets');
const QRCode = require('qrcode');
const { v4: uuidv4 } = require('uuid');

// Create a new ticket
exports.createTicket = async (req, res) => {
    const { firstName, secondName, email, event } = req.body;

    try {
        // Generate a unique ticket number
        const ticketNumber = uuidv4();

        // Generate a QR code for the data
        const qrData = JSON.stringify({ firstName, secondName, email, ticketNumber, event });
        const qrCode = await QRCode.toDataURL(qrData);

        // Create a new ticket
        const newTicket = new Ticket({ firstName, secondName, email, ticketNumber, event, qrCode });

        // Save ticket to the database
        const savedTicket = await newTicket.save();

        // Respond with the saved ticket
        res.status(201).json(savedTicket);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
