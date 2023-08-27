const nodemailer= require("nodemailer");
require('dotenv').config();

const transporter= nodemailer.createTransport({
    service:'gmail',
    host: "smtp.gmail.com",
    port:587,
    auth: {
        user: "sonam.gravity@gmail.com",
        pass: "rqddzawbfmmifmro"
    }
})

module.exports= transporter;
