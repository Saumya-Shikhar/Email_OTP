import emailService from '../services/emailService.js';

export const sendEmail = async (req, res) => {
    try {
        const { to, subject, text } = req.body;
        const response = await emailService.sendEmail(to, subject, text);
        res.status(200).json({ message: 'Email sent successfully', response });
    } catch (error) {
        res.status(500).json({ message: 'Error sending email', error });
    }
};
