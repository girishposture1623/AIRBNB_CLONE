
const cloudinary = require("../config/cloudinary");
const { createHotel, getHotel, } = require("../models/addHotel.model");

const addnewHotel = async (req, res) => {
  try {
    if (!req.file) return res.status(400).send("Image required");

    const result = await cloudinary.uploader.upload(
      `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`
    );

    await createHotel({
      ...req.body,
      photo: result.secure_url
    });

    res.redirect("/form");
  } catch (err) {
    console.error(err);
  }
};

const displayHotel = async (req, res) => {
  try {
    const Data = await getHotel();
    // res.json(Data)
    res.render('form', { Data });
  } catch (error) {
    console.log(error);
  }
};



module.exports = {
  addnewHotel,
  displayHotel,
};
