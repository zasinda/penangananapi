import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.stack);
        return;
    }
    console.log('Connected to database.');
});

export const testConnection = () => {
    db.ping((err) => {
        if (err) {
            console.error('Database ping failed:', err.message);
        } else {
            console.log('Database connection is alive.');
        }
    });
};

export default db;