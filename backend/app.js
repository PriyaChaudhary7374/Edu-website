//require enviorment variables
require('dotenv').config();


//require all packages 
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Note = require('./models/Note');
const cloudinary = require("cloudinary");
const fileUpload = require("express-fileupload");
const bodyParser=require("body-parser");
const fetchuser=require("./middleware/fetchuser")
const Category = require('./models/Category');
const pick = require("lodash/pick");





//setup port

const cors = require('cors');
const router = require('./config/router');
const blogRouter=require('./config/blogRouter')



app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});
app.use('/api/auth', require('./routes/userRoute'))
app.use('/api/quiz', require('./routes/quizRoute'))
app.use('/api/tags',require('./routes/tags'));
app.use('/api/reply',require('./routes/replies'));
app.use('/api/posts',require('./routes/posts'));
app.use("/api", router);
app.use("/api",blogRouter);
app.use('C:/Users/pri83/Education/backend/uploads', express.static('uploads'));



//all the endpoints here
// POST -- http://localhost:3003/api/note (create new note)
// GET -- http://localhost:3003/api/notes/:type/:oauthid (get all notes)
// PUT -- http://localhost:3003/api/note/:noteid (update single note)
// DELETE -- http://localhost:3003/api/note/:noteid (delete single note)

//Port listening and mongoose connection
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
app.listen(process.env.port,()=>{
    console.log("app listening")
})

