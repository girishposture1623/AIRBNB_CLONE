const { Listing } = require('../models/addHotel.mongo');
const Booking = require('../models/booking.model');
const Hotel = require('../models/hotel.model');

exports.createBooking = async (req, res) => {
  const { user, hotel, checkIn, checkOut } = req.body;

  const hotelData = await Listing.findById(hotel);

  const days =
    (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);

  const totalPrice = days * hotelData.rent;

  const booking = await Booking.create({
    user,
    hotel,
    checkIn,
    checkOut,
    totalPrice
  });
  res.json(booking);
};

exports.getBookings = async (req, res) => {
  const bookings = await Booking.find()
    .populate('user')
    .populate('hotel');
  res.json(bookings);
};
