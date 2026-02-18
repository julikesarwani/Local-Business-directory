const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

const session = require('express-session');

app.use(
  session({
    secret: 'Arshan', 
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }, 
  })
);


console.log('MongoDB URI: ', process.env.MONGO_URI);

mongoose.connect('mongodb://localhost:27017/myDatabase')
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Error connecting to MongoDB:", err));


const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`server os running on port ${PORT}`));