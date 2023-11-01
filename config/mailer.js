const nodemailer = require('nodemailer')
require('dotenv').config()

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: process.env.USER_NAME,
        pass: process.env.APP_PASSWORD
    }
})

const passwordResetEmail = async (email, token) => {
    const resetLink = `http://localhost:3000/${token}`
    const mailOptions = {
        from: process.env.USER_NAME,
        to: email,
        subject : 'Password Reset',
        text : `Click the following link to reset your password ${resetLink}`
    }

    transporter.sendMail(mailOptions, (err, info)=>{
        if(err){
          console.log('Password Reset Email was not sent', err)
        }
        console.log('Password Reset Email was sent sucesfully', info.messageId)
    })
}

module.exports = { passwordResetEmail }