const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('./db'); // Add this line to import database connection

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json()); // Middleware to parse JSON requests

app.get('/', (req, res) => {
    res.send('Hello from the Personal Finance Manager API!');
});

// Use the transaction routes
const transactionRoutes = require('./routes/transactionRoutes');
app.use('/api/transactions', transactionRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
