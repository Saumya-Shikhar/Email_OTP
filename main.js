import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import emailRoutes from './src/router/emailRoute.js';

const app = express();
const port = process.env.PORT || 5000;
dotenv.config();
app.use(cors());
app.use(bodyParser.json());

app.use('/email', emailRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
})