import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Define the Donation schema
const donationSchema = new mongoose.Schema({
    donor_name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    donation_date: {
        type: Date,
        default: Date.now,
    },
    payment_method: {
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

// Update `updated_at` before saving a document
donationSchema.pre('save', function(next) {
    this.updated_at = Date.now();
    next();
});

// Create and export the Donation model
const Donation = mongoose.model('Donation', donationSchema);

export default Donation;
