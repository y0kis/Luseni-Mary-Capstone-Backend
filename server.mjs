// =================   IMPORTS   ==============
import express from "express";
import dotenv from 'dotenv';
import mongoose  from 'mongoose';
import db from './db/conn.mjs';
import donationRoutes from './controllers/donation.mjs'


// =============  VARIABLE DECLARATION    ============
dotenv.config
const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));


app.use('/donation', donationRoutes);

// ==============  ROuTES  ================
app.get('/', (req, res) => {
    res.send(
        'This is the root for my server');
});

app.use((err, req, res,next)  => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
    });



// ============== START MY SERVER ============

app.listen(PORT, () => {
    console.log(`server is listening`);
});

















































