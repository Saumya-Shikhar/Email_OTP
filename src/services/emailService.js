import nodemailer from 'nodemailer';
import mailConfig from '../config/mailConfig.js';

const transporter = nodemailer.createTransport({
    host: mailConfig.host, 
    port: mailConfig.port,
    secure: mailConfig.secure,
    auth: mailConfig.auth,
});


const sendEmail = async (to, subject, text) => {
const otp = Math.floor(1000 + Math.random() * 9000);
const mailOptions = {
        from: mailConfig.auth.user,
        to: to,
        subject: subject,
        html: `<div>
                    <h3>Please do not share this otp with someone else.</h3>
                    <span>Your One Time Password is </span><u style="font-weight: 900;">${otp}</u>
            </div>`,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info);
        return info;
    } catch (error) {
        console.error('Error sending email in emailService.js', error);
        throw error;
    }
};

export default { sendEmail };
