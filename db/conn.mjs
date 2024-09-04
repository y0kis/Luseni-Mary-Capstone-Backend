import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// Global Configuration
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;

// Connect to mongoDB
mongoose.connect (mongoURI);
mongoose.connection.once( 'open', () => {
    console.log('connected to mongo');
});

export default db;