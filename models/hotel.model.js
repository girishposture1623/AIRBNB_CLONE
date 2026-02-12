const hotels = require('../databases/hotel.data')

const getHotels = () => {
    try {
        
        return hotels

    } catch (error) {
        console.log(error)
    }
}

const getId = (id) => {
  try {
    return hotels.find(p => p.id == id); 
  } catch (error) {
    console.log(error);
  }
};

const newId = () => {
    try {
        const hotel = hotels[hotels.length - 1]
        return hotel.id + 1
    } catch (error) {
        console.log(error)
    }
}
const postHotel = (newHotel) => {
    try {
        hotels.push({
            id: newId(),
            category: newHotel.category,
            favourite: newHotel.favourite,
            desc: newHotel.desc,
            price: newHotel.price,
            nights: newHotel.nights,
            rating: newHotel.rating,

        })

    } catch (error) {
        console.log(error)
    }
}

const deleteHotel = (id) => {
    try {
        for (let i = 0; i < hotels.length; i++) {
            if (hotels[i].id == id) {
                hotels.splice(i, 1);
            }
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getHotels,
    getId,
    deleteHotel,
    postHotel
}
