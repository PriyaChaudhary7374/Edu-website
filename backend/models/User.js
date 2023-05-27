const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
   
      
    },
    date: {
        type: Date,
        default: Date.now
    },
    avatarUrl: {
     type:String,
  
    },
    avatarId:{
      type:String,
    
    },
    authMethod:{
        type:String,
        default:"jwt"
    },
    googleId:{
        type:String,
        
    }
    
   
});
module.exports = mongoose.model('User', UserSchema);

