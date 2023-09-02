const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const UserModel = require('../models/user.model');
const transporter = require('../config');
const register = async (req, res) => {

    const { name, email, username, password } = req.body;
    try {
        if (!name || !email || !password || !username) {
            return res.status(403).send({ message: "Fields can not be empty" })
        }
        let user = await UserModel.findOne({ email });
        if (user) {
            return res.status(403).send({ message: "email is already registred" })
        }
        user = await UserModel.findOne({ username });
        if (user) {
            return res.status(403).send({ message: "Username is already taken by Someone" })
        }

        const hashPassword = await bcrypt.hash(password, 12);
        const newUser = new UserModel({ name, email, username, password: hashPassword });

        const resp = await newUser.save();
        //Send Registration success Email

        // let transporter = nodemailer.createTransport({
        //     service: 'gmail',
        //     auth: {
        //         user: process.env.EMAIL,
        //         pass: process.env.PASSWORD
        //     }
        // })
        const mailOptions = {
            from: process.env.GMAIL_ID,
            to: email,
            subject: "Registration Successful",
            text: "Congratulation..!!! You have successfully Registered"

        }
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.log("Error Sending Mail", error);
            } else {
                console.log("mail Sent",info);
                // return res.status(201).send({ message: "User Registered Email Sent to your"+ 
                // "registered Email Id", resp })
            }
        })
        return res.status(201).send({ message: "User Registered", resp })

    } catch (error) {
        console.log(error);
    }
}

const login = async (req, res) => {

    const { username, password } = req.body;
    try {
        if (!password || !username) {
            return res.status(403).send({ message: "Username and Password is Mandatory" })
        }
        let user = await UserModel.findOne({ username });
        if (!user) {
            return res.status(403).send({ message: "Username is not registered with Us" })
        }
        else {
            const resp = await bcrypt.compare(password, user.password);
            const payload = {
                id: user._id,
                name: user.name,
                username: user.username
            }
            if (resp) {
                const jwttoken = jwt.sign(payload, process.env.JWT_SECRET);
                return res.status(200).send({
                    message: "Successfully Logged In"
                    , userDetails: payload, token: jwttoken
                })
            } else {
                return res.status(403).send({ message: "Incorrect Password" })
            }
        }

    } catch (error) {
        console.log(error);
    }

}
module.exports = { register, login }