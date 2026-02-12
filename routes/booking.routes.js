const { createBooking, getBookings } = require('../controllers/booking.controller');

const bookingRouter = require('express').Router();

bookingRouter.post('/', createBooking);
bookingRouter.get('/', getBookings);

module.exports = bookingRouter;

