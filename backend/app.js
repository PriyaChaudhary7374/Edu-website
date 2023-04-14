//require enviorment variables
require('dotenv').config();


//require all packages 
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const evernote = require('./models/NoteModel');


//setup port

const cors = require('cors');


app.use(cors());
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
app.listen(process.env.port,()=>{
    console.log("app listening")
})


//dummy
app.get('/',(req,res)=>{
    res.send("EVERNOTE CLONE SERVER RUNNING...")
})

//create a new note route
app.post('/api/note', async (req, res) => {

    try {
        const newNote = new evernote({
           
            title: 'Untitled',
            desc: '',
            archive: 0,
            createdAt: Date.now(),
            updatedAt: Date.now()
        })
        const response = await newNote.save();
        const id = response._id;
        newNote['_id'] = id;
        await res.status(201).send(newNote);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
})



//get all notes route
app.get('/api/notes/:type', async (req, res) => {
    try {
        let query = {
            archive: 0,
            
        }
        if (req.params.type === "trash") {
            query.archive = 1;
        }
        const notes = await evernote.find(query).sort({ createdAt: -1 });
        await res.status(200).send(notes)
    } catch (error) {
        res.status(400).send(error.message);
    }
})

//update note by id
app.put('/api/note/:id', async (req, res) => {
    try {
        await evernote.updateOne({ _id: req.params.id },
            req.body
        )
        const note = await evernote.findOne({ _id: req.params.id });
        await res.status(200).send(note);
    } catch (error) {
        res.status(400).send(error.message);
    }

})
//delete note by id
app.delete('/api/note/:id', async (req, res) => {
    try {
        await evernote.findByIdAndDelete(req.params.id);
        await res.status(200).send(req.params.id);
    } catch (error) {
        res.status(400).send(error.message);
    }
})