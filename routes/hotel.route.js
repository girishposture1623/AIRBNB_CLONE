
const express = require('express');
const { displayHotels, addHotel, getHotelId, removeHotel } = require('../controllers/hotel.controller');



const hotelRoute = express()

hotelRoute.use(express.Router());

hotelRoute.get('/', displayHotels);

hotelRoute.get('/:id',getHotelId);

hotelRoute.post('/', addHotel)

hotelRoute.delete('/:id',removeHotel);



module.exports = hotelRoute;