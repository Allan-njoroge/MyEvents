const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    secondName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    ticketNumber: {
        type: String,
        required: true,
        unique: true
    },
    event: {
        type: String,
        required: true
    },
    qrCode: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Ticket', TicketSchema);
