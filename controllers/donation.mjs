import express, { Router } from 'express';
import Donation from '../models/donation.mjs';
const router = express.Router();

// Function to create a new donation
router.post('/', async (req, res) => {
    try {
        console.log('in post request');
        console.log(req.body);
        const createDonation = await Donation.create(req.body);
        res.status(200).json(createDonation);

        const { donor_name, amount, donation_date, payment_method } = req.body;

        // Validate required fields
        if (!donor_name || !amount || !payment_method) {
            return res.status(400).json({
                message: 'Donor name, amount, and payment method are required fields.'
            });
        }

        // Create a new donation document
        const donation = new Donation({
            donor_name,
            amount,
            donation_date: donation_date || new Date(),
            payment_method
        });

        // Save the donation document to the database
        const savedDonation = await donation.save();

        // Send a response with the saved donation
        res.status(201).json({
            message: 'Donation created successfully',
            donation: savedDonation
        });
    } catch (error) {
        console.error('Error creating donation:', error);
        res.status(500).json({
            message: 'Internal server error',
            error: error.message
        });
    }
});

// Export the router to use in other parts of the application

export default Router;

