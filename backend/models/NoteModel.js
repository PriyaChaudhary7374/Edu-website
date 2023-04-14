const mongoose = require("mongoose");

const Evernoteschema = new mongoose.Schema({
   
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String
    },
    archive: {
        type: Number,
        required: true,
        default: '0'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('evernote',Evernoteschema);