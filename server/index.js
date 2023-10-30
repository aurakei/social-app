const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//routes.

//create a user
app.post("/signup", async (req, res) => {

   return req.body;

  const {
    firstname,
    lastname,
    username,
    email,
    password,
    bio,
    location,
    dateOfBirth,
  } = req.body;

  try {
    const query =
      "INSERT INTO users (first_name, last_name, user_name, email, password, bio, location, date_of_birth) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING user_id";
    const values = [
      firstname,
      lastname,
      username,
      email,
      password, // Make sure to hash the password before inserting (not shown here)
      bio,
      location,
      dateOfBirth,
    ];

    const result = await pool.query(query, values);

    if (result.rows[0] && result.rows[0].user_id) {
      res
        .status(201)
        .json({
          message: "User registered successfully",
          user_id: result.rows[0].user_id,
        });
    } else {
      res.status(500).json({ error: "Error registering user" });
    }
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).json({ error: "Error registering user" });
  }
});

//get all users
app.get("/users", async (req, res) => {
  return 'hello';
});

//get a single user
app.get("/user/:id", async (req, res) => {});

//update a users
app.patch("/user/:id", async (req, res) => {});

//delete a user
app.delete("/user/:id", async (req, res) => {});

//start the server.
app.listen(5432, () => {
  console.log("Server is running on port 5432");
});
