const express = require('express');
const app = express();
const cors = require ('cors');
const pool = require ('./db');

//middleware
app.use(cors());
app.use(express.json());

//routes.

//create a user
app.post("/users", async(req, res)=>{
    try {
        console.log(req.body)
    } catch (error) {
        console.log(error.message)
    }
})

//get all users
app.get('/users',async(req,res)=>{})

//get a single user
app.get('/user/:id',async(req,res)=>{})

//update a users
app.patch('/user/:id',async(req,res)=>{})

//delete a user
app.delete('/user/:id',async(req,res)=>{})

//start the server.
app.listen(5432, () => {
    console.log("Server is running on port 5432");
});