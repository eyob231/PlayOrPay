const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const authRoutes = require('./routes/auth');

const User = require('./model/user');

const app = express();
app.use(express.json());
app.use(cors());
const port = 3000;


app.use('/api', authRoutes);






app.listen(port, () => {
  mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));
  console.log(`Server is running on http://localhost:${port}`);
});



