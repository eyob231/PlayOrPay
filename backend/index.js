const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const User = require('./model/user');

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;


app.get('/api/data', (req, res) => {
  const data = {
    message: 'Hello from the backend!',
    timestamp: new Date(),
  };
  res.json(data);
});
app.post("/api/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Error registering user' });
  }
});



app.listen(port, () => {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));
  console.log(`Server is running on http://localhost:${port}`);
});



