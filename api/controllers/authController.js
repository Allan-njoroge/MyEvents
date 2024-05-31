import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { db } from '../db.js/'

// User registration controller
export const register = (req, res) => {
    // Check existing user
    const q = "SELECT * FROM users WHERE email_address = ?"

    db.query(q, [req.body.email_address], (err, data) => {
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("User already exists!");

        // Hash the password and create the user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users (`first_name`, `second_name`, `email_address`, `phone_number`, `password`) VALUES (?)"
        const value = [
            req.body.first_name,
            req.body.second_name,
            req.body.email_address,
            req.body.phone_number,
            hash,
        ]

        db.query(q, [value], (err, data) => {
            if(err) return res.json(err);
            return res.status(200).json("User successfully created!")
        })
    })
};

// User login controller
export const login = async (req, res) => {};

// User logout controller
export const logout = async (req, res) => {};
