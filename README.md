# Luseni-Mary-Capstone-Backend

Donation
This is an Express.js API for handling donations. The API provides an endpoint to create new donation records. Each donation includes details such as the donor's name, the amount donated, the date of donation, and the payment method.

Setup
Node.js 

API Endpoints
Create a New Donation
Endpoint: POST /
Description: Create a new donation record.
Request Body:

Response:
Success (Status Code: 201)

Error (Status Code: 400 or 500):
400 Bad Request: If required fields are missing.
500 Internal Server Error: If there is an issue saving the donation.
Code Overview
routes/donations.js: Defines the endpoint for creating a donation.
models/donation.mjs: Defines the Mongoose model for the donation schema.
