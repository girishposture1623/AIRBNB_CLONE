const express = require('express')
const upload = require('../middelware/upload')
const { addnewHotel, displayHotel, displ,  } = require('../controllers/addHotel.controller')


const addHotelRouter = express.Router()

addHotelRouter.post('/', upload.single('photo'), addnewHotel)
addHotelRouter.get('/', displayHotel)
// addHotelRouter.get('/',displ)

module.exports = addHotelRouter