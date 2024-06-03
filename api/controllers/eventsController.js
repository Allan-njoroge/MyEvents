import { db } from '../db.js'

// Get all events
export const getAllEvents = async (req, res) => {
    const events = 'SELECT * FROM events'
    db.query(events, (err, data) => {
        if(err) res.send(err)

        res.status(200).json(data)
    })
};

// Get event by title
export const getEventByTitle = async (req, res) => {
    try{
        const event = await 'SELECT * FROM events WHERE title = ?'
            db.query(event, [req.params.title], (err, data) => {
                if(err) res.send(err)

                if(event.length === 0) res.status(404).json("No events found")

                res.status(200).json(data)
            })
    }
    catch (err) {
        console.log(err)
    }
    
};

// Add an my events
export const addEvent = async (req, res) => {
    try{
        const insertEvent = 'INSERT INTO my_events (event_id) VALUES (?)'
        await db.query(insertEvent, [req.body.event_id])

        res.status(200).json("Event successfully events")
    }
    catch (err) {
        res.status(500).json("Error adding events to myEvents")
    }
}

// Delete event
export const deleteEvent = async (req, res) => {
    const remove = 'DELETE FROM my_events WHERE e_id = ?'
    db.query(remove, req.body.e_id, (err, data) => {
        if(err) return res.status(500).json(err)

        return res.status(200).json("Deleted Successfully")
    })
};

// MyEvents
export const myEvents = async (req, res) => {
    const userId = JSON.parse(localStorage.getItem("user")).id;
    const events = 'SELECT e.*, m.id FROM events e, my_events m JOIN ON e.id = m.e_id WHERE m.u_id = ?';

    db.query(events, [userId], (err, data) => {
        if(err) return res.status(500).json(err)

        if(data.length === 0) return res.status(404).json("No events found!")

        return res.json(200).json(data)
    })
};