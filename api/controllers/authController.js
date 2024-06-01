import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { db } from '../db.js/'
import dotenv from 'dotenv';

dotenv.config()

// User registration controller
export const register = (req, res) => {
    // Check existing user
    const existingUser = "SELECT * FROM users WHERE email_address = ?"

    db.query(existingUser, [req.body.emailAddress], (err, data) => {
        if(err) return res.json(err)
        if(data.length) return res.status(409).json("User already exists!");

        // Hash the password and create the user
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const newUser = "INSERT INTO users (first_name, second_name, email_address, phone_number, password) VALUES (?)"
        const value = [
            req.body.firstName,
            req.body.secondName,
            req.body.emailAddress,
            req.body.phoneNumber,
            hashedPassword,
        ]

        db.query(newUser, [value], (err, result) => {
            if(err) return res.json(err);
            return res.status(200).json("User successfully created!")
        })
    })
};

// User login controller
export const login = async (req, res) => {
    //check for existing user
    const existingUser = 'SELECT * FROM users WHERE email_address = ?'

    db.query(existingUser, [req.body.emailAddress], (err, data) => {
        if(err) return res.json(err)
        if(data.length === 0) return res.status(404).json("User not found!");
        // comparion of password
        const isPasswordValid = bcrypt.compareSync(req.body.password, data[0].password);

        if(!isPasswordValid) return res.status(400).json('Invalid email or password!');

        const token = jwt.sign({ id:data[0].id }, 'jwtsecret');
        const { password, ...other } = data[0];

        res.cookie("access_token", token, {
            httpOnly:true
        }).status(200)
        .json(other)
    })
};

// User logout controller
export const logout = async (req, res) => {
    res.clearCookie('access_token', {
        sameSite: "none",
        secure: true
    }).status(200)
    .json("Logout successfull")
};
