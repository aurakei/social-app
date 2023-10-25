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
    const {firstname, lastname, username, email, password, bio, location, dateOfBirth, confirmPassword } = req.body;
    //confirm if the passwords are matching
    if(password !== confirmPassword){
        return res.status(400).send('Passwords do not match');
  }

    const hashedPassword = await hashPassword(password);

    
    try {
        const query = 'INSERT INTO users (first_name, last_name, user_name, email, password, bio, location, date_of_birth) VALUES ($1, $2, $3, $4)';
        const values = [firstname, lastname, username, email, hashedPassword, bio, location, dateOfBirth ];
        await pool.query(query, values);
    
        res.status(201).send('User registered successfully.');
    } catch (error) {
        console.error('Error during user registration:', error);
        res.status(500).send('Error registering user.');
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