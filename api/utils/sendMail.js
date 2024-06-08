import dotenv from 'dotenv'
import nodemailer from 'nodemailer'
dotenv.config()

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
    },
});


const info = await transporter.sendMail(( from, to, subject, text), {
    from: from, // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: text, // plain text body
});

export default { info }