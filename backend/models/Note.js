const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema=new Schema({
    title:{
        type:String,
        default:null,
    },
    desc:{
        type:String,
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
  
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category',
        required:true
    }
})

const Note = mongoose.model('Note',noteSchema)
module.exports = Note