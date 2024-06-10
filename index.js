import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import penangananRoutes from './routes/penangananRoutes.js';
import { testConnection } from './database/db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use routes
app.use('/penanganan', penangananRoutes);


// Test database connection
testConnection();

app.get('/', (req,res)=>{
    return res.status(200).json("ok")
})

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${process.env.APP_PORT}`);
});