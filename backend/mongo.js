const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/Education")
.then(()=>{
    console.log("mongodb connection")
})
.catch(()=>{
    console.log("failed")
})

const newSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection=mongoose.model("collection",newSchema);
module.exports=collection;