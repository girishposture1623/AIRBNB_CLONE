const mongoose = require('mongoose')


const listingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {

    },
    // host: {
    //     type: mongoose.Schema.Types.ObjectId,

    // },
    photo: {
        type: String,
        required: true
    },
    rent: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    landmark: {
        type: String,
        required: true
    },
    cateogery: {
        type: String,
        required: true
    },
    iBooked: {
        type: Boolean,
        default: false
    },
     owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true })

const Listing = mongoose.model('Liting', listingSchema)

module.exports = {
    Listing
}