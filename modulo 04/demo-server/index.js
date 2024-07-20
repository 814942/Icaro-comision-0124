// server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { User } = require('./src/models');
const router = require('./src/routers');

const app = express();
const PORT = process.env.PORT || 3000;
const corsOptions = {
  "origin": "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "allowedHeaders": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
  "credentials": true
}

// Middleware to protect routes
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Router
app.use('/', router);

// welcome
app.get('/', (req, res) => {
  res.send("Welcome!!!")
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
