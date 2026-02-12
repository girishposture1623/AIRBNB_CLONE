

// const cloudnary = require('../config/cloudinary');
// const { Listing } = require('./addHotel.mongo');

// // const createHotel = async (title, description, rent, city, landmark, cateogery) => {
//     const createHotel = async (newData) => {

//     try {
//         // let { title, description, rent, city, landmark, cateogery } = req.body
//         // if (!req.file) {
//         //     return res.status(400).send('Image not received');
//         // }

//         const result = await cloudnary.uploader.upload(
//             `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`
//         );
//         await Listing.create({
//             // title,
//             // description,
//             // rent,
//             // city,
//             // landmark,
//             // cateogery,
//             newData,
//             photo: result.secure_url
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

// const getHotel = async () => {
//     try {
//         return await Listing.find({})
//     } catch (error) {
//         console.log(error)
//     }
// }

// module.exports = {
//     createHotel,
//     getHotel
// }


const { Listing } = require("./addHotel.mongo");

const createHotel = (data) => {
  return Listing.create(data);
};


const getHotel = async() => {
   return  await Listing.find().populate('owner');
};


module.exports = {
  createHotel,
  getHotel,
};
