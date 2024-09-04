import mongoose from "mongoose";
const { Schema } = mongoose;

// Define the Program schema
const programSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    schedule: {
        type: Date,
        required: true,
    },
    instructor: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    }
});

// Create and export the Program model
const Program = mongoose.model('Program', programSchema);
module.exports = Program;
