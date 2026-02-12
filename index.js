
require('dotenv').config()

const express = require('express');
const hotelRoute = require('./routes/hotel.route');
const userRouter = require('./routes/user.route');
const path = require('path');
const connectDB = require('./config/db');
const addHotelRouter = require('./routes/addHotel.router');
const bookingRouter = require('./routes/booking.routes');


const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.set('view engine', 'ejs');
app.use(express.static('public'));


app.use('/mainpage', hotelRoute);
app.use('/hotel', hotelRoute);
app.use('/user', userRouter);

app.use('/addHotel', addHotelRouter)
app.use('/booking', bookingRouter)

connectDB()


app.listen(5000, () => {
    console.log('server started at port 5000');
});

