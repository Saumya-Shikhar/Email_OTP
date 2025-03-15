import dotenv from 'dotenv';
dotenv.config();

const mailConfig = {
    host: process.env.HOST,
    port: process.env.NODEMAILER_PORT,
    secure: process.env.SECURE,
    auth:{
        user: process.env.EMAIL_USER,
        pass: process.env.AUTH_PASSWORD,
    }
}

export default  mailConfig;