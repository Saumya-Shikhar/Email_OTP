import emailService from '../services/emailService.js';

export const sendEmail = async (req, res) => {
    const {to} = req.body;
    try {
        const response = await emailService.sendEmail(to, 'OTP Verification');
        res.status(200).json({ message: 'Email sent successfully', response });
    } catch (error) {
        res.status(500).json({ message: 'Error sending email', error });
    }
};