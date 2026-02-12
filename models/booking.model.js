const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },

  hotel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Liting',
    required: true
  },

  checkIn: Date,
  checkOut: Date,

  totalPrice: Number,

  status: {
    type: String,
    default: "confirmed"
  }

}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);
