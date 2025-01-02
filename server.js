const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

let bookings = []; // In-memory storage for bookings

// API to create a booking
app.post('/api/bookings', (req, res) => {
  const { date, guests, name, contact } = req.body;
  const newBooking = { date, guests, name, contact };
  bookings.push(newBooking);
  res.status(201).json(newBooking);
});

// API to get bookings (for availability check)
app.get('/api/availability', (req, res) => {
  const { date } = req.query;
  const availableSlots = []; // Logic to determine available slots based on bookings
  // Example logic: Check for existing bookings on the given date
  bookings.forEach(booking => {
    if (new Date(booking.date).toDateString() === new Date(date).toDateString()) {
      availableSlots.push(booking.date);
    }
  });
  res.json(availableSlots);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});