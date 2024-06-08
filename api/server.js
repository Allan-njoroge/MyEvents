import express from 'express';
const app = express();
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { db } from './utils/db.js'

// Import routes
import authRoute from "./routes/auth.js";
import eventsRoute from "./routes/events.js";
import usersRoute from "./routes/users.js";
import ticketsRoute from "./routes/tickets.js";

dotenv.config(); // Load the environment variables
app.use(express.json());
app.use(cors())
app.use(cookieParser())

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + db.threadId);
});



app.get('/', (req, res) => {
    res.json("server is running...")
})

// API routes
app.use("/api/auth", authRoute);
app.use("/api/events", eventsRoute);
app.use("/api/users", usersRoute);
app.use("/api/tickets", ticketsRoute);


// Running PORT
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});