import nodemailer from 'nodemailer';
import mailConfig from '../config/mailConfig.js';

const transporter = nodemailer.createTransport({
    host: mailConfig.host, 
    port: mailConfig.port,
    secure: mailConfig.secure,
    auth: mailConfig.auth,
});

var otp = Math.floor(Math.random() * 10000);

const sendEmail = async (to, subject, text) => {
    const mailOptions = {
        from: mailConfig.auth.user,
        to: to,
        subject: subject,
        html: `<div>
                    <h3>The Mail is Send via Node</h3>
                    <span>OTP : </span><u style="color: red;">${otp}</u>
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
