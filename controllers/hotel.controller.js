const { getHotel } = require("../models/addHotel.model")
const { getHotels, getId, deleteHotel, postHotel } = require("../models/hotel.model")

const displayHotels =async (req, res) => {
    try {
        // res.send(getHotels());
        const hotel = await getHotels()
        const Data =await getHotel()
        res.render('home', { hotel ,Data})
        console.log(hotel)
    } catch (error) {
        console.log(error)
    }
}

const getHotelId = (req, res) => {
  try {
    const hotel = getId(req.params.id);
    if (!hotel) {
      return res.status(404).send("Hotel not found");
    }

    res.render('hotel', { hotel });
  } catch (error) {
    console.log(error);
  }
};


const addHotel = (req, res) => {
    try {
        res.send(postHotel(req.body))
    } catch (error) {
        console.log(error)
    }
}

const removeHotel = (req, res) => {
    try {
        deleteHotel(req.params.id)
        // res.send('hotel delate...')
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    displayHotels,
    getHotelId,
    removeHotel,
    addHotel
}
