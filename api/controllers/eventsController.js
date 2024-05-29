const Event = require('../models/Events');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

// Get all events
exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.status(200).json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get events by category
exports.getEventsByCategory = async (req, res) => {
    try {
        const category = req.params.category;
        const events = await Event.find({ category: category });

        if (!events || events.length === 0) {
            return res.status(404).json({ message: 'There are no events under this category' });
        }

        res.status(200).json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get event by ID
exports.getEventById = async (req, res) => {
    try {
        const id = req.params.id;

        // Check if the provided ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ message: 'Invalid event ID' });
        }

        const event = await Event.findById(id);

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.status(200).json(event);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get event by title
exports.getEventByTitle = async (req, res) => {
    try {
        const title = req.params.title;
        const event = await Event.findOne({ title: title });

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.status(200).json(event);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create new event
exports.createEvent = async (req, res) => {
    try {
        const { title, description, image, price, location, date, startTime, endTime } = req.body;

        const newEvent = new Event({ title, description, image, price, location, date, startTime, endTime });

        const savedEvent = await newEvent.save();

        res.status(200).json(savedEvent);
    } catch (err) {
        res.status500.json({ message: err.message });
    }
};

// Update event
exports.updateEvent = async (req, res) => {
    try {
        const eventId = req.params.id;

        // Extract the user ID from the JWT token in the request header
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken._id;

        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        if (event.creator.toString() !== userId) {
            return res.status(403).json({ message: 'Only the creator can update the event' });
        }

        event.title = req.body.title || event.title;
        event.description = req.body.description || event.description;
        event.image = req.body.image || event.image;
        event.price = req.body.price || event.price;
        event.location = req.body.location || event.location;
        event.date = req.body.date || event.date;
        event.startTime = req.body.startTime || event.startTime;
        event.endTime = req.body.endTime || event.endTime;

        const updatedEvent = await event.save();

        res.status(200).json(updatedEvent);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Delete event
exports.deleteEvent = async (req, res) => {
    try {
        const eventId = req.params.id;

        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decodedToken._id;

        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        if (event.creator.toString() !== userId) {
            return res.status(403).json({ message: 'Only the creator can delete the event' });
        }

        await event.remove();

        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
