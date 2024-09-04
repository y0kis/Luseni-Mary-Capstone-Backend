// routes/donationRoutes.mjs
import express from 'express'
import { createDonation } from '../controllers/donation.mjs';

const router = express.Router();

// POST route to create a new donation
router.post('/donation', createDonation);

export default router;
