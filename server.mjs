// =================   IMPORTS   ==============
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'; // Ensure mongoose is used if needed
import db from './db/conn.mjs'; // Ensure this file correctly exports your database connection
import donationRoutes from './controllers/donation.mjs';

// =============  VARIABLE DECLARATION    ============
dotenv.config(); // Correctly load environment variables
const app = express();
const PORT = process.env.PORT || 5050;

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/donation', donationRoutes);

app.get('/', (req, res) => {
    res.send('This is the root for my server');
});

// Error-handling middleware should be after all routes
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// ============== START MY SERVER ============
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});


















































