const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();

const userRoutes = require('./routes/userRoutes'); //added 3rd revision


app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes); // mounted the route


app.get('/', (req, res) => {
  res.send('DevLink API is running!');
});

console.log('MONGO_URI from .env:', process.env.MONGO_URI);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(5000, () => {
      console.log('Server is running on http://localhost:5000');
    });
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error.message);
  });
