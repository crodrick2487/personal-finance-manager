const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/personal-finance-manager'; // Replace with your MongoDB URI if needed

mongoose.connect(mongoURI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));
