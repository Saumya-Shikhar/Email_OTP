import nodemailer from 'nodemailer';
import mailConfig from '../config/mailConfig.js';

const transporter = nodemailer.createTransport({
    host: mailConfig.host, 
    port: mailConfig.port,
    secure: mailConfig.secure,
    auth: mailConfig.auth,
});

const sendEmail = async (to, subject, text) => {
    const mailOptions = {
        from: mailConfig.auth.user,
        to: to,
        subject: subject,
        text: text,
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
