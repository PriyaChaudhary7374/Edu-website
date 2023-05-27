const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({
    name:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:new Date()
    },
    edit: {
        type: Boolean,
        default: true
      },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    },
  
})


const Category = mongoose.model('Category',categorySchema)

module.exports = Category