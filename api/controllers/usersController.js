import { db } from '../utils/db.js'

export const updateUser = async (req, res) => {
    const { id, firstName, secondName, emailAddress, phoneNumber } = req.body
    try {
        // query to find user
        const findUser = `SELECT * FROM users where id = ?`
        db.query(findUser, id, (err, data) => {
            if(err) return res.status(500).json(err);

            // condition if user is not available
            if(data.length === 0) return res.status(404).json("User not found")

            // Query to update users
            const updateUserQuery = `
                UPDATE users 
                SET first_name = ?, second_name = ?, email_address = ?, phone_number = ?
                WHERE id = ?
            `;
            const values = [ firstName, secondName, emailAddress, phoneNumber, id]
            db.query(updateUserQuery, values, (err, data) => {
                if(err) return res.status(500).json(err);
                // condition after successful user information update
                return res.status(200).json("User updated successfully");
            })
        })
    }
    catch (err) {
        res.status(500).json(err)
    }
}