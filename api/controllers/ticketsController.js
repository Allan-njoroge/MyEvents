import QRCode from 'qrcode';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../utils/db.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
});

export const rsvp = async (req, res) => {
    const eventId = req.params.id;
    try {
        const eventQuery = 'SELECT * FROM events WHERE id = ?';
        db.query(eventQuery, [eventId], (err, eventData) => {
            if (err) return res.status(500).json(err);

            if (eventData.length === 0) return res.status(404).json("Event not found");

            const checkTicketQuery = 'SELECT * FROM tickets WHERE event_id = ? AND first_name = ? AND second_name = ? AND email_address = ? AND phone_number = ?';
            const checkValues = [
                eventId,
                req.body.firstName, 
                req.body.secondName,
                req.body.emailAddress,
                req.body.phoneNumber
            ];

            db.query(checkTicketQuery, checkValues, (err, ticketData) => {
                if (err) return res.status(500).json(err);

                if (ticketData.length > 0) {
                    return res.status(400).json("User has already registered for this event");
                }

                const ticketNumber = uuidv4();

                const newTicketQuery = 'INSERT INTO tickets (ticket_number, first_name, second_name, email_address, phone_number, event_id) VALUES (?)';
                const values = [
                    ticketNumber,
                    req.body.firstName, 
                    req.body.secondName,
                    req.body.emailAddress,
                    req.body.phoneNumber,
                    eventId
                ];
                db.query(newTicketQuery, [values], async (err, result) => {
                    if (err) return res.status(500).json(err);

                    // Send ticket
                    const qrCodeValue = `https://example.com/tickets/${ticketNumber}`;
                    const qrCodeImage = await QRCode.toDataURL(qrCodeValue);
                    const mailOptions = {
                        from: process.env.EMAIL,
                        to: req.body.emailAddress,
                        subject: 'Your Ticket for the Event',
                        html: `
                            <p>Dear ${req.body.firstName + req.body.secondName},</p>
                            <p>Thank you for reserving a ticket for the event. Your ticket details:</p>
                            <p>Ticket Number: ${ticketNumber}</p>
                            <p>Event Name: ${eventData[0].name}</p>
                            <p>Event Date: ${eventData[0].date}</p>
                            <p>QR Code:</p>
                            <img src="${qrCodeImage}" alt="QR Code" />
                        `,
                    };

                    transporter.sendMail(mailOptions, (err, info) => {
                        if (err) {
                            console.error('Error sending email:', err);
                            return res.status(500).json(err);
                        }
                        console.log('Email sent:', info);
                        return res.status(200).json("Ticket reserved successfully and sent via email");
                    });
                });
            });
        });
    } catch (err) {
        res.status(500).json("Error generating ticket");
    }
};
