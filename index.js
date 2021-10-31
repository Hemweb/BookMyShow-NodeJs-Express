// MAIN BACKEND
require('dotenv').config()
const MovieModel = require("./database/movies");
const UserModel = require("./database/users");
const express = require("express");
var cors = require('cors')
const app = express();


app.use(cors())
app.use(express.json());

// import the mongoose module
const mongoose = require('mongoose');
// default mongoose collection
var mongoDB = process.env.MONGODB_URI;
// var mongoDB = "mongodb+srv://hem_web:Hemwebdb@cluster0.vgdqx.mongodb.net/book-company?retryWrites=true&w=majority";
mongoose.connect(mongoDB,  { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("CONNECTION ESABLISHED"));


// http://localhost:5000/
app.get("/", (req, res) => {
    const getAllBooks = db.books;
    return res.json({"WELCOME": `to my backend software for the bookMYSHOW`});
});

// http://localhost:5000/movies
app.get("/movies", async (req, res) => {
    const getAllMovies = await MovieModel.find();
    return res.json(getAllMovies);
});
// http://localhost:5000/movie/:id
app.get("/movie/:id", async (req, res) => {
    const {id} = req.params;
    const getSpecificMovie =  await MovieModel.findOne({_id: id});
    if(getSpecificMovie=== null){
        return res.json({"error": `no book found for the id of ${id}`})
    }
    return res.json(getSpecificMovie);
    
});

// http://localhost:5000/user-register
app.post("/user-register", async (req, res) => {
    // console.log(req.body);
    const addNewUser = await UserModel.create(req.body);
    return res.json({
        userAdded: addNewUser,
        message: "User was added !!!"
    });
});

app.listen(5000, () => {
    console.log("MY EXPRESS APPP IS RUNNING...");
})