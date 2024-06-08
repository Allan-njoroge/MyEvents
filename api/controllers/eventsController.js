import { db } from '../utils/db.js'

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

// Get event by id
export const getEventById = async (req, res) => {
    try{
        const eventId = req.params.id
        const getEvent = "SELECT * FROM events WHERE id = ?"
        db.query(getEvent, [eventId], (err, data) => {
            if(err) return res.status(500).json(err)
            if(data.length === 0) return res.status(404).json("No Event Found")

            res.status(200).json(data[0])
        })
    } catch (err) {
        res.status(500).json(err)
    }
};

// // Add an my events
// export const addEvent = async (req, res) => {
//     try{
//         const userId = req.body.user.id;
//         const eventId = req.body.event.id

//         // check for existing event with the same id in the my_events table
//         const existingEvent = 'SELECT * FROM events e JOIN my_events m e.id = m.e_id WHERE m.u_id = ?'
//         db.query(existingEvent, [userId], (err, data) => {
//             if(err) return res.status(500).json(err)

//             if(data.length !== 0) return res.status(409).json("Event already reserved");

//             // add the event to the my_events table if event is not in tables
//             const insertEvent = 'INSERT INTO my_events (e_id, u_id) VALUES (?)'
//             db.query(insertEvent, [eventId, userId], (err, data) => {
//                 if(err) return res.status(500).json(err)
//                 return res.status(200).json("Event successfully added to My Events")
//             })
//         })
//     }
//     catch (err) {
//         res.status(500).json(err)
//     }
// }

// Delete event
export const deleteEvent = async (req, res) => {
    const remove = 'DELETE FROM my_events WHERE e_id = ?'
    db.query(remove, req.body.e_id, (err, data) => {
        if(err) return res.status(500).json(err)

        return res.status(200).json("Deleted Successfully")
    })
};

// // MyEvents
// export const myEvents = async (req, res) => {
//     const userId = req.body.user.id
//     const events = 'SELECT e.*, m.id FROM events e, my_events m JOIN ON e.id = m.e_id WHERE m.u_id = ?';

//     await db.query(events, [userId], (err, data) => {
//         if(err) return res.status(500).json(err)

//         if(data.length === 0) return res.status(404).json("No events found!")

//         return res.json(200).json(data)
//     })
// };