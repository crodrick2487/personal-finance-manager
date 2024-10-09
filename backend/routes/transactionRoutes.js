const express = require('express');
const router = express.Router();
const Transaction = require('../models/Transaction'); // Adjust the path if necessary

// Create a new transaction
router.post('/', async (req, res) => {
    const { description, amount, date } = req.body;
    try {
        const newTransaction = new Transaction({ description, amount, date });
        await newTransaction.save();
        res.status(201).json(newTransaction);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all transactions
router.get('/', async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get a specific transaction by ID
router.get('/:id', async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        if (!transaction) return res.status(404).json({ error: 'Transaction not found' });
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a transaction
router.put('/:id', async (req, res) => {
    try {
        const updatedTransaction = await Transaction.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTransaction) return res.status(404).json({ error: 'Transaction not found' });
        res.status(200).json(updatedTransaction);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Delete a transaction
router.delete('/:id', async (req, res) => {
    try {
        const deletedTransaction = await Transaction.findByIdAndDelete(req.params.id);
        if (!deletedTransaction) return res.status(404).json({ error: 'Transaction not found' });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
