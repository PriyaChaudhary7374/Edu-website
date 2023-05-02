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


app.use(cors());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.urlencoded({ extended: true }));
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


//all the endpoints here
// POST -- http://localhost:3003/api/note (create new note)
// GET -- http://localhost:3003/api/notes/:type/:oauthid (get all notes)
// PUT -- http://localhost:3003/api/note/:noteid (update single note)
// DELETE -- http://localhost:3003/api/note/:noteid (delete single note)

//Port listening and mongoose connection
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

app.get('/api/notes/:id',fetchuser,(req, res) => {
  const id = req.params.id;

  Note.findOne({ _id: id }).populate('category',['name'])
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

app.put('/api/notes/:id',fetchuser,(req, res) => {
  const id = req.params.id;
  const body = req.body;
  Note.findOneAndUpdate({ _id: id, user: req.user.id }, body, { new: true })
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

app.delete('/api/notes/:id',fetchuser,(req, res) => {
  const id = req.params.id;
  Note.findOneAndDelete({ _id: id, user: req.user.id })
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

//dummy
app.post('/api/notes',fetchuser,(req, res) => {
    const body = pick(req.body, ["title", "desc", "user","category"]);
    const note = new Note(body);
    note.user = req.user.id //as userId cannot be sent via front end, it must be sent by default backend
    note.save()
      .then(note => res.json(note))
      .catch(err => res.json(err));
  });
  
  app.get('/api/notes',fetchuser,(req, res) => {
    Note.find({user:req.user}).populate('category',['name']).then(data => {
        if (data) {
          res.json(data);
        }
        res.json({});
        
      })
      .catch(err => res.json(err));
     
      
  });
  
  
 app.get('/api/category',fetchuser,(req,res)=>{
    Category.find()
        .then((category)=>{res.json(category)})
        .catch(err=>res.json(err))
})


app.post('/api/category',fetchuser,(req,res)=>{
    const body = req.body
    const category = new Category(body)
    category.user = req.user.id
    category.save()
        .then((category)=>{res.json(category)})
        .catch(err=>res.json(err))
})

 app.delete('/api/category/:id',fetchuser,(req,res)=>{
     const id = req.params.id
     Category.findOneAndDelete({_id:id, user:req.user.id})
         .then(data=>res.send(data))
         .catch(err=>res.send(err))
 })

